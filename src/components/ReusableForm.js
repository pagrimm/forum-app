import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(){
  const buttonText = "Post";
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
        type='text'
        name='name'
        placeholder='name' />
      <br/>
      <textarea
        name='content'
        placeholder='Tell us what&apos;s up'
        />
      <br/>
      <button type='submit'>{props.buttonText}</button>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;