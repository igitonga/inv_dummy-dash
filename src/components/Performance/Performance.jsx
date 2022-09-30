import React from 'react';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import './performance.scss'

const Performance = () => {
  
  const data = [
    {
      "name": "Jan",
      "kes": 0
    },
    {
      "name": "Feb",
      "kes": 0,
    },
    {
      "name": "March",
      "kes": 0,
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
  
  ]
  
  return (
    <div className="performance-container">
      <p>Product performance</p>
      <div style={{height: "230px", width: "auto"}}>
        <ResponsiveContainer className={"bar"}>
          <BarChart data={data}>
            <XAxis dataKey="name" tickLine={false} />
            <Tooltip />
            <Bar dataKey="kes" fill="#ffab00" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Performance;