import React, { useState } from 'react';

const IterationSample = () => {
  const [sample, setSample] = useState([
    { id: 1, text: 'sample1' },
    { id: 2, text: 'sample2' },
    { id: 3, text: 'sample3' },
    { id: 4, text: 'sample4' }
  ]);
  const [inputText, setInputText] = useState('');

  const sampleList = sample.map(sample => (
    <li key={sample.id}>
      {sample.text}{' '}
      <button
        onClick={() => {
          deleteBtn(sample.id);
        }}
      >
        X
      </button>
    </li>
  ));

  const onChange = e => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const newContent = { id: generateID(), text: inputText };
    setSample([...sample, newContent]);
    console.log(sample);
  };

  const generateID = () => {
    return sample.length ? Math.max(...sample.map(item => item.id)) + 1 : 1;
  };

  const deleteBtn = id => {
    setSample(sample.filter(item => item.id !== id));
  };

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>Add</button>
      <ul>{sampleList}</ul>
    </>
  );
};

export default IterationSample;
