import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CompatRouter } from "react-router-dom-v5-compat";
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Room from './components/ChatRoomComponents/RoomPage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <CompatRouter>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/room' exact component={Room} />
        </Switch>
        <Footer />
      </CompatRouter>
    </Router>
  );
}

export default App;
