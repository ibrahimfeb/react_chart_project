import "./App.css";
import { XAxis, YAxis, LineChart, Line,CartesianGrid } from "recharts";

const pdata = [
  {
    name: "Python",
    student: 13,
    fees: 10,
  },
  {
    name: "JavaScript",
    student: 19,
    fees: 9,
  },
  {
    name: "PHP",
    student: 25,
    fees: 12,
  },
  {
    name: "Java",
    student: 40,
    fees: 20,
  },
  {
    name: "C#",
    student: 10,
    fees: 7,
  },
  {
    name: "C++",
    student: 50,
    fees: 30,
  },
  {
    name: "Assembly",
    student: 4,
    fees: 5,
  },
];

function App() {
  return (
    <>
      <h1 className="chart-heading">Line Chart</h1>
     
      <LineChart width={500} height={300} data={pdata}>
        <XAxis dataKey="name" />
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="fees" stroke="#8884d8" />
        <Line type="monotone" dataKey="fees" stroke="#82ca9d" />
      </LineChart>
    </>
  );
}

export default App;
