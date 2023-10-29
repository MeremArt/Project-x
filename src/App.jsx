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
              <div className="aboutimg"></div>
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
          <br />
          <br />
          <br />
          <div className="program_x_section2"></div>
          <br />
          <br />
        </section>
        <br />
        <br />
        <br />
        <br />
        <section>
          <hr style={hrStyle} />
          <div className="container">
            <div className="aboutproject">
              <h2 className="">Workshops</h2>
            </div>
          </div>
          <hr style={hrStyle} />
          <div className="container">
            <br />
            <br />
            <p className="aboutp">
              We offer a range of programs designed to equip youth with the
              skills, knowledge, and confidence they need to succeed in their
              academic and professional pursuits. Our workshops and programs are
              led by experienced mentors who are committed to providing
              individualized guidance and support to help each participant
              achieve their unique goals. Whether you are a high school student
              preparing for college, a young entrepreneur looking to start a
              business, or someone seeking to develop leadership skills, we have
              programs that can help you reach your full potential. At{" "}
              <strong>X</strong> we are committed to providing high-quality,
              impactful workshops and programs that inspire, motivate, and
              support the next generation of leaders.
              <br /> Our workshop is broken down into 4 masterclasses to ensure
              that we target all the core areas of your personality;
            </p>
          </div>
          <br />
          <br />
          <div className="container">
            <div className="firstcohort">
              <br />
              <div className="container">
                <div className="row">
                  <div className="col-lg-10">
                    <h2>
                      1ST COHORT -{" "}
                      <span style={{ color: "#EFFE60" }}>12TH SEPT ‘23</span>{" "}
                    </h2>
                  </div>
                  <div className="col-lg-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                    >
                      <path
                        d="M33.6437 22.981C38.1285 21.0724 48.1394 19.799 48.1394 19.799C48.1394 19.799 46.866 29.8099 44.9574 34.2947C41.8708 41.5476 29.7546 46.6691 29.7546 46.6691L21.2693 38.1838C21.2693 38.1838 26.3908 26.0676 33.6437 22.981Z"
                        stroke="#F1F5F5"
                        stroke-width="4"
                      />
                      <path
                        d="M29.7562 46.6691L36.8272 53.7402L40.3628 40.3051"
                        stroke="#F1F5F5"
                        stroke-width="4"
                      />
                      <path
                        d="M21.2733 38.1838L14.2022 31.1127L27.6372 27.5772"
                        stroke="#F1F5F5"
                        stroke-width="4"
                      />
                      <path
                        d="M20.1922 42.1536C21.7597 41.3262 23.6484 40.559 23.6484 40.559L27.3716 44.2822C27.3716 44.2822 26.4988 46.1263 25.7769 47.7383C25.055 49.3504 19.152 48.7905 19.152 48.7905C19.152 48.7905 18.6247 42.981 20.1922 42.1536Z"
                        stroke="#F1F5F5"
                        stroke-width="4"
                      />
                      <path
                        d="M34 22.6274C34 22.6274 34.7071 26.163 38.2426 29.6985C41.7782 33.234 45.3137 33.9411 45.3137 33.9411"
                        stroke="#F1F5F5"
                        stroke-width="4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="container">
                <div className="row">
                  <div className="col-lg-10">
                    <p>
                      Become a prodigy for <strong>$5,000</strong> or check
                      scholarship worthiness
                    </p>
                  </div>
                  <div className="col-lg-2">
                    <button>Apply now</button>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section className="">
          <div className="firstmaster">
            <br />
            <br />
            <div className="container">
              <h2>1st Masterclass</h2>
            </div>

            <br />
            <br />
            <div className="container">
              <h1>Investing in Oneself</h1>
              <p>
                This masterclass will cover everything from Personal Development
                Planning,Building a Professional Network & Pursuing Passions
              </p>
              <br />
            </div>
          </div>
          <div className="masterclass1"></div>
          <div className="secondmaster">
            <br />
            <br />
            <div className="container">
              <h2>2nd Masterclass</h2>
            </div>

            <br />
            <br />
            <div className="container">
              <h1>Building Excellence</h1>
              <p>
                At this masterclass Setting and Achieving Goals, Effective
                Communication, Time Management, Self-Discipline and Continuous
                Improvement
              </p>
              <br />
            </div>
          </div>
          <div className="masterclass2"></div>
          <div className="thirdmaster">
            <br />
            <br />
            <div className="container">
              <h2>3rd Masterclass</h2>
            </div>

            <br />
            <br />
            <div className="container">
              <h1>Maturity and Responsibility</h1>
              <p>
                We would be handling the followoing keey areas Decision Making,
                Conflict Resolution, Leadership, Personal Finance and
                Responsibility
              </p>
              <br />
            </div>
          </div>
          <center>
            <div className="masterclass3"></div>
          </center>
          <div className="forthmaster">
            <br />
            <br />
            <div className="container">
              <h2>4th Masterclass</h2>
            </div>

            <br />
            <br />
            <div className="container">
              <h1>Patriotism and Social Capital</h1>
              <p>
                Civic Engagement, Volunteerism, Building Strong Communities and
                Global Citizenship will be the key focus area in this
                masterclass
              </p>
              <br />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="firstcohort">
            <br />
            <div className="container">
              <div className="row">
                <div className="col-lg-10">
                  <h2>
                    1ST COHORT -{" "}
                    <span style={{ color: "#EFFE60" }}>12TH SEPT ‘23</span>{" "}
                  </h2>
                </div>
                <div className="col-lg-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="68"
                    viewBox="0 0 68 68"
                    fill="none"
                  >
                    <path
                      d="M33.6437 22.981C38.1285 21.0724 48.1394 19.799 48.1394 19.799C48.1394 19.799 46.866 29.8099 44.9574 34.2947C41.8708 41.5476 29.7546 46.6691 29.7546 46.6691L21.2693 38.1838C21.2693 38.1838 26.3908 26.0676 33.6437 22.981Z"
                      stroke="#F1F5F5"
                      stroke-width="4"
                    />
                    <path
                      d="M29.7562 46.6691L36.8272 53.7402L40.3628 40.3051"
                      stroke="#F1F5F5"
                      stroke-width="4"
                    />
                    <path
                      d="M21.2733 38.1838L14.2022 31.1127L27.6372 27.5772"
                      stroke="#F1F5F5"
                      stroke-width="4"
                    />
                    <path
                      d="M20.1922 42.1536C21.7597 41.3262 23.6484 40.559 23.6484 40.559L27.3716 44.2822C27.3716 44.2822 26.4988 46.1263 25.7769 47.7383C25.055 49.3504 19.152 48.7905 19.152 48.7905C19.152 48.7905 18.6247 42.981 20.1922 42.1536Z"
                      stroke="#F1F5F5"
                      stroke-width="4"
                    />
                    <path
                      d="M34 22.6274C34 22.6274 34.7071 26.163 38.2426 29.6985C41.7782 33.234 45.3137 33.9411 45.3137 33.9411"
                      stroke="#F1F5F5"
                      stroke-width="4"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="container">
              <div className="row">
                <div className="col-lg-10">
                  <p>
                    Become a prodigy for <strong>$5,000</strong> or check
                    scholarship worthiness
                  </p>
                </div>
                <div className="col-lg-2">
                  <button>Apply now</button>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <section className="container">
          <div className="cohort">
            <p>
              Workshops and mentorship programs are powerful tools for youth
              empowerment and personal development. Through these programs,
              young people can develop valuable skills, gain career guidance,
              network with professionals, and build confidence. Workshops
              provide a structured environment for skill development, offering
              guidance and support as young people learn new competencies.
              Mentorship programs offer the additional benefit of one-on-one
              guidance, where young people can learn from the experiences of
              experienced professionals. By participating in these workshops and
              mentorship programs, you can gain a competitive edge in their
              personal and professional lives, opening doors to new
              opportunities and helping you achieve their goals. Ultimately,
              these programs can be instrumental in helping you reach your full
              potential and make a positive impact in your communities.
            </p>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section className="provolunter">
          <hr style={hrStyle} />
          <div className="container">
            <div className="aboutproject">
              <h2 className="">Volunteer </h2>
            </div>
          </div>

          <div className="volunter"></div>
          <br />
          <br />
          <br />
          <div className="container">
            <p>
              Are you passionate about empowering the next generation of
              leaders? Do you have experience or expertise in a particular field
              or skill that you would like to share with young people? Consider
              becoming a mentor volunteer at <strong>X</strong> . As a mentor,
              you will have the opportunity to inspire, guide and support young
              people as they navigate the challenges of growing up and pursuing
              their dreams. Your unique perspective and life experience can make
              a significant impact on a young person's life.
              <br />
              <br /> Join us today and become a part of this fulfilling journey
              of mentorship and youth empowerment!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
