import React from "react";

class BadgeForm extends React.Component {
  state = {
    jobTitle: "Designer",
  };

  handleChange = (e) => {
    //console.log({ name: e.target.name, value: e.target.value });

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              placeholder="Primer Nombre"
              name="firstName"
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              placeholder="Segundo Nombre"
              name="lastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              placeholder="Correo Electronico"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              placeholder="Cargo"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>LinkedIn</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              placeholder="LinkedIn"
              name="linkedin"
              value={this.state.linkedin}
            />
          </div>

          <button
            /*Type="button"*/ onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
