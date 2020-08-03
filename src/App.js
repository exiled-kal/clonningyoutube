import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import SearchPage from './SearchPage';
import RecommendedVideos from './RecommendedVideos';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <SideBar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
