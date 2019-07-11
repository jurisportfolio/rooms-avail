import React from 'react';
import jsonp from 'jsonp';
import CircularProgress from '@material-ui/core/CircularProgress';

const RoomOnList = ({ roomData }) => {

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

const ListOfRooms = ({ roomsData }) => {
  console.log(roomsData);
  return (
    <ul>
      {roomsData.map(
        (room) => {
          return (
            <li key={room.id}>
              <RoomOnList roomData={room} />
            </li>
          )
        }
      )}
    </ul>
  )
}

export default class ListContainer extends React.Component {
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
      <div>
        <button onClick={this.handleClick}>get roomsData</button>
        <div>
          {this.state.isLoading ? <CircularProgress /> : null}
          {this.state.error ? <h2>{this.state.error}</h2> : null}
          {this.state.roomsData ? <ListOfRooms roomsData={this.state.roomsData} /> : null}
        </div>
      </div>
    )
  }
}

function getListOfRooms(callback) {
  let url = `http://testapi.itur.pl/api.php?date_from=2019-08-01&date_to=2019-08-06&nb_adults=2&nb_children=1`;
  jsonp(
    url,
    (error, data) => callback(error, data)
  );
}