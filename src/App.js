import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { Header, CarouselComponent, MovieDetail, Search } from "./components";

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" component={CarouselComponent} exact></Route>
        <Route
          path="/movie/:id"
          render={(props) => <MovieDetail {...props} isAuthed={true} />}
        ></Route>
        <Route path="/Search" component={Search}></Route>
      </Switch>
    </main>
  );
}
