import React from 'react';
import { format } from 'date-fns';
import { DatePicker } from '@material-ui/pickers';

const FormDatePickersContainer = (props) => {
  const {
    handleChangeDateFrom,
    handleChangeDateTo,
    dateFrom,
    dateTo
  } = props;
  console.log('dateFrom: ', format(dateFrom, 'yyyy-MM-dd'));
  console.log('dateTo: ', format(dateTo, 'yyyy-MM-dd'));
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
          // defaultValue={dateFrom}
          // minDate={dateFrom}
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


