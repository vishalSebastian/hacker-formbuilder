import './App.css';
import { FormBuilder } from './components/FormBuilder';
import config from '../src/components/config.json'
import { DataViewer } from './components/DataViewer';
import { PreviewAvailableElements } from './components/PreviewAvailableElements';

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <h1>Form builder!</h1>
        <div className='flex-col'>
          <DataViewer config={config} />
          <PreviewAvailableElements />
        </div>

        <FormBuilder config={config} />
      </div>
    </div>
  );
}

export default App;
