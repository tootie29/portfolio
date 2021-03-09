import React from 'react'

export default function services() {
    return (
        <>
            <section className="section my-services" id="services">
                <div className="container">
                    <div className="section-heading">
                        <h2>What I’m good at?</h2>
                        <div className="line-dec" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="service-item">
                                <div className="first-service-icon service-icon">
                                    <i className="fa fa-code"></i>
                                </div>
                                <h4>HTML Template Conversion</h4>
                                <p>
                                Convert Adobe XD, Photoshop, Illustrator files into HTML templates.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <div className="second-service-icon service-icon">
                                    <i className="fa fa-lightbulb-o"></i>
                                </div>
                                <h4>Creative Ideas</h4>
                                <p>
                                Provide and collaborate with other teams and client's ideas.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <div className="third-service-icon service-icon">
                                    <i className="fa fa-pencil"></i>
                                </div>
                                <h4>Template Customization</h4>
                                <p>
                                Overriding default templates and design of a theme or create a custom theme and simple plugin.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-item">
                                <div className="fourth-service-icon service-icon">
                                    <i className="fa fa-cogs"></i>
                                </div>
                                <h4>Site Maintenance</h4>
                                <p>
                                Keep everything up-to-date, WHM, hosting and domain management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}