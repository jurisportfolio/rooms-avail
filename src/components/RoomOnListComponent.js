import React from 'react';

const RoomOnListComponent = ({ roomData }) => {

  const {
    name,
    roomType,
    maxNbGuests,
    totalPrice,
    bedroomsCount,
    singleBedsCount,
    doubleBedsCount,
    image

  } = roomData;
  return (
    <div>
      <img src={image} width='100' alt='room' />
      <h2>{name}</h2>
      <h3>{roomType}</h3>
      <h4>Maksymalna ilość gości {maxNbGuests}</h4>
      <h4>Cena: {totalPrice}</h4>
      <h4>Ilość sypialeń {bedroomsCount}</h4>
      <h4>Łóżka pojedyńcze {singleBedsCount}</h4>
      <h4>Łóżka podwójne {doubleBedsCount}</h4>

    </div>
  )
}

export default RoomOnListComponent;
