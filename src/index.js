// const element = document.createElement('h1')

// element.innerText = 'Hello ,platzi Bages'

// const container = document.getElementById('app')


// container.appendChild(element)

import React from 'react'
import ReactDom from 'react-dom'

const element = <h1>Hello Platzi Badges from React!</h1>

const container = document.getElementById('app')

// ReactDom.render(__qué,____Donde_____)
ReactDom.render(element, container)
