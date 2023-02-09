import React from "react";
import Image1 from '../components/Images/ReactImage1.png'
import Image2 from '../components/Images/ReactImage2.png'
import Image3 from '../components/Images/ReactImage3.png'



export default function Slider() {
    return (
        <div className="Slider">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="header_slide card-text1">Hello, my name is <span style={{ color: "red" }}>Rohan Barthwal</span></h1>
                            <h5>
                                And I am looking for a profile in Web development as a  <span style={{ color: "red" }}>Frontend Developer.</span>
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="header_slide card-text1">Hello, my name is <span style={{ color: "red" }}>Rohan Barthwal</span></h1>
                            <h5>
                                And I am looking for a profile in <span style={{ color: "red" }}> Web development</span> as a  <span style={{ color: "red" }}>Frontend Develoer.</span>
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="header_slide card-text1">Hello, my name is <span style={{ color: "red" }}>Rohan Barthwal</span></h1>
                            <h5>
                                And I am looking for a profile in Web development as a  <span style={{ color: "red" }}>Frontend Develoer.</span>
                            </h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}