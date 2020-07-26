import React, { useContext } from 'react';
import {ChannelContext} from '../pages/use-context';

function UseContextComponent() {

  //get ChannelContext value. It is set by parent component
  const channelContextValue = useContext(ChannelContext);

  return (
    <div>
      <p>ChannelContext value: {channelContextValue}</p>
    </div>
  );
}

export default UseContextComponent;