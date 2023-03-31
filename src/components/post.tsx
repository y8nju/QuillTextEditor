import './post.css';

interface Props {
  post: { content: string; createdAt: Date };
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <section className="post" >
      <h6>{post.createdAt.toString()}</h6>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </section>
  );
};
export default Post;
