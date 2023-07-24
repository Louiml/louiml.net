import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import NotFoundPage from './components/NotFoundPage';
import './App.css'; 

const App = () => (
  <Router>
    <div className="site">
      <ThemeProvider>
        <div id="content">
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/services" exact component={ServicesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  </Router>
);

export default App;
