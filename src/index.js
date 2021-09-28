import ReactDOM from 'react-dom'
import Splash from './components/splash'


const app = (El) => {
    ReactDOM.render(<El></El>, document.getElementById("app"))
}
 

const canvas = {app, Splash}

export default canvas;