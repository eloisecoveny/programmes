import React from 'react';
import Table from "./containers/Table";
import Search from "./components/Search";
import NewProgrammeForm from "./components/NewProgrammeForm";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      programmes: [],
      filteredResults: []
    }
    this.getProgrammes = this.getProgrammes.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  getProgrammes(){
  fetch(`https://gist.githubusercontent.com/simontsang/74509ec1d801e8ce8b99f6b300d38071/raw/f2830f73cb4dc7e575d1be1335e3e41fbfd1cadc/programmes.json`)
  .then(res => res.json())
  .then((prog) => {
    this.setState({programmes: prog.results})
    this.setState({filteredResults: [...prog.results]})
    return null;
  })
  }

  handleFilter(input){
    let text = [...this.state.programmes].filter((programme) => {
      const name = programme.name
      return name.includes(input)
    })
    this.setState({filteredResults: text})
  }

  componentDidMount(){
    this.getProgrammes()
  }

  render(){
    return(
      <>
      <h1>Programmes</h1>
      <Search programmes={this.state.programmes} handleFilter={this.handleFilter} />
      <Table programmes={this.state.filteredResults} />
      {this.handleFilter}
      </>
    )
  }
}

export default App;
