import { createRoot } from 'react-dom/client'
import { MDXProvider } from '@mdx-js/react'
import './main.scss'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/reducer/store.js'

const components = {
    a: (props) => (
        <a {...props} target="_blank" rel="noopener noreferrer">
            {props.children}
        </a>
    ),
}

createRoot(document.getElementById('root')).render(
    <MDXProvider components={components}>
        <Provider store={store}>
            <App />
        </Provider>
    </MDXProvider>
)


// import { Provider } from 'react-redux'
// import store from './components/HomePage/Caroudel-noSlick/store'

// <Provider store={store}>
//   <StrictMode>
// {/* </StrictMode>
//   </Provider> */}