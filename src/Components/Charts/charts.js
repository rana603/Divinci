import "./charts.css";
import {LineChart,Line,XAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <h1>$278864K total Revanue <span style={{fontSize:"15px"}}>this week</span> </h1>
      <h6>27.8% vs previus week</h6>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
            {/* <YAxis  dataKey="name"/> */}
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
