import 'whatwg-fetch'
import 'material-design-lite'

// the small amount of JS code
import './serviceworker-registration'
import github from './github'
import wakatime from './wakatime'

document.addEventListener('load', () => {
    github()
    wakatime()
})
