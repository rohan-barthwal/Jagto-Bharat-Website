import React from "react";
import Imag1 from '../src/components/Images/stfra.jpg'
import Imag2 from '../src/components/Images/city.jpg'
import Imag3 from '../src/components/Images/meerut.jpg'
import Img1 from '../src/components/Images/html3.png';
import Img2 from '../src/components/Images/Css1.png';
import Img3 from '../src/components/Images/js.png';
import Img4 from '../src/components/Images/Bootstrap.png'
import Img5 from '../src/components/Images/React.png'
import Img6 from '../src/components/Images/git.png'

export default function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h3 className="header_main text-center mt-5" style={{ textDecoration: "underline dotted blue" }}>Introduction</h3>
                    </div>
                    <div className="banner text mt-3">
                        <p className="text_main card-text text-justify mt-3" style={{ color: "white" }}>Hello, my name is Rohan Barthwal and I am writing to introduce myself. I am a native of the Meerut,UP and have been here for over 20 years now. I grew up in Meerut where I attended  my high school from St.Francis Convent School. After high school, I moved to City Vocational Public School,Meerut where I attended my class 11 and 12.I did my graduation in Bsc Computer Science from Department of Self Finance Courses, Meerut College,Meerut.My interests include technology,and music. I enjoy playing guitar and making projects using frontend technologies.
                            I’m a passion driven individual, who wants to do my part to make the world a better place. I have always loved to learn and explore. I am looking for a profile as a Frontend Developer where I can learn,perform and grow to the best of my abilities. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header education text-center mt-5">
                            <h3 className="head ">Education</h3>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="education_card bg-dark">
                            <div className="card" style={{ width: "10 rem" }}>
                                <img src={Imag1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">St. Francis Convent School Xth In 2014 - ( 74% ). Subjects- Science, Maths, Computer, English, Hindi and Social Studies. I was in the team of basketball and played several tournaments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="education_card bg-dark">
                            <div className="card" style={{ width: "10 rem" }}>
                                <img src={Imag2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">City Vocational Public School
                                        XIIth
                                        In 2016 - ( 71% ).
                                        Subjects- Physics, Chemistry, Maths, English, Physical Education and Home Science.
                                        I was in the team of volleyball and played CBSE cluster of volleball.I was also a part of various extracurricular activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5">
                        <div className="education_card bg-dark">
                            <div className="card" style={{ width: "10 rem" }}>
                                <img src={Imag3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Department of Self Finance Courses
                                        B.Sc. in Computer Science
                                        2016-2019 - ( 65% ).
                                        Subjects- Professional Communication, Discrete Maths, System Design and OS, Core and Advance Java and Industrial Projects.
                                        I was also a part of various extracurricular activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row shadow">
                        <div className="col-lg-12 text-center mt-5">
                            <h2 className="tech_stack">Core Competencies</h2>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="cards">
                                <div className="card 1" style={{ width: "18rem" }}>
                                    <img src={Img1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Hypertext Markup Language revision 5 (HTML5) is markup language for the structure and presentation of World Wide Web contents. HTML5 supports the traditional HTML and XHTML-style syntax and other new features in its markup, New APIs, XHTML and error handling.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="cards 2">
                                <div className="card " style={{ width: "18rem" }}>
                                    <img src={Img2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Cascading Style Sheets (CSS) is a language that is used to illustrate the look, style, and format of a document written in any markup language. In simple words, it is used to style and organize the layout of Web pages. CSS3 is the latest version of an earlier CSS version, CSS2..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="cards 3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={Img4} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Bootstrap 5 (released 2021) is the newest version of Bootstrap (released 2013); with new components, faster stylesheet and more responsiveness. Bootstrap 5 supports the latest, stable releases of all major browsers and platforms. However, Internet Explorer 11 and down is not supported.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="cards 4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={Img3} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. While JavaScript is influenced by Java, the syntax is more similar to C and is based on ECMAScript, a scripting language by Sun Microsystems</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="cards 5">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={Img5} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="cards 6">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={Img6} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently. Git is used to tracking changes in the source code, enabling multiple developers to work together on non-linear development. Linus Torvalds created Git in 2005.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <div className="work shadow">
                            <div className="work_head">
                                <h3 className="work_ex text-center tech_stack">Work Experience</h3>
                            </div>
                            <div className="work_text mt-3">
                                <span className="workspan card-text"> Ginger Webs Pvt. Ltd.
                                    Business Development Executive   /  Dec 2021 - Oct 2022
                                </span>
                            </div>
                            <ul className="list-group mt-3">
                                <li className="list-group-item card-text">Strategize ways to build market share, increase revenue and acquire success through innovative developments in organizational structure.</li>
                                <li className="list-group-item list-group-item-primary card-text">Facilitate monthly sales presentations to audiences and communications for upcoming joint venture opportunities and collaborative business efforts.</li>
                                <li className="list-group-item list-group-item-secondary card-text">Identify ways to build brand awareness through engaging campaigns that establish the company's reputation, incite curiosity and inform potential customers.</li>
                                <li className="list-group-item list-group-item-success card-text">Establish product loyalty through continual efforts to build, rebrand, modify and increase product offerings in a way that is honest, competitive and true to the company mission.</li>
                                <li className="list-group-item list-group-item-danger card-text">Analyze and gather feedback from attendees to determine areas of potential development alter each event or marketing campaign</li>
                                <li className="list-group-item list-group-item-warning card-text">Collaborated with marketing department on marketing concepts and delivery. </li>
                                <li className="list-group-item list-group-item-info card-text">Generating lead, demonstrating the product, negotiating with clients and converting prospects into sales.</li>
                                <li className="list-group-item list-group-item-light card-text">Providing technical support, when required</li>
                                <li className="list-group-item list-group-item-dark card-text">Making requirement sheets for raising GST invoice of the product</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <div className="projects" style={{ background: "lightblue" }}>
                            <div className="head">
                                <h3 className="projects_head text-center tech_stack" >Projects</h3>
                            </div>
                            <div className="text_projects mt-3 shadow" style={{ background: "lightblue" }}>
                                <div className="text_projects mt-3">
                                    <div className="button">
                                        <div className="col-lg-12 mt-3 text-center rounded">
                                            <a href="https://github.com/rohan-barthwal?tab=repositories" className="btn btn-danger card-text">Fully Responsive Portfolio Website Using Html,Css,Bootstrap and ReactJs </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt-5">
                                    <div className="vision shadow bg-warning">
                                        <div className="head">
                                            <h3 className="vision_head text-center tech_stack" >My Vision</h3>
                                        </div>
                                        <div className="text_vision mt-3">
                                            <span className="span card-text">Seeking a challenging position in an organization where I can use my talents and skills to grow and expand  an organization as well as myself. I am
                                                adaptive to changes and I accept challenges as opportunities.
                                                .</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}