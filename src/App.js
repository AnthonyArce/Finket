import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

function App() {


  return (
    <Router basename="/Fintek/">
      <Header name="FINTEK"/>
        <Switch>
         {routes.map(route => (
           <Route
              key={route.path}
              path={route.path}
              component={route.component}
           /> 
         ))}

        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
