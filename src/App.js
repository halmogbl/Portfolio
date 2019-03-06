import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Example from "./Example";

class App extends Component {
  render() {
    return (
      <div className="">
        <Example>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Welcome</h1>
              </div>
            </div>
          </div>
        </Example>
        <header className="">
          <section id="banner">
            <div className="inner">
              <Example>
                <header>
                  <h1>Hamad Almogbl</h1>
                  <p>
                    Hard working Computer Engineer graduated from Texas Southern
                    University <br /> I love Programming, I love Python, I love
                    Tuwaiq Bootcamp.
                  </p>
                </header>
              </Example>
            </div>
          </section>
          <div id="main">
            {/* <!-- Section --> */}
            <section className="wrapper style1">
              <div className="inner">
                {/* <!-- 2 Columns --> */}
                <div className="flex flex-2">
                  <div className="col col1">
                    <div className="image round fit">
                      <a href="generic.html" className="link">
                        <img src={require("./images/pic01.jpg")} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col col2">
                    <h2>A bit about me...</h2>
                    <p>
                      {" "}
                      I was born in 1992 from small city called Jubail in Saudi
                      Arabia <br />
                      I always say Ever tried. Ever faild. No matter. Try again.
                      Fail again. Fail beeter <br />
                      <h9>Samuel Beckett</h9>{" "}
                    </p>

                    <h2>Education:</h2>

                    <h4>Tuwaiq Full-Stack Bootcamp Riyadh, Saudi Arabia</h4>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <p>14 weeks of full-stack training</p>
                        </div>
                        <div className="col">
                          <p>Feb - May 2019</p>
                        </div>
                      </div>
                    </div>

                    <h4>Texas Southern University Houston, TX</h4>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <p>
                            Bachelor of Science, Computer Engineering Technology
                          </p>
                        </div>
                        <div className="col">
                          <p>May 2018</p>
                        </div>
                      </div>
                    </div>
                    <p>Cumulative GPA 3.58 of 4</p>

                    <h4>Houston Community College Houston, TX </h4>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <p>Associate Degree, Science</p>
                        </div>
                        <div className="col">
                          <p>August 2016</p>
                        </div>
                      </div>
                    </div>
                    <p>Cumulative GPA 3.12 of 4</p>

                    {/* <!--<a href="#" className="button">Learn More</a>--> */}
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Section --> */}
            <section className="wrapper style2">
              <div className="inner">
                <div className="flex flex-2">
                  <div className="container">
                    <h2>Certifications</h2>
                    <div className="row">
                      <div className="col">
                        <p>
                          OSHA 132 hour Occupational Safety and Health
                          Professional
                        </p>
                      </div>
                      <div className="col">
                        <p>Jan 2019</p>
                      </div>
                      <div className="col">
                        <p>
                          {" "}
                          40 hour The Fundamentals of Digital Marketing
                          certificate Dec 2018
                        </p>
                      </div>
                      <div className="col">
                        <p>Dec 2018</p>
                      </div>
                    </div>
                  </div>
                  <div className="col col2">
                    <h2>Skills & Interests </h2>

                    <h4>Languages: </h4>
                    <p> * Native Arabic & Fluent in English.</p>
                    <h4>Computer:</h4>
                    <p>
                      {" "}
                      * Programing using Python, C++, Java, HTML, and CSS3.
                      <br /> * Microsoft Office: World, Excel, and PowerPoint.
                      <br />* Photoshop Designing. <br />* AutoCAD Designing.{" "}
                    </p>
                    <h4> Interests:</h4>
                    <p>
                      * Artifical Intelligence <br /> * Chess <br />* Travel
                    </p>
                  </div>
                  <div className="col col1 first">
                    <div className="image round fit">
                      <a href="generic.html" className="link">
                        <img src={require("./images/pic02.jpg")} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Section --> */}
            <section className="wrapper style1">
              <div className="inner">
                <header className="align-center">
                  <h2>Contact Me</h2>
                  <p>
                    I more than happy to read your feedback or to answer your
                    questions anytime{" "}
                  </p>
                </header>
                <div className="flex flex-3">
                  <div className="col align-center">
                    <div className="image round fit">
                      <img src={require("./images/pic03.jpg")} alt="" />
                    </div>
                    <p>Email: </p>
                    <a href="#" className="button">
                      hamad.almogbl@gmail.com
                    </a>
                  </div>
                  <div className="col align-center">
                    <div className="image round fit">
                      <img src={require("./images/pic05.jpg")} alt="" />
                    </div>
                    <p>Phone Number: </p>
                    <a href="#" className="button">
                      +966555906399
                    </a>
                  </div>
                  <div className="col align-center">
                    <div className="image round fit">
                      <img src={require("./images/pic04.jpg")} alt="" />
                    </div>
                    <p>linkedin: </p>
                    <a
                      href="https://www.linkedin.com/in/hamad-almogbl-370332ba"
                      className="button"
                    >
                      Hamad Almogbl
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
