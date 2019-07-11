import React from 'react';
import jsonp from 'jsonp';
import CircularProgress from '@material-ui/core/CircularProgress';
import RoomsListComponent from './RoomsListComponent'

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
        <button onClick={this.handleClick}>get rooms</button>
        <div>
          {this.state.isLoading ? <CircularProgress /> : null}
          {this.state.error ? <h2>{this.state.error}</h2> : null}
          {this.state.roomsData ? <RoomsListComponent roomsData={this.state.roomsData} /> : null}
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
