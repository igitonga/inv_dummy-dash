import React from "react";
import "./welcomedash.scss"
import Woman from "../../assets/welcome.svg"

const WelcomeDashCard = () => {
    return(
        <div className="welcome-card">
            <div>
                <h3><b>Welcome back Ian!</b></h3>
                <p>Since your last login on the system, there were:</p>
                <ul>
                    <li><span>21 new sales</span></li>
                    <li><span>15 new restocked items</span></li>
                    <li><span>45 new pending credit sales reminders</span></li>
                </ul>
            </div>
            <img src={Woman} alt="" />
        </div>
    )
}

export default WelcomeDashCard