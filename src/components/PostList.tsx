import { useContext } from 'react';
import { Context } from '../context/index';
import Post from './post';
import './post.css';

const PostList: React.FC = () => {
  const { postList } = useContext(Context)!;
  return (
    <div className="postList">
      {postList!.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  );
};
export default PostList;
