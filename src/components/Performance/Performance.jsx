import React, {useState} from 'react';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import './performance.scss'

const Performance = () => {
  
  const data = [
    {
      "name": "Jan",
      "kes": 13000
    },
    {
      "name": "Feb",
      "kes": 120000,
    },
    {
      "name": "March",
      "kes": 20000,
    },
    {
      "name": "Apr",
      "kes": 278000,
    },
    {
      "name": "May",
      "kes": 300000,
    },
    {
      "name": "June",
      "kes": 239000,
    },
    {
      "name": "July",
      "kes": 19000,
    },
    {
      "name": "Aug",
      "kes": 39000,
    },
    {
      "name": "Sep",
      "kes": 7000,
    },
    {
      "name": "Oct",
      "kes": 119000,
    },
    {
      "name": "Nov",
      "kes": 239000,
    },
    {
      "name": "Dec",
      "kes": 239000,
    },
  
  ]

  const tabs = ['Best performing product', 'Average performing product', 'Worst performing product'];
  const [active, setActive] = useState(tabs[0]);
  
  return (
    <div className="performance-container">
      <h3>Product performance</h3>
      <div className="tabs">
        {
          tabs.map(tab => (
            <h5 key={tab} onClick={() => setActive(tab)}
                className={`${active === tab ? "tabs_active" : ''}`}>{tab}</h5>
          ))
        }
      </div>
      <div style={{height: "130px", width: "auto"}}>
        <ResponsiveContainer className={"bar"}>
          <BarChart data={data}>
            <XAxis dataKey="name" tickLine={false} />
            <Tooltip />
            <Bar dataKey="kes" fill="#2951FE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Performance;