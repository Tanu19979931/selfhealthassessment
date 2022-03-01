import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
// import ChannelContainer from './Cons_Components/ChannelContainer';
// import ChannelListContainer from './Cons_Components/ChannelListContainer';
import{ ChannelContainer, ChannelListContainer} from './Cons_Components'
import './Consultant.css';
const apiKey = 'nhhu8wwp5ges';
const client = StreamChat.getInstance(apiKey);
const Consultant = () => {
  return (
  <div className='app__wrapper'>
    <Chat client={client} theme = "theam light">
      <ChannelListContainer/>
      <ChannelContainer/>
    </Chat>
     
  </div>
  );
};

export default Consultant;
