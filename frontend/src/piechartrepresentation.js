import { Pie, PieChart, Tooltip } from 'recharts';

function Piechartrepresentation(props) {
   return (
      <div>
         <PieChart width={400} height={400}>
            <Pie data={props.shareinprofit} dataKey="netprofit" nameKey="product_name" outerRadius={150} fill="pink" label />
            <Tooltip />
         </PieChart>
      </div>
   );
}

export { Piechartrepresentation };
