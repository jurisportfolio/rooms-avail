import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import RoomsListComponent from './RoomsListComponent'

const ListContainer = (props) => {
  const { isLoading, error, roomsData } = props;
  return (
    <div>
      {isLoading ? <CircularProgress /> : null}
      {error ? <h2>{error.toString()}</h2> : null}
      {roomsData ? <RoomsListComponent roomsData={roomsData} /> : null}
    </div>
  )
}

export default ListContainer;


