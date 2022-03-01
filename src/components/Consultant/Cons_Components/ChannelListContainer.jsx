import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview} from './';
import HospitalIcon from '../../../assets/assets_n/hospital.png'
import LogoutIcon from '../../../assets/assets_n/logout.png'
const SideBar =() =>{
   return(
        <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
        <div className='icon1__inner'>
            <img src={HospitalIcon} alt = "Hospital" width = "30"/>
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
        <div className='icon1__inner'>
            <img src={LogoutIcon} alt = "Logout" width = "30"/>
            </div>
        </div>

    </div>
   )
}

const ChannelListContainer = () => {
  return <>
  <SideBar />
  
  </>;
};

export default ChannelListContainer;
