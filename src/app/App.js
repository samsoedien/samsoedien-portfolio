import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';

import store from '../store/store';
import theme from '../theme/theme';
// import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import ContactFormContainer from './containers/ContactFormContainer';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="app">
          {/* <Header /> */}
          <main>
            <h1>About</h1>
            <h1>Projects</h1>
            <h1>Photography</h1>
            <h1>Blogs</h1>
            <h1>Contact</h1>
            <ContactFormContainer />
          </main>
          <Footer />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
