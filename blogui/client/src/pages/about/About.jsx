import React from "react";
import Footer from '../footer/Footer'
import "./about.css";

const About = () => {
  return (
    <>
    <div className="aboutwrapper">
      <h1 className="abouttitle">This project is awesome</h1>
      <div className="allpara">
        <p className="aboutpara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
          beatae ullam laudantium dolorum mollitia inventore! Labore, voluptatum
          harum quaerat omnis, rem provident ab numquam maiores repudiandae enim
          aspernatur quia dolore?
        </p>

        <p className="aboutpara">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          architecto magnam nemo similique in minus rem reiciendis neque
          accusantium repudiandae excepturi aut, necessitatibus at eius
          recusandae laborum nihil earum ut.
        </p>
        <p className="aboutpara">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          ab et dolor ipsam optio quae eveniet quidem quo debitis asperiores
          animi, suscipit incidunt cum alias nostrum sint aut excepturi.
          Assumenda.
        </p>
      </div>
      <div className="trem">Trems And Condition</div>
      <ul>
        <li className="tremli">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat.
        </li>
        <li className="tremli">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat.
        </li>
        <li className="tremli">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat.
        </li>
        <li className="tremli">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat.
        </li>
        <li className="tremli">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat.
        </li>
        <li className="tremli">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat.
        </li>
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default About;
