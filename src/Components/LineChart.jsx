import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
        {name: '2019', uv: 100, pv: 2400, amt: 2400},
        {name: '2020', uv: 200, pv: 2400, amt: 2400},
        {name: '2021', uv: 600, pv: 2400, amt: 2400},
        {name: '2022', uv: 400, pv: 2400, amt: 2400},
        {name: '2023', uv: 800, pv: 2400, amt: 2400}, 
        {name: '2024', uv: 900, pv: 2400, amt: 2400},
    ];

export default function Chart() {
    return(
    <LineChart width={300} height={200} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
    </LineChart>
    )
};