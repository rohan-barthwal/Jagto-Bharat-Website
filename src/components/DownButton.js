import React from "react";
import Resume from '../components/Images/Rohan Resume new 3.pdf'

export default function DownButton() {
    return (
        <div className="downbutton">
            <div className="button">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 mt-5 text-center">
                            <a href={Resume} download="Resume">
                                <button type="button" class="btn btn-success shadow card-text">Download Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}