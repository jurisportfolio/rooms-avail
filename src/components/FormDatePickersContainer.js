import React from 'react';

import { DatePicker } from '@material-ui/pickers';

const FormDatePickersContainer = (props) => {
  const {
    handleChangeDateFrom,
    handleChangeDateTo,
    dateFrom,
    dateTo
  } = props;

  return (
    <div className="form--date__container">
      <div className="form--date__from">
        <DatePicker
          autoOk
          label="Date From"
          disablePast
          value={dateFrom}
          onChange={date => handleChangeDateFrom(date)}
          margin="normal"
          variant="inline"
          inputVariant="outlined"
        />
      </div>
      <div className="form--date form--date__to">
        <DatePicker
          autoOk
          label="Date To"
          initialFocusedDate={dateFrom}
          disablePast
          value={dateTo}
          onChange={date => handleChangeDateTo(date)}
          margin="normal"
          variant="inline"
          inputVariant="outlined"
        />
      </div>
    </div>
  )
}

export default FormDatePickersContainer;


