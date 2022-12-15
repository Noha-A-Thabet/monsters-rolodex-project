import { Component } from 'react';
import './App.css';
import CardList from './Components/Card-List/CardList';
import SearchBox from './Components/Search-Box/SearchBox';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  };
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users').then(
      (response) => response.json()
    ).then(
      (user) => this.setState(() => {
        return { monsters: user }
      })
    );

  }
  // function for search input bar 
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    });
  }

  render() {
    // Destructuring 
    const { monsters, searchField } = this.state;
    const { SearchChange } = this;


    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });


    return (
      <div className="App" >
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={this.onSearchChange} placeholder=" Search Monsters" className='monster-Search-box' />
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;
