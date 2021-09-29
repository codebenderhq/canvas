import AppLayout  from './_app';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


const App = ({children}) => {
  return(
    <AppLayout>{children}</AppLayout>
  )

}
 

export default App