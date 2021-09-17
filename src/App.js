import React from 'react';
import './App.css';

import Layout from './components/Layout';
import Clock from './components/clock'

function App() {
 
  return (
    <div className="App">
        <Layout>
        <article>
                    <h1>Comunicado</h1>
                    <p>Nunc a nulla nec odio eleifend lobortis nec id lacus. Fusce bibendum elementum magna
                         ornare vestibulum. 
                        Aenean non orci condimentum, efficitur nulla at, rhoncus lacus.</p>
                
                </article>
          <Clock />
         
        </Layout>

    </div>
  );
}

export default App;
