import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state = props.userData

  }

  handleSubmit(event){
  //Do what we need to with the results of the form
  event.preventDefault()
}

  handleChange(event){
    const target = event.target
    const attribute = target.name
    this.setState({[attribute]: event.target.value})
    console.log(this.state.email.toUpperCase())
    console.log(this.state.firstName.toUpperCase())
    console.log(this.state.lastName.toUpperCase())
  }



  submitForm() {

  }

  render() {
    return (

      <form onSubmit={this.submitForm.bind(this)} >
        <div className='form-group'>
          <label
            className='control-label'>
            First Name:
          </label>
          <input
            name='firstName'
            type='text'
            value={this.state.firstName}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label
            className='control-label'>
            Last Name:
          </label>
          <input
            name='lastName'
            type='text'
            value={this.state.lastName}
            onChange={this.handleChange.bind(this)}

            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label
            className='control-label'>
            Email:
          </label>
          <input
            name='email'
            type='text'
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>

       <input
          type='submit' value='Submit' />
      </form>
    );
  }
}

export default UserForm
