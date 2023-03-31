import { useContext, useState } from 'react';
import ReactQull from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import { Context } from './context/index';
import { Formats, Toolbar } from './utils/index';

function App() {
  const { post, setPost, postList, setPostList } = useContext(Context)!;

  const haldeSavePostList = () => {
    if (post!.length === 0 || post === '<p><br></p>') {
      alert('내용을 입력하세요 :)');
      return;
    }
    setPostList!((prev: any) => [...prev, post]);
  };

  return (
    <div className="container">
      <ReactQull
        modules={{
          toolbar: Toolbar,
        }}
        formats={Formats}
        theme="snow"
        value={post}
        onChange={setPost}
      />
      <button className="saveBtn" onClick={haldeSavePostList}>
        Save
      </button>
      <div>
        {postList!.map((post, idx) => (
          <div key={idx}>
            {/* <div dangerouslySetInnerHTML={{ __html: post }}></div> */}
            {post}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
