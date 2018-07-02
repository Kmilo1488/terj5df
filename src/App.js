import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      guests: [],
      firstname: "",
      lastname: ""
    }

    this.guest = this.guest.bind(this)
    this.firstName = this.firstName.bind(this)
    this.lastName = this.lastName.bind(this)
  }

  guest(e) {
    const objID = this.state.guests.length === 0 ? 1 : this.state.guests.length + 1

    this.setState({
      guests: this.state.guests.concat({ id: objID, firstname: this.state.firstname, lastname: this.state.lastname })
    })

    e.preventDefault()
  }

  firstName(e) {
    this.setState({
      firstname: e.target.value
    })
  }

  lastName(e) {
    this.setState({
      lastname: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.guest}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" onChange={this.firstName} name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" onChange={this.lastName} name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                { this.state.guests.map((guest) =>
                  <tr key={ guest.id }>
                    <td>{ guest.firstname }</td>
                    <td>{ guest.lastname }</td>
                  </tr>
                ) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
