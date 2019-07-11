import React from 'react';
import RoomOnListComponent from './RoomOnListComponent';
import {
  List,
  ListItem
} from '@material-ui/core';

const RoomsListComponent = ({ roomsData }) => {

  return (
    <List>
      {roomsData.map(
        (room) => {
          return (
            <ListItem key={room.id}>
              <RoomOnListComponent roomData={room} />
            </ListItem>
          )
        }
      )}
    </List>
  )
}

export default RoomsListComponent;
