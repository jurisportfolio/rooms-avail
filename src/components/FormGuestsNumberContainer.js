import React from 'react';

import { TextField } from '@material-ui/core';

const FormGuestsNumberContainer = (props) => {

  return (
    <div className="form--guests__container">
      <div className="form--guests form--guests__adults">
        <TextField
          id="adultsNumber"
          label="Adults"
          value={props.adultsNumber}
          onChange={props.handleChange('adultsNumber')}
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
          value={props.childrenNumber}
          onChange={props.handleChange('childrenNumber')}
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
