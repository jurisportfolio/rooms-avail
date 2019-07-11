import React, { useState } from 'react';

import './App.css';
import FormComponent from './components/FormComponent';
import ListContainer from './components/ListContainer';

import fetchRoomsData from './utilities/fetchFunctions';

const App = () => {

  const [visitors, setVisitors] = useState({
    adultsNumber: 1,
    childrenNumber: 0
  });
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [roomsData, setRoomsData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeVisitors = name => event => {
    setVisitors({ ...visitors, [name]: event.target.value });
    handleSearch();
  };
  const handleChangeDateFrom = date => {
    setDateFrom(date);
    if (date > dateTo) { setDateTo(date) };
    handleSearch();
  }
  const handleChangeDateTo = date => {
    setDateTo(date);
    if (date < dateFrom) { setDateFrom(date) };
    handleSearch();
  }
  const handleSearch = () => {
    setRoomsData(null);
    setIsLoading(true);
    fetchRoomsData(
      {
        dateFrom: dateFrom,
        dateTo: dateTo,
        visitors: visitors
      },
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

      <button onClick={handleSearch}>Search</button>

      <ListContainer
        roomsData={roomsData}
        error={error}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;



