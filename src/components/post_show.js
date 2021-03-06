import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  onDelete() {
    this.props.deletePost(this.props.params.id)
    .then( () => {
      this.context.router.push('/');
    });
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div> Loading... </div>;
    }
    return (
      <div>
        <Link to='/'>Back to Index</Link>
        <button
          className='btn btn-danger float-xs-right'
          onClick={this.onDelete.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { post: posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
