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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

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
