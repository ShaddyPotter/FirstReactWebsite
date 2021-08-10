import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {

    return(
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center d-flex flex-column">
                                <h1>
                                    {props.title} <strong className="brand_name"> Shadab Khan </strong>
                                </h1>
                                <h2 className="my-3"> {props.name} </h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn_get_started"> {props.btn}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-2 header_img">
                                <img src={props.imgsrc} className="img-fluid animated" alt="Common" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;