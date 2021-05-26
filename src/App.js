import logo from './logo.svg';
import './App.css';
import {HookState} from './components/HookState';
import { HookStateObj } from './components/HookStateObj';
import {UseEffectDemo} from './components/UseEffectDemo';
import FetchData from './components/FetchData';

function App() {
  return (
    <div className="App">
     
       {/* <HookState></HookState> */}
       {/* <HookStateObj/> */}
      {/* <UseEffectDemo></UseEffectDemo> */}
      <FetchData/>
       
     
    </div>
  );
}

export default App;
