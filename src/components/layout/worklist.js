import React, { Component } from 'react'

export default class worklist extends Component {
    render() {
        const { name, description, image, url } = this.props.work
        return (
            <div className="col-md-12 work-item">
                <div className="work-item-inner">
                    <div className="work-item-header">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p><a href={url} className="btn btn-outline-danger btn-lg">View project</a></p>
                    </div>
                    <div className="work-item-body">
                        <div className="work-item-body-inner">
                            <div className="work-img-section">
                                <div className="work-img">
                                    <div className="work-img-wrapper" style={{ backgroundImage:`url(${image})` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}