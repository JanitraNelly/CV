import './App.css'
import Profile from "./components/halaman1"
import Navi from "./components/navi"
import Pendidikan from './components/halaman2'
import Kemampuan from './components/halaman3'
import Project from './components/halaman4'
import Sertifikat from './components/halaman5'

import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'

import "./style/cv.css"

function App(){
    return(
       <div>
            <div className='myBG'>
                <Navi />
                <Profile />
            </div>
            <div className='pendidikan'>
                <Pendidikan />
            </div>
            <div className='kemampuan'>
                <Kemampuan />
            </div>
            <div className='project'>
                <Project />
            </div>
            <div className='sertifikat'>
                <Sertifikat />
            </div>
       </div>
    )
}

export default App