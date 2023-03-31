import './post.css';

interface Props {
  post?: { content: string; createdAt: Date };
}

const Post: React.FC<Props> = ({ post }) => {
  const koDtf = new Intl.DateTimeFormat('ko', {
    dateStyle: 'long',
    timeStyle: 'medium',
  });

  return (
    <section className="post">
      <h6 className="createdAt">{koDtf.format(new Date(post!.createdAt))}</h6>
      <div dangerouslySetInnerHTML={{ __html: post!.content }}></div>
    </section>
  );
};
export default Post;
