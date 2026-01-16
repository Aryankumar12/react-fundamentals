import Card from './Card';
import Footer from './Footer';
import Greeting from './Greeting';
import Header from './Header';

import React from 'react';
import { UserContext } from './context/UserContext';
function App() {

  const users = [
    { id: 1, firstName: "Aryan", lastName: "Kumar" },
    { id: 2, firstName: "Rahul", lastName: "Sharma" }
  ];

  return (

  <UserContext.Provider value ={users}>


<Header/>
<Greeting/>
<Card />
<Card />

<Footer/>
  </UserContext.Provider>
  )

}


export default App;