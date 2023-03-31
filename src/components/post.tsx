interface Props {
  post: string;
}

const Post: React.FC<Props> = ({ post }) => {
  return <div dangerouslySetInnerHTML={{ __html: post }}></div>;
};
export default Post;
