import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip,ResponsiveContainer } from 'recharts';
import "./spending.scss"

const data = [
  {
    name: 'Jan',
    uv: 10,
    pv: 10,
    amt: 10,
  },
  {
    name: 'Feb',
    uv: 20,
    pv: 20,
    amt: 20,
  },
  {
    name: 'Mar',
    uv: 20,
    pv: 40,
    amt: 30,
  },
  {
    name: 'Apr',
    uv: 15,
    pv: 30,
    amt: 20,
  },
  {
    name: 'May',
    uv: 18,
    pv: 48,
    amt: 30,
  },
  {
    name: 'June',
    uv: 23,
    pv: 38,
    amt: 25,
  },
];

export default class Spending extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
        <div className='spending-cont'>
            <div className='spending-text'>
                <p className='amt'>KES 9,645</p>
                <p className='txt'>Wallet balance</p>
            </div>
            <LineChart
                width={400}
                height={200}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#2951FE" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
  }
}
