import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('Effect');
    console.log(name);
    return () => {
      console.log('Cleanup');
      console.log(name);
    };
  }, [name]);

  const changeName = e => {
    setName(e.target.value);
  };

  const changeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={changeName} />
        <input value={nickname} onChange={changeNickname} />
      </div>
      <div>
        <div>
          <b>Name: </b> {name}
        </div>
        <div>
          <b>Nickname: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
