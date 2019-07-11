import React, { useState } from 'react';

import './App.css';
import FormComponent from './components/FormComponent';
import ListContainer from './components/ListContainer';

import fetchRoomsData from './utilities/fetchFunctions';

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

      <button onClick={handleClick}>get rooms</button>

      <ListContainer
        roomsData={roomsData}
        error={error}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;



