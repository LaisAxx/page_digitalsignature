import React from 'react';
import {Icon} from '@iconify/react';
import "./Article.css"

function Article() {
    return (
        <article className="content-article">
            <Icon className="icon" icon="fluent:chat-warning-24-regular" color="#FF9900" height="20%" />
            <h1 id="title">Comunicado</h1>
            <hr />
            <p>Nunc a nulla nec odio eleifend lobortis nec id lacus. Fusce bibendum elementum magna
                ornare vestibulum.
                Aenean non orci condimentum, efficitur nulla at, rhoncus lacus.</p>

        </article>
    )
}

export default Article;