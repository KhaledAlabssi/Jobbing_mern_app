import React from 'react'

function FormRow({type, name, changeHandler, value, labelText}) {
    return (
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>

        <input
          type={type}
          value={value}
          name={name}
          onChange={changeHandler}
          className="form-input"
        />
      </div>
    );
}

export default FormRow
