import React from 'react';

function Article(props){
    const text = props.text;
    const title = props.title;

    const body = <section>{text}</section>
    return (
        <div>
            <h2>{title}
                <button onClick={handleClick} style={{marginLeft:"10px"}}>close</button>
            </h2>
            {body}
            <h3>creation date: {(new Date().toDateString())}</h3>
        </div>
    )
};

function handleClick(){
    console.log("click is work");
}

export default Article;