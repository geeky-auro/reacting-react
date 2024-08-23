import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const anotherElement=(
    <a href="https://google.com" target="_blank">Visit Google</a>
)
const username="Chai aiur Code";

const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blank'},
    'Click here to visit google',
    username
)

createRoot(document.getElementById('root')).render(
    reactElement
)
