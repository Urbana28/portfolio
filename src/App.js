import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import DistantWork from "./components/DistantWork/DistantWork";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills/>
      <Works/>
      {/*<DistantWork/>*/}
      <Contacts/>
      <Footer/>


    </div>
  );
}

export default App;
