import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ReactQull from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import PostList from './components/PostList';
import { Context } from './context/index';
import { Formats, Toolbar } from './utils/index';

function App() {
  const { post, setPost, postList, setPostList } = useContext(Context)!;
  const ref = useRef(''); // 자동저장 text
  const changeRef = useRef(false); // text 변화 감지 boolean
  const countRef = useRef(0); // text 변화 count

  useEffect(() => {
    countRef.current++;
    ref.current = post!;
    changeRef.current = true;

    if (countRef.current > 20) {
      // text가 setInterval 설정 시간 전에 20자 이상 변화하면 저장
      localStorage.setItem('tmp', ref.current);
      countRef.current = 0;
      changeRef.current = false;
    }
  }, [post]);

  useEffect(() => {
    const intv = setInterval(() => {
      // 15초 마다 자동 저장
      if (changeRef.current) {
        localStorage.setItem('tmp', ref.current);
        countRef.current = 0;
        changeRef.current = false;
      }
    }, 15000);
    return () => clearInterval(intv);
  }, []);

  const haldeSavePostList = () => {
    if (post!.length === 0 || post === '<p><br></p>') {
      alert('내용을 입력하세요 :)');
      return;
    }
    localStorage.removeItem('tmp');
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
