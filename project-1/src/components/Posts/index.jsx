import P from 'prop-types';
import './styles.css';
import { PostCard } from '../PostCards';

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts?.map((post) => (
        <PostCard key={post.id} id={post.id} title={post.title} cover={post.cover} body={post.body} />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.array,
};
