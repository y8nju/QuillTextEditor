import { useState } from 'react';
import ReactQull from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  return (
    <div>
      <ReactQull
        modules={{
          toolbar: [
            ['image'],
            [{ font: [] }, { header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'code-block', 'link'],
            [{ color: [] }, { background: [] }, { align: [] }],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              'blockquote',
              { indent: '+1' },
              { indent: '-1' },
            ],
            [{ script: 'sub' }, { script: 'super' }],
            ['clean'],
          ],
        }}
        formats={[
          'header',
          'bold',
          'italic',
          'underline',
          'strike',
          'blockquote',
          'code-block',
          'list',
          'ordered',
          'bullet',
          'script',
          'indent',
          'link',
          'image',
          'color',
          'background',
          'font',
          'align',
          'clean',
        ]}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default App;
