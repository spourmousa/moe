import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TopNav from '../TopNav/TopNav';
import LeftNav from '../LeftNav/LeftNav';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <TopNav />
        <LeftNav />
        <main>
          Main content goes here ...
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
