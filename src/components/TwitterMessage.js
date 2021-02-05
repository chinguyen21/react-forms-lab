import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }


  handleChange = (event) => {
    // event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange}type="text" name="message" id="message" value={this.state.message} />
        <p>Remaining Characters: {this.props.maxChars-this.state.message.length}/{this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
