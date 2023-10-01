import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const anotherElement = (
    <a href="https//google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https//google.com', target: '_blank'},
    'click Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
