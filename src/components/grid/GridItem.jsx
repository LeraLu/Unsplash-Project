import React from 'react';
import './GridItem.scss';

export class GridItem extends React.Component {
    imgRef = React.createRef();
    divRef = React.createRef();
    state = {
        clientHeight: 0
    };

    onImageLoad = () => {
        const {clientHeight} = this.imgRef.current;
        this.setState(state => ({...state,clientHeight}))
    };

    componentDidMount() {
        console.log(this.imgRef.current.clientHeight);
        this.imgRef.current.addEventListener('load', this.onImageLoad);
    }

    componentWillUnmount() {
        this.imgRef.current.removeEventListener('load', this.onImageLoad);
    }

    calcSpans = () => {
        const spans = Math.ceil(this.state.clientHeight / 10);
        return `span ${spans}`;
    };

    render() {
        const {imgUrl} = this.props;
        return <div style={{gridRowEnd: this.calcSpans()}} ref={this.divRef} className="grid-item">
            <img ref={this.imgRef} src={imgUrl} alt=""/>
        </div>
    }
}

