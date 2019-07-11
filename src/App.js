import React from 'react';
import jsonp from 'jsonp';
import './App.css';
import FormComponent from './components/FormComponent';
import ListContainer from './components/ListContainer';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      roomsData: null,
      error: null,
      isLoading: false
    };
  }

  handleClick() {
    this.setState({ roomsData: null, isLoading: true });
    getListOfRooms(
      (error, roomsData) => this.setState({ roomsData, error, isLoading: false })
    );
  }

  render() {
    return (
      <div className="App">
        <FormComponent />
        <button onClick={this.handleClick}>get rooms</button>
        <ListContainer props={this.state} />
      </div>
    );
  }
}

export default App;


function getListOfRooms(callback) {
  let url = `http://testapi.itur.pl/api.php?date_from=2019-08-01&date_to=2019-08-06&nb_adults=2&nb_children=1`;
  jsonp(
    url,
    (error, data) => callback(error, data)
  );
}