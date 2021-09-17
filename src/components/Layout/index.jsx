import React from 'react';
import './Layout.css'
import Clock from '../clock'
import Article from '../Article'
function Layout({ children }) {

    return (
        <>
            <div className="container">
                <div className="row ">
                    <section className="column article">
                        <Article />
                    </section>
                    <section className="column clock-section">
                        <Clock />
                    </section>

                </div>
            </div>

        </>

    )
}

export default Layout;