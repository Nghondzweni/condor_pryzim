import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
{ name: 'Leverage Ratio.', uv: 2.63, fill: '#d0ed57' },
  { name: 'Administrative Expense Ratio.', uv: 31.47, fill: '#8884d8' },
  { name: 'Government Reliance Ratio.', uv: 26.69, fill: '#83a6ed' },
  { name: 'Fundraising Efficiency Ratio.', uv: 15.69, fill: '#8dd1e1' },
  { name: 'Cash Reserves Ratio', uv: 8.22, fill: '#82ca9d' },
  { name: 'Accounts Receivable Turnover Ratio', uv: 8.63, fill: '#a4de6c' },
  { name: 'Net margin Ratio.', uv: 6.67, fill: '#ffc658' },
];

const style = {
  top: '10%',
//   bottom: '80%',
  right: 0,
//   transform: 'translate(-350%, 0%)',
  lineHeight: '24px',
};

export default function DialWidget() {
  return (
    <ResponsiveContainer width="80%" height={1000}> 
      <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={30} data={data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
