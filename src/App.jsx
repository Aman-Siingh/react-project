
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import page1 from "./page1"
import page2 from './page2';
import NavigationBar from './components/navbar';


const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/page1" exact component={page1} />
          <Route path="/page2" exact component={page2} />
        </Switch>
      </div>
    </Router>
  );
};

export default App