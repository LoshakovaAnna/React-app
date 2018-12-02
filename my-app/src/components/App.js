import React from 'react';
import Article from './Article';

function App(props){
    const nameApp = props.nameApp;
    return(
        <div>
            <h1>{nameApp}</h1>
            <Article text="передаю текст" title="new title"  />
        </div>
    )
};

export default App;