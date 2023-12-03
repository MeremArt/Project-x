import { useState } from "react";
import SwitchingDivs from "./component/SwitchingDivs";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { links } from "../data";
import SlidingDiv from "./component/SlidingDiv";
import ReverseSlide from "./component/ReverseSlide";
import MainApplyNow from "./component/ApplyNowModal/MainApplyNow";
function App() {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const hrStyle = {
    width: "100%", // Adjust the width as needed
    border: "1px solid black", // Set the line color, style, and width
    margin: "10px auto", // Center the line horizontally
  };
  const WStyle = {
    width: "100%", // Adjust the width as needed
    border: "1px solid #fff", // Set the line color, style, and width
    margin: "10px auto", // Center the line horizontally
  };

  const [toggleModal, setToggleModal] = useState(false);
  const fire = (event) => {
    setToggleModal(true);

    const modalElement = document.getElementById("yourModalId");
    if (modalElement) {
      // Get the click position
      const { clientX, clientY } = event;
      setClickPosition({ x: clientX, y: clientY });
    }
  };

  const OffFire = () => {
    setToggleModal(false);
    // Additional logic related to hiding the modal if needed
  };

  return (
    <>
      <Navbar links={links} fire={fire} />

      <main className="projectwhite">
        <section className="heroproject">
          <div className="container">
            <br />
            <br />
            <br />
            <br />

            <center>
              <br />
              <br />
              <div>
                <h2>Unleash your awesomeness & Ignite your inner spark</h2>
              </div>
              <br />
              <p>let's Embark on a Journey of Growth!</p>
              <br />
              <button onClick={fire}>Apply now!</button>
              <br />
            </center>
            {toggleModal && (
              <MainApplyNow OffFire={OffFire} clickPosition={clickPosition} />
            )}
            <br id="hide_mobile" />
            <br id="hide_mobile" />
            <br id="hide_mobile" />
            <br />
          </div>
          <br />
        </section>
        <div id="Desx" className="cover-slide">
          <div className="">
            <div className="col-sm-6">
              <div className="slide-it">
                <ReverseSlide />
                <SlidingDiv />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="herohappy"> </div>
            </div>
            {/* <div className="col-sm-6">
              <div className="herohappy"> </div>
            </div> */}
          </div>
        </div>
        <div id="mobile" className="cover-slide">
          <div className="">
            <div className="row">
              <div className="col-lg-2 col-md-2  ">
                <div className="slide-it">
                  <ReverseSlide />
                </div>
              </div>

              <div className="col-lg-2 col-md-2 ">
                <div className="slide-it">
                  <SlidingDiv />
                </div>
              </div>

              <div className="col-lg-8 col-md-8 ">
                <div className="herohappy"> </div>
              </div>
            </div>
          </div>
        </div>
        <br id="hide_mobile" />
        <br id="hide_mobile" />
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
            <br id="hide_mobile" />
            <br id="hide_mobile" />
            <p className="aboutp">
              The lack of guidance and mentorship is a significant problem
              facing many young people today. Without access to positive role
              models and guidance, many young people struggle to make the right
              choices and navigate the challenges of adulthood. This can lead to
              a range of negative outcomes, including poor performance, social
              isolation, substance abuse, and even criminal behavior. To address
              this problem,<strong>Project X </strong> aims to provide young
              people with the support and guidance they need to reach their full
              potential.
            </p>
          </div>
          <br id="hide_mobile" />
          <br id="hide_mobile" />
          <div className="container">
            <center>
              <div className="aboutim">
                <img
                  className="img_abt"
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1700684318/Frame_864_1_gyqd0c.png"
                  alt="image"
                />
              </div>
            </center>
          </div>
        </section>
        <br id="hide_mobile" />
        <br id="hide_mobile" />
        <div className="container potential">
          <center>
            <br />
            <h2>
              Are you ready to explore your potential and take on the world?
            </h2>
            <br id="hide_mobile" />
            <br />
            <p>
              Every young person deserves the opportunity to realize their full
              potential. Our mission is to connect young people with well
              curated programs and experienced mentors who can guide them
              through the challenges of growing up and help them develop the
              skills and confidence they need to succeed. We believe that by
              providing the right tools and resources, we can create a brighter
              future for everyone.
            </p>
          </center>
        </div>
        <br id="hide_mobile" />
        <br id="hide_mobile" />
        <br id="hide_mobile" />
        <br id="hide_mobile" />
        <br id="hide_mobile" />
        <br />
        <section className="Programpillar">
          <br id="hide_mobile" />
          <br id="hide_mobile" />
          <br id="hide_mobile" />
          <br />
          <hr style={WStyle} />
          <div className="container">
            <div className="">
              <h2 className="propil">Program pillars</h2>
            </div>
          </div>
          <hr style={WStyle} />
          <br />
          <br />
          <br id="hide_mobile" />
          <br id="hide_mobile" />

          <div className="program_x_section">
            <div className="position_element">
              <div id="hide_mobile" className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-8">
                    <h2>
                      Take charge & change! <br /> Join the community
                    </h2>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <button id="move-btn" onClick={fire}>
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="program_x_section2">
            <div className="position_element">
              <div id="hide_mobile" className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-8">
                    <h2>
                      Become part of the 1%! <br /> join the community
                    </h2>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <button id="move-btn" onClick={fire}>
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div id="mobile_take" className="container">
            <div>
              <h2>
                Take charge & change! <br /> Join the community
              </h2>
              <div className="col-lg-4 col-md-4">
                <button id="move-btn" onClick={fire}>
                  Apply now
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="program_x_section3">
            <div className="position_element"></div>
          </div>

          <div className="program_x_section4">
            <div className="position_element"></div>
          </div>
          <div id="mobile_become" className="container">
            <div>
              <h2>
                Take charge & change! <br /> Join the community
              </h2>
              <div className="col-lg-4 col-md-4">
                <button id="move-btn" onClick={fire}>
                  Apply now
                </button>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section>
          <hr id="mobile_line" />
          <div className="container">
            <div className="aboutproject">
              <h2 className="">Workshops</h2>
            </div>
          </div>
          <hr style={hrStyle} />
          <div className="container">
            <br id="hide_mobile" />
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
              <strong>Project X</strong> we are committed to providing
              high-quality, impactful workshops and programs that inspire,
              motivate, and support the next generation of leaders.
              <br />
              Our workshop is broken down into 4 masterclasses to ensure that we
              target all the core areas of your personal and professional
              development;
            </p>
          </div>
          <br id="hide_mobile" />
          <br />
          <div className="container">
            <div className="firstcohort">
              <br />
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-10">
                    <h2>
                      1ST COHORT -{" "}
                      <span style={{ color: "#EFFE60" }}>12TH SEPT ‘23</span>{" "}
                    </h2>
                  </div>
                  <div className="col-lg-2 col-2">
                    <div className="padrocket">
                      <svg
                        id="svg_foot"
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
              </div>
              <br id="hide_mobile" />
              <br />
              <div className="container">
                <div id="impact_iyt" className="row">
                  <div className="col-lg-10 col-12">
                    <p>
                      Become a prodigy for <strong>$5,000</strong> or check
                      scholarship worthiness
                    </p>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                    <button className="first_co" onClick={fire}>
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </section>
        <br id="hide_mobile" />
        <br id="hide_mobile" />
        <br />
        <br />
        <section className="">
          <div className="firstmaster">
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
                Planning, Building a Professional Network & Pursuing Passions
              </p>
              <br />
            </div>
          </div>
          {/*where i want to work on*/}
          <div className="masterclass1"></div>
          <div className="secondmaster">
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
            <div className="container">
              <h2>3rd Masterclass</h2>
            </div>

            <br />
            <br />
            <div className="container">
              <h1>Maturity and Responsibility</h1>
              <p>
                We would be handling the following key areas Decision Making,
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
            <div className="container">
              <h2>4th Masterclass</h2>
            </div>

            <br />
            <br />
            <div className="container">
              <h1>Patriotism and Social Capital</h1>
              <p>
                Civic Engagement, Volunteerism, Building Strong Communities and
                Global Citizenship.
              </p>
              <br />
            </div>
          </div>
        </section>
        <br id="hide_mobile" />
        <br id="hide_mobile" />
        <br />
        <br />
        <div className="container">
          <div className="firstcohort">
            <br />
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-10">
                  <h2>
                    1ST COHORT -{" "}
                    <span style={{ color: "#EFFE60" }}>12TH SEPT ‘23</span>{" "}
                  </h2>
                </div>
                <div className="col-lg-2 col-2">
                  <div className="padrocket">
                    <svg
                      id="svg_foot"
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
            </div>
            <br id="hide_mobile" />
            <br />
            <div className="container">
              <div id="impact_iyt" className="row">
                <div className="col-lg-10 col-12">
                  <p>
                    Become a prodigy for <strong>$5,000</strong> or check
                    scholarship worthiness
                  </p>
                </div>
                <div className="col-lg-2 col-sm-6">
                  <button className="first_co" onClick={fire}>
                    Apply now
                  </button>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        <br id="hide_mobile" />
        <br id="hide_mobile" />
        <br />
        <br />
        <section className="container">
          <div className="cohort">
            <p>
              These workshops provide a structured environment for skill
              development, offering guidance and support as young people learn
              new competencies. The Project X mentorship programs offer the
              additional benefit of one-on-one guidance, where young people can
              learn from the experiences of experienced professionals. By
              participating in these workshops and mentorship programs, you can
              gain a competitive edge, open doors to new opportunities, receive
              support in achieving your goals and make a positive impact in your
              communities.
            </p>
          </div>
        </section>
        <br id="hide_mobile" />
        <br id="hide_mobile" />
        <br id="hide_mobile" />
        <br />
        <section className="provolunter">
          <hr style={hrStyle} />
          <div className="container">
            <div className="aboutproject">
              <h2 className="">Volunteer </h2>
            </div>
          </div>

          <div className="volunter"></div>
          <br id="hide_mobile" />
          <br id="hide_mobile" />
          <br id="hide_mobile" />
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
        <section>
          <br id="hide_mobile" />
          <br id="hide_mobile" />
          <br id="hide_mobile" />
          <br />
          <div id="space_impact">
            <div className="Impact">
              <br />
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-10">
                    <h2>MAKE AN IMPACT</h2>
                  </div>
                  <div className="col-lg-2 col-md-2 col-2">
                    <div className="padrocket ">
                      <svg
                        className="impact_svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1525_21972)">
                          <path
                            d="M24 48C10.7662 48 0 37.2338 0 24C0 10.7662 10.7662 0 24 0C37.2338 0 48 10.7662 48 24C48 37.2338 37.2338 48 24 48ZM24 2.46089C12.1231 2.46089 2.46089 12.1236 2.46089 24C2.46089 35.8764 12.1236 45.5391 24 45.5391C35.8764 45.5391 45.5391 35.8764 45.5391 24C45.5391 12.1236 35.8769 2.46089 24 2.46089Z"
                            fill="#070707"
                          />
                          <path
                            d="M34.3496 23.6433C37.238 19.9735 36.1682 16.1006 33.8918 14.0104C31.5985 11.902 27.5625 11.2086 23.9985 14.538C20.4345 11.2082 16.3993 11.902 14.1047 14.0104C11.8305 16.1024 10.7585 19.9749 13.6473 23.6433L12.6282 24.6637C12.2282 25.0633 12.0033 25.6055 12.0033 26.1708C12.0033 26.7362 12.2282 27.2784 12.6282 27.678C13.0282 28.0775 13.5705 28.3015 14.1358 28.3011C14.2598 28.2997 14.3833 28.2877 14.5056 28.2651C14.4829 28.3869 14.4709 28.5104 14.4696 28.6344C14.4678 29.1997 14.6918 29.7424 15.0918 30.142C15.4913 30.5415 16.034 30.7655 16.5993 30.7642C16.7229 30.7629 16.846 30.7509 16.9673 30.7286C16.8558 31.3486 17.0256 31.986 17.43 32.4686C17.8345 32.9513 18.4327 33.2291 19.0625 33.2277C19.186 33.2264 19.3091 33.2144 19.4309 33.1917C19.3247 33.7904 19.4793 34.406 19.8562 34.8833C20.2331 35.3606 20.7958 35.654 21.4029 35.69C22.01 35.7255 22.6033 35.5002 23.0336 35.0704L23.9993 34.1051L25.0887 35.1949C25.4545 35.5597 25.9509 35.7651 26.4678 35.7651C26.9847 35.7651 27.4807 35.5602 27.8465 35.1949L28.1038 34.9375C28.5376 34.5011 28.7393 33.8846 28.6469 33.2762C28.7411 33.2922 28.8358 33.3011 28.9313 33.3033C29.4487 33.3033 29.9451 33.0971 30.31 32.7304L30.5673 32.4735C31.0016 32.0366 31.2029 31.4193 31.11 30.81C31.7202 30.9171 32.3442 30.714 32.7745 30.2682L33.0313 30.0113C33.4665 29.574 33.6678 28.9562 33.574 28.3469C34.1842 28.4531 34.8078 28.25 35.238 27.8051L35.4958 27.5477C35.8607 27.1815 36.0656 26.6855 36.0656 26.1686C36.0656 25.6517 35.8607 25.1557 35.4958 24.7895L34.35 23.6437L34.3496 23.6433ZM14.6322 14.5851C16.7905 12.6011 20.438 12.07 23.722 15.3566C23.7278 15.3624 23.7367 15.3646 23.7429 15.37L27.418 19.0451C27.9691 19.6086 28.1802 20.422 27.9736 21.1824C27.7665 21.9429 27.1727 22.5371 26.4118 22.7437C25.6513 22.9504 24.838 22.7393 24.2745 22.1882L20.5793 18.4931C20.4962 18.4126 20.3829 18.3713 20.2673 18.3806C20.2309 18.3837 20.1953 18.3926 20.1611 18.4055C18.8442 18.9166 17.3905 18.9531 16.0496 18.5082C15.8447 18.4397 15.6238 18.5504 15.5558 18.7553C15.4873 18.9597 15.598 19.1811 15.8029 19.2491C16.418 19.4517 17.0589 19.566 17.706 19.5877L14.2091 23.0842C11.7042 19.8251 12.6327 16.4224 14.6322 14.5846V14.5851ZM18.1056 32.054C17.8527 31.8002 17.7109 31.4566 17.7109 31.0984C17.7109 30.7402 17.8531 30.3966 18.1056 30.1428L23.7345 24.5131C23.8096 24.4406 23.8527 24.3406 23.8536 24.2357C23.8545 24.1313 23.8131 24.0309 23.7393 23.9566C23.6656 23.8829 23.5647 23.8415 23.4602 23.8424C23.3558 23.8433 23.2558 23.8864 23.1829 23.9615L17.554 29.5904C17.2958 29.8344 16.954 29.9708 16.5985 29.9708C16.2429 29.9708 15.9011 29.8349 15.6429 29.5904C15.3909 29.3362 15.2496 28.9926 15.2496 28.6348C15.2496 28.2771 15.3909 27.9335 15.6429 27.6793L21.1967 22.126C21.3496 21.9731 21.3496 21.7255 21.1967 21.5731C21.0442 21.4202 20.7967 21.4202 20.6438 21.5731L15.0905 27.1269C14.8322 27.3713 14.4905 27.5073 14.1349 27.5073C13.7793 27.5073 13.4376 27.3713 13.1793 27.1269C12.9269 26.8726 12.7856 26.5295 12.7856 26.1713C12.7856 25.8131 12.9269 25.47 13.1793 25.2157L18.8611 19.5322C19.3176 19.4735 19.7669 19.3691 20.2025 19.2202L23.7216 22.7393C24.4833 23.4815 25.5807 23.7651 26.6069 23.4855C27.6331 23.206 28.4345 22.4042 28.7145 21.3784C28.9945 20.3526 28.7105 19.2549 27.9687 18.4931L24.558 15.0824C27.7656 12.1029 31.266 12.658 33.3633 14.5846C35.3629 16.4229 36.2913 19.8255 33.7878 23.0842L32.7736 22.07C32.4078 21.7042 31.9118 21.4989 31.3945 21.4989C30.8771 21.4989 30.3811 21.7042 30.0158 22.07L29.7589 22.3268C29.3233 22.7642 29.122 23.3829 29.2158 23.9926C29.1216 23.9766 29.026 23.9673 28.9305 23.9651C28.4131 23.9628 27.9162 24.1682 27.5513 24.5344L27.2945 24.7913C26.8607 25.2273 26.6585 25.8428 26.75 26.4513C26.1402 26.3593 25.5229 26.562 25.0865 26.9975L24.8296 27.2544C24.3949 27.6917 24.1936 28.3086 24.2865 28.918C23.6776 28.8246 23.0602 29.0264 22.6233 29.4606L22.4949 29.5891L22.4887 29.5829L20.0167 32.0549C19.7585 32.2993 19.4162 32.4353 19.0607 32.4353C18.7051 32.4353 18.3629 32.2984 18.1051 32.0535L18.1056 32.054ZM22.4811 34.5175C22.1371 34.8442 21.6465 34.9664 21.1896 34.8397C20.7322 34.7131 20.3749 34.3557 20.2482 33.8984C20.1216 33.4411 20.2438 32.9509 20.5705 32.6064L21.8225 31.354C21.8753 31.778 22.0673 32.1722 22.3687 32.4753L23.4482 33.5549L22.4816 34.5175H22.4811ZM27.5513 34.3869L27.2945 34.6437C27.0749 34.8633 26.7776 34.9864 26.4669 34.9864C26.1562 34.9864 25.8589 34.8633 25.6393 34.6437L22.9189 31.9233C22.6998 31.7037 22.5771 31.406 22.5771 31.0957C22.5771 30.7855 22.7002 30.4877 22.9189 30.2682L23.1762 30.0113C23.3958 29.7917 23.6936 29.6686 24.0038 29.6686C24.314 29.6686 24.6118 29.7917 24.8313 30.0113L27.5513 32.7309C27.7713 32.9504 27.8949 33.2482 27.8949 33.5589C27.8949 33.8695 27.7713 34.1673 27.5513 34.3869ZM30.0149 31.9229L29.7576 32.1802C29.538 32.3997 29.2402 32.5229 28.93 32.5229C28.6198 32.5229 28.322 32.3997 28.1025 32.1802L25.382 29.4597C25.1625 29.2402 25.0393 28.9424 25.0393 28.6322C25.0393 28.322 25.1625 28.0242 25.382 27.8046L25.6389 27.5473C25.8585 27.3277 26.1562 27.2046 26.4665 27.2046C26.7767 27.2046 27.0745 27.3277 27.294 27.5473L30.0145 30.2677C30.234 30.4873 30.3571 30.7851 30.3571 31.0953C30.3571 31.4055 30.2336 31.7033 30.0145 31.9224L30.0149 31.9229ZM32.478 29.4597L32.2211 29.7166C32.0016 29.9362 31.7042 30.0593 31.394 30.0593C31.0838 30.0593 30.786 29.9362 30.5669 29.7166L27.8456 26.9975C27.6265 26.778 27.5029 26.4806 27.5029 26.1704C27.5029 25.8602 27.626 25.5624 27.8456 25.3433L28.1025 25.0864C28.3225 24.8682 28.6198 24.7455 28.93 24.7455C29.2402 24.7455 29.5371 24.8682 29.7576 25.0864L32.478 27.8068C32.6971 28.0264 32.8198 28.3233 32.8198 28.6335C32.8198 28.9437 32.6967 29.2406 32.478 29.4602H32.4785L32.478 29.4597ZM34.9429 26.9953L34.6851 27.2526C34.4656 27.4722 34.1682 27.5953 33.858 27.5953C33.5478 27.5953 33.25 27.4722 33.0309 27.2526L30.3105 24.5322C30.0909 24.3126 29.9678 24.0149 29.9678 23.7046C29.9678 23.3944 30.0909 23.0966 30.3105 22.8771L30.5673 22.6202C30.7869 22.4006 31.0847 22.2775 31.3949 22.2775C31.7051 22.2775 32.0029 22.4006 32.2225 22.6202L34.9429 25.3406C35.1616 25.5606 35.2842 25.858 35.2842 26.1682C35.2842 26.4784 35.1611 26.7757 34.9425 26.9957L34.9429 26.9953Z"
                            fill="#070707"
                          />
                          <path
                            d="M26.47 36.011C25.8838 36.011 25.3323 35.783 24.9171 35.3692L24.0016 34.4532L23.2096 35.2443C22.7305 35.7234 22.0674 35.975 21.3905 35.9354C20.714 35.8959 20.0851 35.5679 19.6651 35.0359C19.3127 34.5892 19.1345 34.0328 19.1562 33.471C19.1269 33.4723 19.0971 33.4732 19.0678 33.4737H19.0616C18.3567 33.4737 17.6949 33.1652 17.2438 32.6265C16.8611 32.1701 16.6674 31.5937 16.6918 31.0074C16.6629 31.0088 16.6336 31.0097 16.6047 31.0101H16.5994C15.9727 31.0101 15.362 30.7572 14.9202 30.3159C14.4776 29.8728 14.2242 29.2599 14.226 28.6337C14.226 28.6039 14.2274 28.5741 14.2287 28.5443C14.1994 28.5457 14.17 28.5465 14.1411 28.547H14.138C13.5114 28.547 12.8998 28.2937 12.4576 27.8519C12.0082 27.4025 11.7607 26.8057 11.7607 26.171C11.7607 25.5354 12.0082 24.9385 12.458 24.4901L13.3242 23.6225C12.0505 21.931 11.4891 20.0634 11.6994 18.2083C11.8882 16.5417 12.6847 14.9865 13.942 13.8297C15.2118 12.6634 16.8576 12.0097 18.5767 11.9892C20.4834 11.9688 22.358 12.7314 24.0025 14.2048C25.6234 12.7532 27.4647 11.9888 29.346 11.9888C29.3736 11.9888 29.4011 11.9888 29.4287 11.9892C31.1482 12.0097 32.7936 12.6634 34.0625 13.8292C36.3558 15.9345 37.5011 19.8754 34.6807 23.6221L35.6736 24.615C36.0878 25.0305 36.3154 25.5817 36.3154 26.1679C36.3154 26.7541 36.0874 27.3052 35.6736 27.7203L35.4154 27.9781C35.0029 28.4043 34.4336 28.6337 33.8456 28.6194C33.8505 29.1999 33.6229 29.7679 33.2091 30.1843L32.9518 30.4421C32.5394 30.8692 31.9678 31.1003 31.3811 31.0839C31.3856 31.6639 31.158 32.2314 30.7447 32.647L30.4865 32.9048C30.0789 33.3145 29.5127 33.5497 28.934 33.5497C28.9282 33.5497 28.9229 33.5497 28.9176 33.5492C28.9216 34.1288 28.6945 34.6959 28.2811 35.1114L28.0234 35.3692C27.6082 35.7834 27.0567 36.0114 26.4705 36.0114L26.47 36.011ZM24.002 33.7572L25.2651 35.0208C25.5869 35.3417 26.0149 35.519 26.47 35.519C26.9251 35.519 27.3531 35.3421 27.6749 35.0208L27.9318 34.7639C28.1691 34.5248 28.3274 34.2212 28.3923 33.8963L27.4718 34.8172C27.2047 35.0848 26.8487 35.2319 26.4705 35.2319C26.0922 35.2319 25.7362 35.0843 25.4691 34.8168L22.7487 32.0963C22.4816 31.8283 22.3345 31.4728 22.3345 31.095C22.3345 30.7172 22.4816 30.3612 22.7482 30.0941L23.006 29.8368C23.2731 29.5692 23.6287 29.4221 24.0074 29.4221C24.386 29.4221 24.7411 29.5692 25.0087 29.8368L27.7287 32.5563C27.9967 32.8239 28.1442 33.1794 28.1442 33.5581C28.1442 33.6919 28.126 33.823 28.09 33.9483L28.4025 33.8443C28.4314 33.6701 28.4336 33.4905 28.4065 33.3128L28.3554 32.9768L28.6905 33.0332C28.7718 33.047 28.8558 33.055 28.9398 33.0572C29.3829 33.0572 29.8216 32.8745 30.138 32.5568L30.3958 32.299C30.6331 32.0603 30.7914 31.7568 30.8558 31.4323L29.9349 32.3537C29.6674 32.6212 29.3118 32.7683 28.9336 32.7683C28.5554 32.7683 28.1994 32.6212 27.9322 32.3537L25.2122 29.6332C24.9487 29.3701 24.7976 29.0048 24.7976 28.6319C24.7976 28.259 24.9451 27.8977 25.2127 27.6305L25.4696 27.3732C25.7371 27.1057 26.0927 26.9581 26.4709 26.9581C26.8491 26.9581 27.2047 27.1052 27.4722 27.3728L30.1927 30.0932C30.4602 30.3608 30.6074 30.7163 30.6074 31.0945C30.6074 31.2283 30.5887 31.359 30.5531 31.4843L30.8656 31.3799C30.8949 31.2052 30.8971 31.0248 30.8696 30.8461L30.818 30.5074L31.1554 30.5665C31.6856 30.659 32.226 30.4839 32.6003 30.0959L32.8602 29.8359C33.238 29.4559 33.4154 28.9123 33.334 28.3825L33.282 28.0443L33.6194 28.103C34.1496 28.1959 34.69 28.019 35.0643 27.6323L35.3251 27.3719C35.5665 27.1297 35.7265 26.8274 35.7909 26.4985L34.862 27.4257C34.5949 27.6928 34.2394 27.8403 33.8611 27.8403C33.4829 27.8403 33.1274 27.6932 32.8598 27.4257L30.1394 24.7048C29.8718 24.4372 29.7247 24.0817 29.7247 23.7034C29.7247 23.3252 29.8718 22.9697 30.1394 22.7017L30.3962 22.4448C30.6638 22.1772 31.0194 22.0301 31.3976 22.0301C31.7758 22.0301 32.1314 22.1772 32.3989 22.4448L35.1198 25.1652C35.3865 25.4337 35.5331 25.7888 35.5331 26.1665C35.5331 26.3114 35.5114 26.4532 35.4696 26.5883L35.7909 26.4963C35.8118 26.3888 35.8225 26.2785 35.8225 26.1665C35.8225 25.7114 35.6456 25.2834 35.3242 24.9612L34.0243 23.6612L34.1594 23.4897C36.1189 21.0003 36.8198 17.0283 33.7283 14.1905C30.6131 11.327 26.5896 12.4559 24.1691 14.7168L24.0011 14.8737L23.8331 14.7168C21.4136 12.4563 17.3905 11.3274 14.2736 14.1905C11.1842 17.0323 11.8847 21.003 13.8429 23.4901L13.978 23.6617L12.8047 24.8368C12.4536 25.1874 12.2518 25.6737 12.2518 26.1701C12.2518 26.6732 12.4482 27.147 12.8042 27.503C13.1549 27.8532 13.6398 28.0541 14.1349 28.0541H14.1371C14.2442 28.0532 14.3545 28.0425 14.4625 28.0225L14.8145 27.9572L14.7491 28.3092C14.7291 28.4172 14.7185 28.5274 14.7171 28.6363C14.7158 29.1305 14.9162 29.6163 15.2674 29.9674C15.618 30.3181 16.0989 30.5199 16.6002 30.5177C16.7078 30.5163 16.8176 30.5057 16.9242 30.4861L17.274 30.4217L17.2109 30.7714C17.1122 31.3212 17.2611 31.8817 17.6202 32.3097C17.8856 32.6261 18.2425 32.8425 18.6362 32.9332L17.9336 32.227C17.6971 31.9892 17.5442 31.6905 17.4896 31.367L17.2611 30.9097L17.4674 31.1052V31.0977C17.4674 30.6714 17.6331 30.2705 17.934 29.9683L23.5634 24.3381C23.594 24.3083 23.61 24.271 23.6105 24.2323C23.6105 24.1945 23.5954 24.1568 23.5682 24.1297C23.5416 24.103 23.5042 24.0879 23.4665 24.0879H23.4651C23.4269 24.0879 23.3896 24.1043 23.3629 24.1319L17.7309 29.7639C17.4207 30.0572 17.0211 30.2163 16.6016 30.2163C16.182 30.2163 15.7825 30.0572 15.4771 29.7688C15.1718 29.4608 15.0065 29.0599 15.0065 28.6341C15.0065 28.2083 15.1714 27.8079 15.4709 27.5052L21.0256 21.9514C21.0531 21.9239 21.0682 21.8874 21.0682 21.8488C21.0682 21.8101 21.0531 21.7737 21.026 21.7465C20.9696 21.6901 20.8776 21.6901 20.8211 21.7465L15.2682 27.2999C14.9585 27.5937 14.5589 27.7528 14.1389 27.7528C13.7189 27.7528 13.3189 27.5937 13.014 27.3048C12.7087 26.9972 12.5434 26.5963 12.5434 26.1705C12.5434 25.7448 12.7087 25.3434 13.0082 25.0417L18.75 19.2977L18.8336 19.287C19.2727 19.2305 19.7074 19.1297 20.1265 18.9861L20.2718 18.9363L23.8994 22.5639C24.5931 23.2399 25.6082 23.5021 26.5456 23.2465C27.4834 22.991 28.2247 22.2497 28.4802 21.3119C28.7358 20.3741 28.4736 19.3594 27.7954 18.663L24.2065 15.0741L24.3936 14.9003C25.9114 13.4905 27.626 12.7457 29.3531 12.7457C29.3625 12.7457 29.3718 12.7457 29.3811 12.7457C30.9038 12.7528 32.378 13.3408 33.5327 14.4017C35.5758 16.2799 36.5887 19.8443 33.9856 23.2323L33.8149 23.4545L32.6025 22.2421C32.2807 21.9203 31.8527 21.743 31.3976 21.743C30.9425 21.743 30.5145 21.9203 30.1927 22.2421L29.9358 22.499C29.5576 22.879 29.3802 23.4225 29.462 23.9532L29.514 24.2901L29.1776 24.2332C29.094 24.219 29.01 24.211 28.9274 24.2088H28.9211C28.4798 24.2088 28.0434 24.3897 27.7283 24.7057L27.4709 24.963C27.094 25.3417 26.9162 25.8839 26.9958 26.4123L27.0451 26.7421L26.7154 26.6923C26.1856 26.6123 25.642 26.7905 25.2625 27.1692L25.0056 27.4261C24.6283 27.8057 24.4509 28.3488 24.5318 28.8785L24.5825 29.2097L24.2514 29.159C23.722 29.0777 23.1789 29.255 22.7994 29.6332L22.498 29.9345L22.4918 29.9283L20.1931 32.227C19.8838 32.5203 19.4842 32.6794 19.0638 32.6794H19.0625C18.9296 32.6794 18.7989 32.6634 18.6727 32.6323L18.8398 32.967C18.9136 32.9754 18.9874 32.979 19.0629 32.9794C19.1696 32.9781 19.2794 32.9674 19.3874 32.9479L19.7362 32.8839L19.6745 33.2332C19.5807 33.7621 19.7176 34.3074 20.0505 34.7292C20.3834 35.151 20.882 35.411 21.4185 35.4425C21.9562 35.4745 22.4807 35.2745 22.8607 34.8945L24.0007 33.7554L24.002 33.7572ZM24.0069 29.9145C23.7638 29.9145 23.5256 30.0132 23.3536 30.1852L23.0962 30.4425C22.9225 30.6168 22.8265 30.8488 22.8265 31.0959C22.8265 31.343 22.9225 31.5745 23.0967 31.7497L25.8171 34.4701C25.9914 34.6448 26.2234 34.7408 26.4705 34.7408C26.7176 34.7408 26.93 34.6523 27.1016 34.4914L27.3802 34.2132C27.5549 34.0385 27.6514 33.8065 27.6514 33.5594C27.6514 33.3123 27.5549 33.0803 27.3802 32.9057L24.6602 30.1857C24.4856 30.011 24.2536 29.915 24.0069 29.915V29.9145ZM26.47 27.451C26.2269 27.451 25.9887 27.5497 25.8167 27.7217L25.5598 27.979C25.3874 28.151 25.2891 28.3892 25.2891 28.6323C25.2891 28.8754 25.3878 29.1137 25.5598 29.2857L28.2802 32.0061C28.4549 32.1808 28.6869 32.2768 28.9336 32.2768C29.1803 32.2768 29.402 32.1834 29.5727 32.0199L29.8438 31.7488C30.0185 31.5741 30.1145 31.3421 30.1145 31.0954C30.1145 30.8488 30.0185 30.6168 29.8442 30.4421L27.1238 27.7212C26.9491 27.5465 26.7171 27.4505 26.4705 27.4505L26.47 27.451ZM18.2807 31.8777C18.4936 32.0785 18.7718 32.1892 19.0642 32.1892H19.0651C19.3589 32.1892 19.638 32.0781 19.8514 31.8763L22.4914 29.2359L22.4985 29.243C22.9118 28.8554 23.4642 28.6412 24.0225 28.6497C24.0167 28.0679 24.2443 27.4981 24.6589 27.0803L24.9162 26.823C25.3287 26.4114 25.8909 26.1834 26.466 26.1834H26.486C26.4811 25.6025 26.7091 25.0341 27.1234 24.6177L27.3807 24.3603C27.7891 23.9505 28.358 23.719 28.9349 23.719C28.9402 23.719 28.9456 23.719 28.9509 23.7194C28.9456 23.1385 29.1731 22.5701 29.5878 22.1532L29.8451 21.8959C30.2598 21.4812 30.8114 21.2528 31.398 21.2528C31.9847 21.2528 32.5362 21.4812 32.9509 21.8959L33.7625 22.7074C35.3247 20.4972 35.7958 17.1519 33.1998 14.7657C30.5203 12.3043 27.1531 13.1399 24.918 15.0914L28.1456 18.319C28.9469 19.1417 29.2562 20.3377 28.9549 21.443C28.6536 22.5479 27.7798 23.4217 26.6749 23.723C25.57 24.0248 24.374 23.715 23.5531 22.9159L20.1389 19.5017C19.7611 19.6217 19.3722 19.7101 18.9798 19.7652L13.3567 25.3901C13.1496 25.5985 13.0349 25.8763 13.0349 26.1719C13.0349 26.4674 13.1491 26.7448 13.3571 26.9541C13.5651 27.151 13.8442 27.2621 14.138 27.2621C14.4318 27.2621 14.7109 27.151 14.9242 26.9488L20.4727 21.3999C20.7211 21.1514 21.1256 21.1514 21.3736 21.3999C21.4936 21.5199 21.5602 21.6799 21.5598 21.8501C21.5598 22.0203 21.4936 22.1803 21.3731 22.3003L15.8198 27.8537C15.6131 28.0625 15.4985 28.3403 15.4985 28.6354C15.4985 28.9305 15.6127 29.2083 15.8207 29.4177C16.0287 29.6137 16.3078 29.7252 16.6016 29.7252C16.8954 29.7252 17.1745 29.6141 17.3882 29.4123L23.0122 23.7883C23.1274 23.6692 23.2918 23.5985 23.4611 23.5972C23.634 23.5972 23.7971 23.6639 23.9167 23.7834C24.0367 23.9034 24.1042 24.0692 24.1029 24.2385C24.1011 24.4088 24.0305 24.5732 23.9087 24.691L18.2829 30.3177C18.0749 30.5265 17.9602 30.8043 17.9602 31.0994C17.9602 31.3945 18.074 31.6697 18.2807 31.8785V31.8777ZM31.3976 22.5239C31.1509 22.5239 30.9189 22.6199 30.7442 22.7945L30.4874 23.0514C30.3127 23.2261 30.2167 23.4581 30.2167 23.7052C30.2167 23.9523 30.3127 24.1839 30.4874 24.3585L33.2078 27.0794C33.382 27.2537 33.614 27.3497 33.8611 27.3497C34.1082 27.3497 34.3403 27.2537 34.5145 27.0794L34.7714 26.8225C34.9456 26.6474 35.0416 26.4154 35.0416 26.1688C35.0416 25.9221 34.9456 25.6897 34.7718 25.515L32.0518 22.795C31.8771 22.6208 31.6451 22.5243 31.398 22.5243L31.3976 22.5239ZM21.5505 35.1341C21.4087 35.1341 21.2665 35.1154 21.1269 35.0768C20.5896 34.9279 20.1629 34.5017 20.014 33.9639C19.8651 33.4265 20.0109 32.8417 20.3949 32.4368L22.0065 30.8243L22.0691 31.323C22.1154 31.691 22.2847 32.0385 22.5456 32.3017L23.7989 33.555L22.6536 34.6954C22.354 34.9799 21.9554 35.1337 21.55 35.1337L21.5505 35.1341ZM21.6891 31.8385L20.7478 32.7803C20.4865 33.0554 20.3856 33.4608 20.4887 33.8323C20.5918 34.2043 20.8869 34.4994 21.2585 34.6021C21.6296 34.7052 22.0336 34.6048 22.3131 34.3403L23.1029 33.5541L22.198 32.6488C21.9705 32.4194 21.7967 32.1408 21.6896 31.8381L21.6891 31.8385ZM31.3967 30.3052C31.0185 30.3052 30.6629 30.1581 30.3954 29.8905L27.6745 27.1719C27.4069 26.9043 27.2598 26.5488 27.2598 26.1705C27.2598 25.7923 27.4069 25.4368 27.674 25.1697L27.9314 24.9123C28.1998 24.6457 28.5554 24.4994 28.9327 24.4994C29.31 24.4994 29.6651 24.6461 29.9331 24.9119L32.654 27.6328C32.9211 27.9003 33.0682 28.2554 33.0682 28.6332C33.0682 28.8368 33.0256 29.0337 32.9447 29.2137H33.0745L32.398 29.8905C32.1305 30.1581 31.7749 30.3052 31.3967 30.3052ZM28.9327 24.991C28.686 24.991 28.4536 25.0865 28.2789 25.2603L28.0225 25.5168C27.8509 25.6888 27.7522 25.9265 27.7522 26.1701C27.7522 26.4137 27.8509 26.6514 28.0229 26.8234L30.7438 29.5421C30.9185 29.7168 31.1505 29.8128 31.3971 29.8128C31.6438 29.8128 31.8709 29.7185 32.0447 29.5479L32.3069 29.2852C32.4811 29.1105 32.5771 28.879 32.5771 28.6323C32.5771 28.3857 32.4811 28.1541 32.3069 27.9799L29.5869 25.2599C29.4122 25.087 29.1803 24.991 28.9336 24.991H28.9327ZM14.1882 23.4563L14.0176 23.2341C12.826 21.6839 12.298 19.9688 12.4905 18.2737C12.6585 16.7968 13.3611 15.4225 14.4691 14.4039C16.7091 12.3448 20.4838 11.783 23.8771 15.1603L23.9202 15.1959L27.5954 18.871L27.5722 18.8941L27.5971 18.8728C28.2065 19.4959 28.4429 20.4057 28.214 21.247C27.9851 22.0883 27.3202 22.7528 26.4794 22.9812C25.6385 23.2101 24.7287 22.9737 24.1056 22.3643L20.4087 18.6674C20.3789 18.6385 20.3354 18.6221 20.29 18.6261C20.2802 18.627 20.2669 18.6301 20.254 18.635C18.8869 19.1657 17.3674 19.2034 15.9758 18.7417C15.9389 18.7292 15.8994 18.7319 15.8651 18.7492C15.8305 18.7665 15.8051 18.7959 15.7927 18.8328C15.7802 18.8697 15.7834 18.9088 15.8002 18.943C15.8171 18.9772 15.8474 19.003 15.8838 19.0154C16.4758 19.2105 17.0931 19.3208 17.7176 19.3417L18.2838 19.3608L14.1878 23.4559L14.1882 23.4563ZM18.5478 13.2345C17.2718 13.2345 15.9771 13.6857 14.802 14.7661C12.2056 17.1523 12.6776 20.4977 14.2407 22.7079L17.1549 19.7937C16.6705 19.7394 16.1927 19.6354 15.7287 19.4825C15.5665 19.4283 15.4358 19.315 15.3598 19.163C15.2838 19.011 15.2714 18.8381 15.3256 18.6768C15.3794 18.5154 15.4922 18.3848 15.6447 18.3088C15.7967 18.2328 15.9696 18.2208 16.1309 18.2741C17.414 18.6999 18.8149 18.6648 20.0754 18.1759C20.1305 18.1541 20.1887 18.1408 20.2478 18.135C20.4376 18.119 20.6202 18.1865 20.754 18.3163L24.4514 22.0137C24.9487 22.4999 25.6767 22.6892 26.35 22.5057C27.0234 22.3225 27.5554 21.7905 27.7389 21.1172C27.9216 20.4448 27.7336 19.7177 27.2474 19.2185L23.5927 15.5643C23.5802 15.5559 23.5656 15.5448 23.5514 15.5305C22.2011 14.1794 20.394 13.2345 18.5478 13.2345Z"
                            fill="#070707"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1525_21972">
                            <rect width="48" height="48" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <br id="hide_mobile" />
              <br />
              <div className="container">
                <div id="impact_iyt" className="row">
                  <div className="col-lg-10 col-md-10 col-8">
                    <h1>BE An agent of change</h1>
                    <p>
                      Volunteer to mentor community members in different areas
                      of discipline
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-2 col-6">
                    <button className="impact_btn">Join the team</button>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </section>

        <section className="heroproject">
          <hr style={WStyle} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="container">
            <center>
              <div>
                <h2>
                  Empowering youths to Reach <br /> Their Potential
                </h2>
              </div>
              <br />
              <br />
              <p>We train and mentor you to your full potential</p>
              <br />
              <br />
              <button onClick={fire}>Apply now</button>
              {toggleModal && (
                <MainApplyNow OffFire={OffFire} clickPosition={clickPosition} />
              )}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </center>
          </div>
        </section>

        <section className="footer">
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-4">
                <h2>Email address</h2>
                <p>Projectx@gmail.com</p>
              </div>
              <div className="col-lg-4 col-4">
                <center>
                  <svg
                    className=""
                    id="svg_foot"
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="40"
                    viewBox="0 0 42 40"
                    fill="none"
                  >
                    <path
                      d="M40.5953 24.0296H28.2599C26.9757 24.0296 25.9345 22.9883 25.9345 21.7042V18.3652C25.9345 17.081 26.9757 16.0398 28.2599 16.0398H40.3891C40.8709 16.0398 41.2613 15.6494 41.2613 15.1676V0.941533C41.2613 0.459774 40.8709 0.0693642 40.3891 0.0693642H26.163C25.6813 0.0693642 25.2908 0.459774 25.2908 0.941533V12.636C25.2908 13.9774 24.2034 15.0649 22.862 15.0649H18.8441C17.56 15.0649 16.5187 14.0237 16.5187 12.7395V0.872169C16.5187 0.39041 16.1283 0 15.6466 0H1.40342C0.92166 0 0.53125 0.39041 0.53125 0.872169V15.1157C0.53125 15.5975 0.92166 15.9879 1.40342 15.9879H13.7389C15.0231 15.9879 16.0643 17.0291 16.0643 18.3133V21.6522C16.0643 22.9364 15.0231 23.9776 13.7389 23.9776H1.60924C1.12748 23.9776 0.737068 24.368 0.737068 24.8498V39.0933C0.737068 39.5751 1.12748 39.9655 1.60924 39.9655H15.8528C16.3345 39.9655 16.7249 39.5751 16.7249 39.0933V27.2605C16.7249 25.9763 17.7662 24.9351 19.0503 24.9351H23.1716C24.4558 24.9351 25.497 25.9763 25.497 27.2605V39.1278C25.497 39.6096 25.8875 40 26.3692 40H40.5953C41.0771 40 41.4675 39.6096 41.4675 39.1278V24.9017C41.4675 24.42 41.0771 24.0296 40.5953 24.0296Z"
                      fill="#F1F5F5"
                    />
                  </svg>
                </center>
              </div>
              <div className="col-lg-4 col-4">
                <h1>
                  ©Projectx.com 2023 LLC <br />
                  <br /> All rights reserved
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
