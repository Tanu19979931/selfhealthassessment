import React, {useEffect} from 'react';
import TooliTipComponent from './TooliTipComponent'
import './TooltipDesign.css'
function TooltipTemplate(info) {
  // useEffect(()=>{
  //   console.log("Hello");
  // },[]);
  
  return <div className='mainContainer'>
  <h1>{info.attribute('name')}</h1>
  
  <TooliTipComponent countryNm = {info.attribute('name')}/>
  {/* {gdpInfo} */}
  {/* {graphic} */}
</div>;
}

export default TooltipTemplate;

