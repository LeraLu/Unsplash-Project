import React from 'react';
import './PicturesContainer.scss';
import { Pictures } from './Pictures';

export class PicturesContainer extends React.Component {

    render() {
        const imgsHolder = this.props.imgs.map(img => <Pictures {...img}/>);
        let className = 'holder'
        return <div className={className}>
            { imgsHolder }
        </div>
    }
}
