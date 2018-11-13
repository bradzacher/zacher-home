import * as ReactDOM from 'react-dom'

import App from '../components/App'
import { APP_ROOT_ID } from '../config'

ReactDOM.hydrate(App, document.getElementById(APP_ROOT_ID))
