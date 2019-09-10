import React from 'react';

const History = ({ history }) => {
  const back = () => {
    history.goBack();
  };

  const home = () => {
    history.push('/');
  };

  return (
    <div>
      <button onClick={back}>back</button>
      <button onClick={home}>Home</button>
    </div>
  );
};

export default History;
