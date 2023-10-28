import { useState } from "react";
import SwitchingDivs from "./component/SwitchingDivs";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { links } from "../data";
function App() {
  const hrStyle = {
    width: "100%", // Adjust the width as needed
    border: "1px solid black", // Set the line color, style, and width
    margin: "10px auto", // Center the line horizontally
  };
  return (
    <>
      <Navbar links={links} />
      <main className="projectwhite">
        <section className="heroproject">
          <div className="container">
            <center>
              <div>
                <h2>Unleash your awesomeness & Ignite your inner spark</h2>
              </div>
              <br />
              <p>let's Embark on a Journey of Growth!</p>
            </center>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="projectwhite">
          <hr style={hrStyle} />
          <div className="container">
            <div className="aboutproject">
              <h2 className="">About us</h2>
            </div>
          </div>
          <hr style={hrStyle} />
          <div className="container">
            <br />
            <br />
            <p className="aboutp">
              The lack of guidance and mentorship is a significant problem
              facing many young people today. Without access to positive role
              models and guidance, many young people struggle to make the right
              choices and navigate the challenges of adulthood. This can lead to
              a range of negative outcomes, including poor academic performance
              , social isolation, substance abuse, and even criminal behavior.
              To address this problem,<strong>Project X</strong> program which
              aims to provide young people with the support and guidance they
              need to reach their full potential.
            </p>
          </div>
          <br />
          <br />
          <div className="container">
            <center>
              <img
                width={1000}
                src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1698524075/aboutprojectx_cdkk5c.png"
              />
            </center>
          </div>
        </section>
        <br />
        <br />
        <div className="container potential">
          <center>
            <br />
            <h2>Are you ready to rock your potential and take on the world?</h2>
            <br />
            <br />
            <p>
              At <strong>X</strong>, we believe that every young person deserves
              the opportunity to realize their full potential. That's why we're
              dedicated to providing mentorship and empowerment programs to help
              young people thrive.
              <br />
              <br />
              Our mission is to connect young people with experienced mentors
              who can guide them through the challenges of growing up and help
              them develop the skills and confidence they need to succeed. We
              believe that by providing young people with the right tools and
              resources, we can create a brighter future for everyone.
            </p>
          </center>
        </div>
        <br />
        <br />
        <section className="Programpillar">
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <div className="">
              <h2 className="propil">Program pillars</h2>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="program_x_section"></div>
        </section>
      </main>
    </>
  );
}

export default App;
