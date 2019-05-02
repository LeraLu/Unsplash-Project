import React from 'react';
import { Field } from '../field';
import './SearchForm.scss';

export class SearchForm extends React.Component {
    state = {
        searchValue: '',
    };
    onChange = (searchValue) => {
        this.setState((state) => ( {...state, searchValue} ) );
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchValue) {
            this.props.onSubmit(this.state.searchValue);
        }
    };
    render() {
        return <div className='search-form__container'>
            <form onSubmit={this.onSubmit}>
                <Field
                    value={this.state.searchValue}
                    placeholder="What do you want to see?"
                    onChange={this.onChange} />
            </form>
        </div>
    }
}
