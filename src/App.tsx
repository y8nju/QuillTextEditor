import { useContext, useState } from 'react';
import ReactQull from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import PostList from './components/PostList';
import { Context } from './context/index';
import { Formats, Toolbar } from './utils/index';

function App() {
  const { post, setPost, postList, setPostList } = useContext(Context)!;

  const haldeSavePostList = () => {
    if (post!.length === 0 || post === '<p><br></p>') {
      alert('내용을 입력하세요 :)');
      return;
    }
    setPostList!((prev: any) => {
      const newData = [{ content: post, createdAt: new Date() }, ...prev];
      localStorage.setItem('data', JSON.stringify(newData));
      return newData;
    });
    setPost!('');
  };

  return (
    <div className="container">
      <header className="QuillContainer">
        <ReactQull
          modules={{
            toolbar: Toolbar,
          }}
          formats={Formats}
          theme="snow"
          value={post}
          onChange={setPost}
          placeholder="내용을 입력하세요"
        />
        <button className="saveBtn" onClick={haldeSavePostList}>
          Save
        </button>
      </header>
      <PostList />
    </div>
  );
}

export default App;
