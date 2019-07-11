import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Paper
} from '@material-ui/core';

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
    <Paper className="App">
      <Card>
        <CardContent>
          <Typography component="h4">
            Please choose dates and guest's information to see prices:
          </Typography>
          <FormComponent
            dateFrom={dateFrom}
            dateTo={dateTo}
            visitors={visitors}
            handleChangeVisitors={handleChangeVisitors}
            handleChangeDateFrom={handleChangeDateFrom}
            handleChangeDateTo={handleChangeDateTo} />
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="outlined" onClick={handleSearch}>Search</Button>
        </CardActions>
      </Card>
      <ListContainer
        roomsData={roomsData}
        error={error}
        isLoading={isLoading}
      />
    </Paper>
  );
}

export default App;



