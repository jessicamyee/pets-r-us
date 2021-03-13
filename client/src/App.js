import React, { useState, useEffect } from "react";
import Home from "./screens/Home/Home";
import AllPets from "./screens/AllPets/AllPets";
import CreatePet from "./screens/CreatePet/CreatePet";
import EditPet from "./screens/EditPet/EditPet";
import PetDetail from "./screens/PetDetails/PetDetail";
import MyPets from "./screens/MyPets/MyPets";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";

const App = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);

  return (
    <div className="app-section">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/pets">
          <AllPets user={user} />
        </Route>
        <Route path="/add-pet">
          {user ? <CreatePet user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/pets/:id/edit">
          {user ? <EditPet user={user} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/pets/:id">
          <PetDetail user={user} />
        </Route>
        <Route exact path="/users/:id">
          <MyPets user={user} userId={userId} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
