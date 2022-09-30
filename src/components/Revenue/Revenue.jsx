import React from "react";
import { LineChart, Line } from 'recharts';
import "./revenue.scss"

const data = [
            {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 200, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 600, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 800, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 300, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 100, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 400, pv: 2400, amt: 2400},
        ];

const Revenue = () => {
    return(
        <div className="revenue-cont">
            <div className="line-chart">
                <LineChart width={350} height={70} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#ffffff" />
                </LineChart>
            </div>
            <div className="revenue-text">
                <p className="amount">+ KES 90,000</p>
                <p className="text">Revenue this month</p>
            </div>
        </div>
    )
}

export default Revenue