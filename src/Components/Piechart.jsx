import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function Piechart({ completed, total }) {
  const data = [
    { name: 'Completed', value: completed },
    { name: 'Remaining', value: total - completed },
  ];

  const COLORS = ['#0088FE', '#E7E7E7']; // Colors for completed and remaining segments

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          startAngle={90}
          endAngle={450}
          innerRadius={40}
          outerRadius={80}
          paddingAngle={5}
          fill="#8884d8"
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
