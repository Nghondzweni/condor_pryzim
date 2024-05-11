import React from 'react';
import { View,Heading } from '@aws-amplify/ui-react';
import CollectionsCards from '../Components/Cards'
import BarChart from '../Components/BarChart';
import DialWidget from '../Components/RadialChart'
import PieChart from '../Components/Piechart'
import "../Styles/Landing_page.scss"
export default function Landing_page() {

  return (
    <View>
      <Heading color="rgba(0,0,0,.7)"  marginBottom={"30px"}>Dashboard</Heading>
      <Heading fontSize="14px" color="rgba(0,0,0,.5)"  marginTop={"10px"}>Mission statement</Heading>
      
      <View fontSize="14px" color="rgba(0,0,0,.5)">"Our mission is to empower individuals and communities through education, innovation, and sustainable development. We strive to foster positive social change by providing access to quality education, supporting entrepreneurship, and promoting environmental stewardship. Guided by integrity, collaboration, and a commitment to excellence, we work tirelessly to create a more equitable and prosperous world for present and future generations."</View>
      
      <h4>Events</h4>
      <View className='centerview'>
        <CollectionsCards/>
        </View>

      <h4>Revenue Growth</h4>
      <View className='centerview'>
        <BarChart/>
        </View>
        <h4>Compliance</h4>
      <View className='centerview'>
        <PieChart completed={10} total={15}/>
      </View>


      <h4>Financial Ratio Metrics</h4>
      <View className='centerview'>
      <DialWidget/>
        </View>

    </View>
  );
}