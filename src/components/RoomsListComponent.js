import React from 'react';
import RoomOnListComponent from './RoomOnListComponent';

const RoomsListComponent = ({ roomsData }) => {

  return (
    <ul>
      {roomsData.map(
        (room) => {
          return (
            <li key={room.id}>
              <RoomOnListComponent roomData={room} />
            </li>
          )
        }
      )}
    </ul>
  )
}

export default RoomsListComponent;
