import React from 'react';
import { GridItem } from './GridItem';
import './Grid.scss';

export const Grid = ({items}) => {
    return <div className="grid">
    {items.map (item => <GridItem key={item.id} imgUrl={item.urls.regular}/>)}
    </div>
}