import React from "react";
import "./utilscard.scss"

const UtilsCard = (props) => {
    return(
        <div className="utilscard-cont" style={{ background: props.bg }}>
            <div className="utils-content">
                <img src={props.icon} alt="icons" />
                <p className="value">{props.value}</p>
                <p className="text">{props.text1}</p>
                <p className="text">{props.text2}</p>
            </div>
            <di className="icon-span">
                {props.bs}
            </di>
        </div>
    )
}

export default UtilsCard