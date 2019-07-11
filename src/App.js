import React, { useState } from 'react';
import jsonp from 'jsonp';
import './App.css';
import FormComponent from './components/FormComponent';
import ListContainer from './components/ListContainer';

const App = () => {

  const [visitors, setVisitors] = useState({
    adultsNumber: 0,
    childrenNumber: 0
  });

  const handleChangeVisitors = name => event => {
    setVisitors({ ...visitors, [name]: event.target.value });
  };

  const [dateFrom, setDateFrom] = useState(new Date());

  const [dateTo, setDateTo] = useState(new Date());

  const handleChangeDateFrom = date => {
    setDateFrom(date);
  }

  const handleChangeDateTo = date => {
    setDateTo(date);
  }

  const [roomsData, setRoomsData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleClick = () => {
    setRoomsData(null);
    setIsLoading(true);
    getListOfRooms(
      (error, roomsData) => {
        setRoomsData(roomsData);
        setError(error);
        setIsLoading(false);
      }
    );
  };

  return (
    <div className="App">
      <FormComponent
        dateFrom={dateFrom}
        dateTo={dateTo}
        visitors={visitors}
        handleChangeVisitors={handleChangeVisitors}
        handleChangeDateFrom={handleChangeDateFrom}
        handleChangeDateTo={handleChangeDateTo} />

      <button onClick={handleClick}>get rooms</button>

      <ListContainer
        roomsData={roomsData}
        error={error}
        isLoading={isLoading} />
    </div>
  );
}

// class App extends React.Component {

//   state = {
//     roomsData: null,
//     error: null,
//     isLoading: false
//   };

//   handleClick = () => {
//     this.setState({ roomsData: null, isLoading: true });
//     getListOfRooms(
//       (error, roomsData) => this.setState({ roomsData, error, isLoading: false })
//     );
//   };

//   getDate = () => {

//   }

//   render() {
//     return (
//       <div className="App">
//         <FormComponent />
//         <button onClick={this.handleClick}>get rooms</button>
//         <ListContainer props={this.state} />
//       </div>
//     );
//   };
// };

export default App;


function getListOfRooms(callback) {
  let url = `http://testapi.itur.pl/api.php?date_from=2019-08-01&date_to=2019-08-06&nb_adults=2&nb_children=1`;
  jsonp(
    url,
    (error, data) => callback(error, data)
  );
}
