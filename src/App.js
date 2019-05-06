import React from 'react';
import Table from "./containers/Table";
import Search from "./components/Search";
import NewProgrammeForm from "./components/NewProgrammeForm";
import "./App.css";

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
    this.newProgramme = this.newProgramme.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  // Fetch programmes from the API.
  getProgrammes(){
    fetch(`https://gist.githubusercontent.com/simontsang/74509ec1d801e8ce8b99f6b300d38071/raw/f2830f73cb4dc7e575d1be1335e3e41fbfd1cadc/programmes.json`)
    .then(res => res.json())
    .then((prog) => {
      // updatedDepo is a property used as a local data depository for this example as I am not mutating a DB.
      this.setState({programmes: prog.results, updatedDepo: [...prog.results], filteredResults: [...prog.results]});
    });
  }

  // Filter search results based on user input.
  handleFilter(input){
    let filtered = [...this.state.updatedDepo].filter(prog => {
      return prog.name.toLowerCase().includes(input.toLowerCase())
    });
    this.setState({filteredResults: filtered})
  }

  // Remove programme from the local depository to remove it from the table.
  handleDelete(id){
    let found = this.state.updatedDepo.find(prog => {
      return prog.id === id
    })
    let index = this.state.updatedDepo.indexOf(found)
    let updated = this.state.updatedDepo
    updated.splice(index, 1)
    this.setState({updatedDepo: updated, filteredResults: [...this.state.updatedDepo]})
  }

  // Sort the order of programmes based on either id or name.
  handleSort(type){
    let sortedList = []
    if(type === "id"){
      sortedList = this.state.filteredResults.sort((a, b) => {
        return a.id - b.id
      })
      this.setState({filteredResults: sortedList})
    } else if(type === "name"){
      this.setState({filteredResults: [...this.state.updatedDepo]})
    }
  }

  // Add a new programme to the local depository so it can be added to the table.
  newProgramme(name, description, active){
    let ids = this.state.updatedDepo.map(prog => prog.id)
    let maxId = Math.max(...ids)
    let newProgramme = {
      "id": maxId + 1,
      "name": name,
      "shortDescription": description,
      "active": active
    }
    let updated = [...this.state.updatedDepo]
    updated.push(newProgramme)
    this.setState({updatedDepo: updated, filteredResults: [...updated]})
  }

  // Fetch the programmes when the component mounts.
  componentDidMount(){
    this.getProgrammes()
  }

  render(){
    return(
      <div className="app-wrapper">
        <h1>Programmes</h1>
        <div className="input-wrapper">
          <Search programmes={this.state.updatedDepo} handleFilter={this.handleFilter} />
        </div>
        <div className="input-wrapper">
          <NewProgrammeForm newProgramme={this.newProgramme}/>
        </div>
        <Table programmes={this.state.filteredResults} handleDelete={this.handleDelete} handleSort={this.handleSort}/>
      </div>
    )
  }
}

export default App;
