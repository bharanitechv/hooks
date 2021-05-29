import logo from './logo.svg';
import './App.css';
import {HookState} from './components/HookState';
import { HookStateObj } from './components/HookStateObj';
import {UseEffectDemo} from './components/UseEffectDemo';
import FetchData from './components/FetchData';
import UserContextExp from './components/UserContextExp'
import React from 'react'
import SimplerContextUsage from './components/SimplerContextUsage';
import UseCallback from './components/UseCallback';
import CustomHookCounter from './components/Hooks/CustomHookCounter';

 export const UserContext = React.createContext()
function App() {
  return (
    <div className="App">
     
       {/* <HookState></HookState> */}
       {/* <HookStateObj/> */}
      {/* <UseEffectDemo></UseEffectDemo> */}
      {/* <FetchData/> */}
     
       <UserContext.Provider value = {'simpler context'}>
        {/* <SimplerContextUsage/> */}
       <CustomHookCounter/>
       </UserContext.Provider>
     
    </div>
  );
}

export default App;
