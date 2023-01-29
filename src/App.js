import './App.css';
import { FormBuilder } from './components/FormBuilder';
import config from '../src/components/config.json'

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <FormBuilder config={config}/>
      </div>
    </div>
  );
}

export default App;
