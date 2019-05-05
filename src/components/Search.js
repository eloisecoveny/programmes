import React from "react";

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt){
    this.setState({ input: evt.target.value })
    this.props.handleFilter(this.state.input)
  }

  render(){
    return (
      <>
      <p>Search</p>
      <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="search programme name"/>
      </>
    )
  }
}
export default Search;
