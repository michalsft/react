import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Video from './Video';

const FourOhFour = () => <h1>404</h1>;

const App = () => {
  let x = 5;
  let y = 10;
  x += y;
  y = 10 + x;
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={Search} />
          <Route path="/video" component={Video} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('app'));

/*
const MyTitle = function(props) {
  // return ce(
  //   'div',
  //   null,
  //   ce('h1', { style: { color: props.color } }, props.title)
  // );
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponenet = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="YellowGreen" />
      <MyTitle title="Stranger Things" color="GreenYellow" />
      <MyTitle title="Rick and Morty" color="LimeGreen" />
      <MyTitle title="Silicone Valley 19" color="peru" />
    </div>
  );
};

render(<MyFirstComponenet />, document.getElementById('app'));
*/
