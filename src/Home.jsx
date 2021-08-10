import React from 'react';
import Common from './Common';
import web from "../src/images/n12.png";

const Home = () => {

    return(
        <>
            <Common
                title= "Grow your website with" 
                name= "We are the team of Shadab Khan Web development"
                btn= "Get Started"
                imgsrc= {web}
                visit="/service"
            />
        </>
    )
}

export default Home;