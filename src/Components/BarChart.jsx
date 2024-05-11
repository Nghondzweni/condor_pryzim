import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  { name: '2019', uv: 100, pv: 2400, amt: 2400 },
  { name: '2020', uv: 500, pv: 2400, amt: 2400 },
  { name: '2021', uv: 600, pv: 2400, amt: 2400 },
  { name: '2022', uv: 400, pv: 2400, amt: 2400 },
  { name: '2023', uv: 400, pv: 2400, amt: 2400 },
  { name: '2024', uv: 700, pv: 2400, amt: 2400 },
];

export default function Chart() {
  return (
    <BarChart width={300} height={200} data={data} >
      <Bar dataKey="uv" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
  );
}
