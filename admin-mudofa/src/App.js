
import { Switch, Route, Redirect } from "react-router-dom";
import Product from "./pages/Product";

import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import Company from './pages/Company.js'
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
// Mutahasis_time
// Xususiyat
function App() {
  return (
    <div className="App">
      <Switch>
         {!sessionStorage.getItem("token")?(
          <>
           <Route path= "/sign-in" exact component={SignIn} />
           <Redirect from="/sign-in" to="/sign-in" />
          </>):(
        <Main>
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Company" component={Company} />
       
        </Main>
        )}
      </Switch>
    </div>
  );
}

export default App;
