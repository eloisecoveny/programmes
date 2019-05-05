import React from "react";
import "./Input.css";

class NewProgrammeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      active: false
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleActiveSelect = this.handleActiveSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Dynamically update user input field name
  handleNameChange(event){
    this.setState({name: event.target.value})
  }

  // Dynamically update user input field description
  handleDescriptionChange(event){
    this.setState({description: event.target.value})
  }

  // Update user selection active
  handleActiveSelect(event){
    this.setState({active: event.target.value})
  }

  // Handle the saving of a new programme to the local depository
  handleSubmit(event){
    event.preventDefault()
    const name = this.state.name.trim()
    const description = this.state.description.trim()
    const active = this.state.active
    if(!name || !description) return;

    this.props.newProgramme(name, description, active)
    // Reset the state
    this.setState({description: "", name: "", active: false})
  }

  render(){
    return (
      <>
        <label>Add programme: </label>
        <form className="new-prog-form" onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder="Programme name"
          value={this.state.name} onChange={this.handleNameChange}
          />
          <input
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          />
          <select value={this.state.active} onChange={this.handleActiveSelect}>
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
          <input type="submit" value="Post" />
        </form>
      </>
    )
  }
}
export default NewProgrammeForm;
