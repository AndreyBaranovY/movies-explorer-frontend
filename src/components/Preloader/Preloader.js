import React from 'react'
import './Preloader.css'

const Preloader = ({isLoadind}) => {

    return (
        <div className= "preloader">
            <div className={isLoadind ? "preloader__container" : "preloader__container_invisible"}>
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader