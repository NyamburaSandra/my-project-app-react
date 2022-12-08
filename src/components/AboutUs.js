import React from "react";

function AboutUs() {
    return (

        <div>
            <div clasName="container" style={{ marginTop: "100px" }} class = "has-bg-img bg-purple bg-blend-multiply">
                
                <div className="row justify-content-md-center">
                    <div className="col-xs-6">
                        <h1 className="text-center">About Us</h1>
                        
                        <p className="text-center fs-5" class = "z-index-1 postion-relative">
                            We are a team of 5 students from Moringa School.
                            We are very passionate about the tech industry and we setup this website to help other likeminded people to connect and share ideas.
                            We are very excited to see what the future holds for us and we hope you will join us on this journey.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
