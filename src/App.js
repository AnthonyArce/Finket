import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routes from './routers';




function App() {
  return (
    <Router>
      <Header name="FINTECH"/>
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
