import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "./actions/postAction";

class AddPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Takes an event parameter
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // Takes an event parameter
  onSubmit(e) {
    e.preventDefault(); // Prevent the default action

    const post = {
      title: this.state.title,
      description: this.state.description,
    };

    // Make a post request
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Description</label>
            <br />
            <input
              type="text"
              name="description"
              onChange={this.onChange}
              value={this.state.description}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

AddPostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};
export default connect(null, { createPost })(AddPostForm);
