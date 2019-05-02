import React from 'react';
import './TagsNavbar.scss';


export class TagsNavbar extends React.PureComponent {
    state = {
        title: '',
    };

    onTagClick = (e) => {
        e.preventDefault();
        if (this.props.title){
            this.props.onTagClick(this.props.title);
        }
    }

    render() {
        return <nav className="tags-navbar__holder__items">
        <a 
        key='1'
        onClick={this.onTagClick}
        href='' 
        className="tags-navbar__holder__items__item" 
        value={this.props.title}>
        

            { this.props.title }
            
        </a>
    </nav>
    }
} 



