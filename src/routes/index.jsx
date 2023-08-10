import React, { useState, useEffect } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import SignUp from "../components/signup";
// import { Signup } from "components";

const Routes = () => {
  const [routeList, setRouteList] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const list = [<Route exact path="/signup" render={() => <SignUp />} />];
      setRouteList([...list]);
      console.log(list);
    };
    fetchMenu();
  }, []);
  return (
    <Switch>
      {routeList.map((v, index) => {
        const newE = React.cloneElement(v, {
          key: index,
        });
        return newE;
      })}
    </Switch>
  );
};

export default Routes;
