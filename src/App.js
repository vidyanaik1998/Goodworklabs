import React, { useState } from 'react';
import Flexi from './component/Flexi';

const App = () => {
  const initialdata = {
    items: [
      {
        name: 'person_name',
        label: "Person's Name",
        type: 'TextField',
      },
      {
        name: 'states',
        label: "Person's state",
        type: 'DropDown',
        values: ['Maharashtra', 'Kerala', 'Tamil Nadu'],
      },
    ],
  };

  const [flexiConfig , setflexiConfig] = useState(initialdata.items)
  const onFlexiSubmit = data => {
    console.log('Submitted Data:', data,flexiConfig);
    setflexiConfig([...flexiConfig , {name:data.person_name , values:data.states}])
  };
  return <Flexi onSubmit={onFlexiSubmit} config={flexiConfig} />;
};

export default App;
