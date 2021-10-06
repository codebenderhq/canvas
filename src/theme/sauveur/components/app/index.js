import AppLayout from "./_app";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainApp = ({ children }) => {
  return (
 
      <Router>

        <nav>
          <ul>
          {children.map((i, k) => {

            if(i.props){
              return(<li key={i.props.name}><Link to={i.props.name}>{i.props.name}</Link></li>)
            }
       
        })}
          </ul>
   
        </nav>
   

        <Switch>
          {children.map((i, k) => {

            if(i.props){
        
              return (<Route key={i.props.name} path={`/${i.props.name}`}>{children[k]}</Route>);
            }

          })}
        </Switch>
        
      </Router>
 
  );
};

export default MainApp;