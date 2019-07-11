import jsonp from 'jsonp';
import { format } from 'date-fns';

function getUrlFromFetchParams(fetchParams) {

  let url = ``;
  const baseUrl = `http://testapi.itur.pl/api.php`;
  const dateFrom = `date_from=${format(fetchParams.dateFrom, 'yyyy-MM-dd')}`;
  const dateTo = `date_to=${format(fetchParams.dateTo, 'yyyy-MM-dd')}`;
  const adultsNumber = `nb_adults=${fetchParams.visitors.adultsNumber}`;
  const childrenNumber = `nb_children=${fetchParams.visitors.childrenNumber}`;
  url = `${baseUrl}?${dateFrom}&${dateTo}&${adultsNumber}&${childrenNumber}`;

  return url;
}

export default function fetchRoomsData(fetchParams, callback) {
  const url = getUrlFromFetchParams(fetchParams);

  console.log('url: ', url);
  jsonp(
    url,
    { timeout: 6000 },
    (error, data) => callback(error, data)
  );
}
