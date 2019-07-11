import React from 'react';

import { TextField } from '@material-ui/core';

const FormGuestsNumberContainer = (props) => {
  const {
    adultsNumber,
    childrenNumber,
    handleChange
  } = props;
  return (
    <div className="form--guests__container">
      <div className="form--guests form--guests__adults">
        <TextField
          id="adultsNumber"
          label="Adults"
          value={adultsNumber}
          onChange={handleChange('adultsNumber')}
          type="number"
          className="input__number"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 0
          }}
          margin="normal"
          variant="outlined"
        />
      </div>
      <div className="form--guests form--guests__children">
        <TextField
          id="childrenNumber"
          label="Children"
          value={childrenNumber}
          onChange={handleChange('childrenNumber')}
          type="number"
          className="input__number"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 0
          }}
          margin="normal"
          variant="outlined"
        />
      </div>
    </div>
  )
}

export default FormGuestsNumberContainer;
