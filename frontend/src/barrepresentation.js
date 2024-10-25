import { useState, useEffect } from 'react';
import {BarChart,XAxis,YAxis,CartesianGrid,LabelList,Bar,Label} from 'recharts'; 
function Barrepresentation(props){
    return( 
        <div>
            {
            <BarChart 
            width={1000} 
            height={250} 
            data={props.frequencyarray} 
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_name">
              <Label value="Product name" offset={0} position="insideBottom" />
            </XAxis>
            <YAxis label={{ value: 'sold by now', angle: -90, position: 'insideLeft' }} />
            <Bar dataKey="sold_by_now" fill="#8884d8">
              <LabelList dataKey="product_name" position="top" />
            </Bar>
          </BarChart>
         }

        </div>
        
    );
}; 
export {Barrepresentation};