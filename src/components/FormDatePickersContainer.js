import React, { useState } from 'react';

import { DatePicker } from '@material-ui/pickers';

const FormDatePickersContainer = (props) => {

  return (
    <div className="form--date__container">
      <div className="form--date__from">
        <DatePicker
          autoOk
          label="Date From"
          disablePast
          value={props.dateFrom}
          onChange={date => props.handleChangeDateFrom(date)}
          margin="normal"
          variant="inline"
          inputVariant="outlined"
        />
      </div>
      <div className="form--date form--date__to">
        <DatePicker
          autoOk
          label="Date To"
          disablePast
          value={props.dateTo}
          onChange={date => props.handleChangeDateTo(date)}
          margin="normal"
          variant="inline"
          inputVariant="outlined"
        />
      </div>
    </div>
  )
}

export default FormDatePickersContainer;


