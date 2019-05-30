import React, { Component } from 'react';

class PortlateComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {


        return (
            <div>
                <div className={"col-md-6"}>

                            <div className="">
                                <div className="portlet-loader">Loading...</div>
                            </div>
                            <div className="portletTitle">
                                <h2><i className={this.props.titleicon}></i>{this.props.portlatetitle}</h2>
                            </div>
                            <div>
                                {this.props.portlateContant}
                            </div>

                </div>
            </div>
        );
    }
}

export default PortlateComponent;