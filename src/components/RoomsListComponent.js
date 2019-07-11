import React from 'react';
import jsonp from 'jsonp';

const RoomOnList = ({ data }) => {
  console.log('data: ', data);
  const {
    name,
    roomType,
    maxNbGuests,
    totalPrice,
    bedroomsCount,
    singleBedsCount,
    doubleBedsCount,
    image

  } = data;
  return (
    <div>
      <img src={image} width='100' alt='room' />
      <h2>{name}</h2>
      <h3>{roomType}</h3>
      <h4>{maxNbGuests}</h4>
      <h4>Cena: {totalPrice}</h4>
      <h4>Ilość sypialeń {bedroomsCount}</h4>
      <h4>Łóżka pojedyńcze {singleBedsCount}</h4>
      <h4>Łóżka podwójne {doubleBedsCount}</h4>

    </div>
  )
}

const ListOfRooms = () => {
  return (
    <ul>

    </ul>
  )
}

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: null,
      error: null,
      isLoading: false
    };
  }

  handleClick() {
    this.setState({ data: null, isLoading: true });
    getListOfRooms(
      (error, data) => this.setState({ data, error, isLoading: false })
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>get data</button>
        <div>
          {this.state.isLoading ? <h2>Loading...</h2> : null}
          {this.state.error ? <h2>{this.state.error}</h2> : null}
          {this.state.data ? <RoomOnList data={this.state.data[3]} /> : null}
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