import React from 'react';
import UseContextComponent from '../components/use-context-component'

//Create a context for using child components
//with ChannelContext.Provider, you can reach value of context in all child components
export const ChannelContext = React.createContext();

function UseContext() {

  return (
    <div className = "page">
      <ChannelContext.Provider value={'useContext ChannelContext Value'}>
        <UseContextComponent />
      </ChannelContext.Provider>
    </div>
  );
}

export default UseContext;