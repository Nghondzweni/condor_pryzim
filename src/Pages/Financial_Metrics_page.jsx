import React from 'react';
import { View,Heading } from '@aws-amplify/ui-react';
import LineChart from '../Components/LineChart';
import BarChart from '../Components/BarChart';

export default function FinancialPerformanceePage() {
  return (
    <View>
      <Heading color="rgba(0,0,0,.5)" marginBottom={"30px"} >Financial Performance</Heading>
      <h4>Revenue Growth</h4>
      <View className='centerview'>
      <BarChart/>
      </View>
        
      <h4>Cost Per Dollar Raised (CPDR)</h4>
      <View className='centerview'>
      <LineChart/>
      </View>

      <h4>Conversion Rate</h4>
      <View className='centerview'>
      <LineChart/>
      </View>

      <h4>Program Expense Ratio.</h4>
      <View className='centerview'>
      <BarChart/>
      </View>
    </View>
  );
}