import React from "react";
import { Link, Links } from "react-router-dom";
import { FaGooglePlus } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneSquare } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";



export default function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <footer className="text-center text-lg-start bg-dark text-muted mt-5">
                            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                                <div className="me-5 d-none d-lg-block">
                                    <span className="conect_span card-text1">Get connected with me on social networks:</span>
                                </div>
                                <div>
                                    <Link to="/" className="me-4 card-text">
                                        <i className="googleplus">
                                            <FaGooglePlus />
                                        </i>
                                    </Link>

                                    <Link to="https://www.linkedin.com/in/rohan-barthwal-82a230228/" className="me-4 card-text">
                                        <i className="linkedin">
                                            <FaLinkedin />
                                        </i>
                                    </Link>
                                    <Link to="https://github.com/rohan-barthwal?tab=repositories" className="me-4 card-text">
                                        <i className="github">
                                            <FaGithub />
                                        </i>
                                    </Link>
                                    <Link to="/" className="me-4 card-text">
                                        <i className="facebook">
                                            <FaFacebookSquare />
                                        </i>
                                    </Link>
                                    <Link to="/" className="me-4 card-text">
                                        <i className="instagram">
                                            <FaInstagram />
                                        </i>
                                    </Link>
                                </div>
                            </section>
                            <section className="section_footer">
                                <div className="container text-center text-md-start mt-5">

                                    <div className="row mt-3">

                                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                            <h6 className="text-uppercase fw-bold mb-4 card-text1">
                                                <i className="fas fa-gem me-3"></i>Rohan Barthwal
                                            </h6>
                                            <p className="card-text">
                                                Hello, my name is Rohan Barthwal and I am looking for a profile in Web Development, as a frontend developer.
                                            </p>
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                            <h6 className="text-uppercase fw-bold mb-4 card-text1">
                                                Useful links
                                            </h6>
                                            <p>
                                                <Link to="/" className="text-reset card-text">
                                                    <i className="home me-3">
                                                        <AiFillHome />
                                                    </i>
                                                    Home</Link>
                                            </p>
                                            <p>
                                                <Link to="/about" className="text-reset card-text">
                                                    <i className="home me-3">
                                                        <SiAboutdotme />
                                                    </i>
                                                    About Me</Link>

                                            </p>
                                            <p>
                                                <Link to="/contact" className="text-reset card-text">
                                                    <i className="home me-3">
                                                   < MdOutlineConnectWithoutContact />
                                                    </i>
                                                    Contact Me</Link>
                                            </p>
                                            <p>
                                                <Link to="/download" className="text-reset card-text">
                                                    <i className="home me-3">
                                                   < AiOutlineDownload />
                                                    </i>
                                                    Download Resume</Link>
                                            </p>
                                        </div>
                                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                            <h6 className="text-uppercase fw-bold mb-4 card-text1">Contact</h6>
                                            <p><i className="address me-2 card-text">
                                                <FaAddressCard />
                                            </i> Noida, Sec-76, India</p>
                                            <p>
                                                <i className="fas fa-envelope me-2 card-text">
                                                    <AiOutlineMail />
                                                </i>
                                                rohan.vd90@gmail.com
                                            </p>
                                            <p><i className="fas fa-phone me-2 card-text">
                                                <FaPhoneSquare />
                                            </i> +91 8958172055</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}