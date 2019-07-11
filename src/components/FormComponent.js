import React from 'react';
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import FormDatePickersContainer from './FormDatePickersContainer';
import FormGuestsNumberContainer from './FormGuestsNumberContainer';

const FormComponent = (props) => {
  const {
    handleChangeDateFrom,
    handleChangeDateTo,
    handleChangeVisitors,
    dateFrom,
    dateTo,
    visitors
  } = props;

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
    </MuiPickersUtilsProvider>
  )
}

export default FormComponent;
