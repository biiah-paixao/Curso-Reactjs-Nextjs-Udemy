import P from 'prop-types';
import './styles.css';
export const PostCard = ({ cover, id, title, body }) => {
  return (
    <div className="post">
      {/* eslint-disable-next-line */}
      <img src={cover} alt={title}/>
      <div key={id} className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  cover: P.string.isRequired,
  id: P.number.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
};
