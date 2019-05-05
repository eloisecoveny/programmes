import React from "react";
import "./Input.css";

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  // Handle the list filtering as user input is detected
  handleChange(evt){
    this.setState({ text: evt.target.value }, () => {
      this.props.handleFilter(this.state.text)
    })
  }

  render(){
    return (
      <>
      <label>Search: </label>
      <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="search by name"/>
      </>
    )
  }
}
export default Search;
