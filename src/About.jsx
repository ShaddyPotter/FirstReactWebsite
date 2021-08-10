import React from 'react';
import Common from './Common';
import web from "../src/images/n10.jpg";

const About = () => {

    return(
        <>
            <Common 
                title= "Welcome to About us Page" 
                name= "This is our awesome website have a nice look and suggest if required"
                btn= "Contact Now"
                imgsrc= {web}
                visit="/contact"
            />
        </>
    )
}

export default About;