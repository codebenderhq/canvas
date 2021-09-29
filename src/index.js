import ReactDOM from 'react-dom'
import Splash from './components/splash'
// import App from './components/app'
 

const App = (El) => {
    ReactDOM.render(<El></El>, document.getElementById("app"))
}
 

export default {App, Splash};