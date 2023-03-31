import { useState } from 'react';
import ReactQull from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import { Formats, Toolbar } from './utils/index';

function App() {
  const [value, setValue] = useState('');
  return (
    <div>
      <ReactQull
        modules={{
          toolbar: Toolbar,
        }}
        formats={Formats}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default App;
