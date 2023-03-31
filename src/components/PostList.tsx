import { useContext } from 'react';
import { Context } from '../context/index';
import Post from './post';
import './post.css';

const PostList: React.FC = () => {
  const { postList, setPostList } = useContext(Context)!;

  return (
    <section className="postList">
      <header>
        <h3>PostList</h3>
        {postList!.length > 0 ? (
          <button
            className="postDelBtn"
            onClick={() => {
              if (window.confirm('포스트를 전체 삭제 하시겠습니까?'))
                localStorage.clear();
              setPostList!([]);
            }}
          >
            All Delete
          </button>
        ) : (
          ''
        )}
      </header>
      {postList
        ? postList.map((post, idx) => <Post key={idx} post={post as any} />)
        : ''}
    </section>
  );
};
export default PostList;
