import React from 'react';
import Table from "./containers/Table";
import Search from "./components/Search";
import NewProgrammeForm from "./components/NewProgrammeForm";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      programmes: [],
      filteredResults: [],
      updatedDepo: []
    }
    this.getProgrammes = this.getProgrammes.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  getProgrammes(){
    fetch(`https://gist.githubusercontent.com/simontsang/74509ec1d801e8ce8b99f6b300d38071/raw/f2830f73cb4dc7e575d1be1335e3e41fbfd1cadc/programmes.json`)
    .then(res => res.json())
    .then((prog) => {
      this.setState({programmes: prog.results, updatedDepo: prog.results, filteredResults: [...prog.results]});
    });
  }

  handleFilter(input){
    let filtered = [...this.state.updatedDepo].filter(prog => {
      return prog.name.toLowerCase().includes(input.toLowerCase())
    });
    this.setState({filteredResults: filtered})
  }

  handleDelete(id){
    let found = this.state.updatedDepo.find(prog => {
      return prog.id === id
    })
    let index = this.state.updatedDepo.indexOf(found)
    let updated = this.state.updatedDepo
    updated.splice(index, 1)
    this.setState({updatedDepo: updated, filteredResults: [...this.state.updatedDepo]})
  }

  componentDidMount(){
    this.getProgrammes()
  }

  render(){
    return(
      <>
      <h1>Programmes</h1>
      <Search programmes={this.state.updatedDepo} handleFilter={this.handleFilter} />
      <Table programmes={this.state.filteredResults} handleDelete={this.handleDelete}/>
      </>
    )
  }
}

export default App;
