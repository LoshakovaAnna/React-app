import React from 'react';
import Article from '../Article';
import './style.css';

export default function  ArticlesList({ articles}){
const articleElements = articles.map(obj => 
        <li className="article-list__li" key = {obj.id}><Article art = {obj} /></li>
    )
    return (
        <ul>
            {articleElements}
        </ul>
    )
};