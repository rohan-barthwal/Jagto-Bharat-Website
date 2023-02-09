import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export default function Form() {
    return (
        <div className="form">
            <div className="container">
                <div className="row shadow bg-light">
                    <div className="col-12-lg mt-5">
                        <section className="mb-4">
                            <h2 className="h1-responsive font-weight-bold text-center my-4 tech_stack">Contact Me</h2>
                            <p className="text-center w-responsive mx-auto mb-5 card-text1">Do you have any questions? Please do not hesitate to contact me directly.I will come back to you within
                                a matter of hours to help you.</p>
                            <div className="row">
                                <div className="col-md-9 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label for="name" className="mt-2  card-text">Your name</label>
                                                    <input type="text" id="name" name="name" className="form-control mt-2  card-text" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <label for="email" className="mt-2  card-text">Your email</label>
                                                    <input type="text" id="email" name="email" className="form-control mt-2  card-text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form mb-0">
                                                    <label for="subject" className="mt-2  card-text">Subject</label>
                                                    <input type="text" id="subject" name="subject" className="form-control mt-2  card-text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form card-text">
                                                    <label for="message mt-2 card-text">Your message</label>
                                                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea mt-2"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="text-center text-md-left mt-3">
                                        <a className="btn btn-primary card-text" onclick="document.getElementById('contact-form').submit();">Send</a>
                                    </div>
                                    <div className="status"></div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <ul className="list-unstyled mb-0  card-text">
                                        <li><i className="fas fa-map-marker-alt fa-2x">
                                        <AiFillHome /> 
                                        </i>
                                            <p className="mt-1">Noida, Sec-76, India</p>
                                        </li>

                                        <li><i className="fas fa-phone mt-4 fa-2x mt-5">
                                        <MdOutlineConnectWithoutContact />
                                        </i>
                                            <p>+91 8958172055</p>
                                        </li>

                                        <li><i className="fas fa-envelope mt-4 fa-2x mt-5">
                                          < SiAboutdotme />
                                        </i>
                                            <p>rohan.vd90@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    )

}