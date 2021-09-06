import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import Header from "components/Header";
import LoginPage from "components/LoginPage";
import TopicPage from "components/TopicPage";
import Footer from "components/Footer";
import SignUpPage from "components/SignUpPage";

function App() {
  const isLoggedIn = useStoreState((state) => state.auth.isLoggedIn);

  return (
    <div>
      <Header />
      <Switch>
        {!isLoggedIn && (
          <>
            <Route exact path="/login" component={LoginPage} />
            <Redirect to="/login" />
          </>
        )}
        {/* {!isLoggedIn && (
          <>
            <Route exact path="/sign-up" component={SignUpPage} />
            <Redirect to="/sign-up" />
          </>
        )} */}
        {isLoggedIn && (
          <>
            <Route exact path="/welcome" component={TopicPage} />
            <Redirect to="/welcome" />
          </>
        )}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
