import React from 'react';
import './Pictures.scss';
import heart from './assets/img/heart.png';

export const Pictures = ({imgUrl, likes, userName, title}) => (
    <div className="pictures">
        <img src={imgUrl} className="pictures__img" />
        <div className="pictures__like">
            <img src={heart} className= 'pictures__like__img'/>
            {likes}
        </div>
        <span className="pictures__name">{userName}</span>
        <span className="pictures__title">{title}</span>
    </div> 
)