import React, { useState } from 'react';
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import FormDatePickersContainer from './FormDatePickersContainer';
import FormGuestsNumberContainer from './FormGuestsNumberContainer';

const FormComponent = () => {
  const [visitors, setVisitors] = useState({
    adultsNumber: 0,
    childrenNumber: 0
  });

  const handleChangeVisitors = name => event => {
    setVisitors({ ...visitors, [name]: event.target.value });
  };

  const [dateFrom, setDateFrom] = useState(new Date());

  const [dateTo, setDateTo] = useState(new Date());

  const handleChangeDateFrom = date => {
    setDateFrom(date);
  }

  const handleChangeDateTo = date => {
    setDateTo(date);
  }

  console.log('dateFrom: ', dateFrom);
  console.log('dateTo: ', dateTo);
  return (
    <MuiPickersUtilsProvider className="form" utils={DateFnsUtils}>
      <h4 className="form--title">Please choose dates and guest's information to see prices: </h4>
      <FormDatePickersContainer
        handleChangeDateFrom={handleChangeDateFrom}
        handleChangeDateTo={handleChangeDateTo}
        dateFrom={dateFrom}
        dateTo={dateTo}
      />
      <FormGuestsNumberContainer
        handleChange={handleChangeVisitors}
        adultsNumber={visitors.adultsNumber}
        childrenNumber={visitors.childrenNumber}
      />
      <h1>{visitors.adultsNumber}</h1>
      <h1>{visitors.childrenNumber}</h1>
      <h1>{dateFrom.toString()}</h1>
      <h1>{dateTo.toString()}</h1>



    </MuiPickersUtilsProvider>
  )
}

export default FormComponent;
