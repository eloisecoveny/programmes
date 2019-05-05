import React from "react";

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt){
    this.setState({ text: evt.target.value }, () => {
      this.props.handleFilter(this.state.text)
    })
  }

  render(){
    return (
      <>
      <p>Search</p>
      <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="search by name"/>
      </>
    )
  }
}
export default Search;
