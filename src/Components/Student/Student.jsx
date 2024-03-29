import React from "react";
class Student extends React.Component {
  render() {
    return (
      <div className="col-4 py-2">
        <div className="row border">
          <div className="col-2">
            <img
              className="w-100 m-1"
              src={this.props.headshot}
              alt="initials"
            />
          </div>
          <div className="col-8">
            {this.props.name} <br />
            Coding experience: {this.props.experience} years
          </div>
          <div className="col-2">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default Student;
