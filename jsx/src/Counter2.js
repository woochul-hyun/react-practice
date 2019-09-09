import React, { useState } from 'react';

const Counter2 = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });

  const { username, message } = form;

  const onChange = e => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: ''
    });
  };

  const onKeyUp = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event</h1>
      <input
        type='text'
        name='username'
        placeholder='username'
        value={username}
        onChange={onChange}
      />
      <input
        type='text'
        name='message'
        placeholder='Enter any value'
        value={message}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <button onClick={onClick}>Check</button>
    </div>
  );
};

export default Counter2;
