import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import "./inventory.scss"
import {HiMenuAlt1} from 'react-icons/hi'
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Inventory extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <div className="inventory-cont">
        <div className="top_part">
            <h3>Quick Inventory</h3>
            <HiMenuAlt1 />
        </div>
        <PieChart width={800} height={200} onMouseEnter={this.onPieEnter}  margin={{
            top: -120,
            left: 50,
        }}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
    );
  }
}
