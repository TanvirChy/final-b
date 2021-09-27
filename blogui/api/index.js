const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const winnerRoute = require('./routes/winners')
const multer = require('multer');
const path = require("path");

// new change add

const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const { addUser, removeUser, getUserById, getRoomUsers } = require("./users");

app.use(cors());

const httpServer = http.createServer(app);
const io = socketIO(httpServer);

// 

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));


mongoose.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:false
}).then(console.log('Connected With Database'))
.catch(err=>console.log(err));
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'images');
  },
  filename:(req,file,cb)=>{
    cb(null, req.body.name);
  }
})

const upload = multer({storage:storage});
app.post('/api/upload', upload.single('file'),(req,res)=>{
  res.status(200).json('file has benn uploaded')
})

app.use('/api/auth',authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts',postRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/winners', winnerRoute);



// new add


io.on("connection", (socket) => {
	console.log("a user connected ", socket.id);

	socket.on("join", ({ name, room }, callback) => {
		const { error, user } = addUser({ id: socket.id, name, room });
		if (error) {
			callback(error);
		}

		socket.join(room);
		socket.emit("message", {
			user: "System",
			text: `welcome ${name} to ${room}.`,
		});

		socket.broadcast.to(room).emit("message", {
			user: "System",
			text: `${name} just joined ${room}.`,
		});

		const roomUsers = getRoomUsers(room);
		io.to(room).emit("userList", { roomUsers });

		callback();
	});

	socket.on("message", (message) => {
		const user = getUserById(socket.id);

		io.to(user.room).emit("message", {
			user: user.name,
			text: message,
		});
	});

	socket.on("disconnect", () => {
		const user = removeUser(socket.id);

		if (user) {
			io.to(user.room).emit("message", {
				user: "System",
				text: `${user.name} just left ${user.room}.`,
			});

			const roomUsers = getRoomUsers(user.room);
			io.to(user.room).emit("userList", { roomUsers });
		}
	});
});


// 


httpServer.listen("5000", () => {
  console.log("server is Running");
});
