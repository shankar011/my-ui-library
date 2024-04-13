import React from 'react';
import "./App.css"
import Header from './component/Header';
import Notes from './component/Notes';


const App = () => {
    return (
        <div className='main'>
           
                <Header />
                <Notes />
            

        </div>
    )
}

export default App