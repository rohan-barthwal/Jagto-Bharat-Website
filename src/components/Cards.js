import React from "react";
import { Link } from "react-router-dom";
import Img1 from '../components/Images/html3.png';
import Img2 from '../components/Images/Css1.png';
import Img3 from '../components/Images/js.png';
import Img4 from '../components/Images/Bootstrap.png'
import Img5 from '../components/Images/React.png'
import Img6 from '../components/Images/firebase.jpg'


export default function Cards() {
    return (
        <div className="section">
            <div className="container">
                <div className="row shadow bg-light">
                    <div className="col-lg-12 text-center mt-5">
                        <h2 className="tech_stack">My Tech Stack</h2>
                    </div>
                    <div className="col-lg-4 mt-3 p-5">
                        <div className="cards">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Img1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Hypertext Markup Language revision 5 (HTML5) is markup language for the structure and presentation of World Wide Web contents. HTML5 supports the traditional HTML and XHTML-style syntax and other new features in its markup, New APIs, XHTML and error handling.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 p-5">
                        <div className="cards">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Img2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Cascading Style Sheets (CSS) is a language that is used to illustrate the look, style, and format of a document written in any markup language. In simple words, it is used to style and organize the layout of Web pages. CSS3 is the latest version of an earlier CSS version, CSS2..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 p-5">
                        <div className="cards">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Img4} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Bootstrap 5 (released 2021) is the newest version of Bootstrap (released 2013); with new components, faster stylesheet and more responsiveness. Bootstrap 5 supports the latest, stable releases of all major browsers and platforms. However, Internet Explorer 11 and down is not supported.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 p-5">
                        <div className="cards">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Img3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. While JavaScript is influenced by Java, the syntax is more similar to C and is based on ECMAScript, a scripting language by Sun Microsystems</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 p-5">
                        <div className="cards">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Img5} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 p-5">
                        <div className="cards">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Img6} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Firebase is a set of hosting services for any type of application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...). It offers NoSQL and real-time hosting of databases, content, social authentication (Google, Facebook, Twitter and Github), and notifications, or services, such as a real-time communication server.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <div className="col-lg-12 mt-2 text-center">
                            <Link to="/about" className="btn btn-warning card-text">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 