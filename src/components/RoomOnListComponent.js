import React from 'react';
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';

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
    <Card>
      <CardHeader title={name} />
      <CardMedia component='img' image={image} title={name} />
      <CardContent>
        <Typography variant="subtitle1">{roomType}</Typography>
        <Typography variant="subtitle1">Maksymalna ilość gości {maxNbGuests}</Typography>
        <Typography variant="subtitle1">Cena: {totalPrice}</Typography>
        <Typography variant="subtitle1">Ilość sypialeń {bedroomsCount}</Typography>
        <Typography variant="subtitle1" >Łóżka pojedyńcze {singleBedsCount}</Typography>
        <Typography variant="subtitle1" >Łóżka podwójne {doubleBedsCount}</Typography>
      </CardContent>


    </Card>
  )
}

export default RoomOnListComponent;
