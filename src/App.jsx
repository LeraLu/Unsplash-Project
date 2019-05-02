import React, { Component } from 'react';
import './App.scss';
import { SearchForm } from './components/searchForm';
import { TagsNavbar } from './components/tagsNavbar';
import { Grid } from './components/grid';


class App extends Component {

  state = {
    images:[],
    total: 0,
    totalPages: 0,
    currentPage: 1,
    searchValue: '',
    tags:[],
    title: '',
  }

  tagClick = (title) => {

    const url = `https://api.unsplash.com/search/photos?page=${this.state.currenPage}&query=${title}&client_id=061b19c8e58f5bcbae7010e50fa0587bc28929aa109e9eb1b7adf162f31dba59`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        const totalPages = response.total_pages;
        const total = response.total;
        const images = response.results;
        const tags = this.state.tags.concat(response.results[0].tags.slice(10,));
        
        console.log(response.results);
        

        this.setState(state => {
          return {...state, images, totalPages, total, tags, title}
        })
      })
      .catch((e) => console.log(e));
  }

  showMore = () => {
    const {searchValue, currentPage} = this.state;
    const url = `https://api.unsplash.com/search/photos?page=${currentPage + 1}&query=${searchValue}&client_id=061b19c8e58f5bcbae7010e50fa0587bc28929aa109e9eb1b7adf162f31dba59`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const totalPages = response.total_pages;
        const total = response.total;
        const images = this.state.images.concat(response.results);

        this.setState(state => {
          return {...state, images, totalPages, total, searchValue, currentPage: currentPage + 1}
        })
      })
      .catch((e) => console.log(e));
  }

  search = (searchValue) => {
    const url = `https://api.unsplash.com/search/photos?page=${this.state.currenPage}&query=${searchValue}&client_id=061b19c8e58f5bcbae7010e50fa0587bc28929aa109e9eb1b7adf162f31dba59`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        const totalPages = response.total_pages;
        const total = response.total;
        const images = response.results;
        const tags = this.state.tags.concat(response.results[0].tags.slice(10,));
        
        console.log(response.results);
        

        this.setState(state => {
          return {...state, images, totalPages, total, tags, searchValue}
        })
      })
      .catch((e) => console.log(e));
  }

  render() {


    const picsTags = this.state.tags.map(tag =>{
      return <TagsNavbar title={tag.title} onTagClick={this.tagClick}/>
    })

    return (
      <div className="App">
        <SearchForm onSubmit={this.search}/>
        <div className="tags-navbar"><div className="tags-navbar__holder">{ picsTags }</div></div>
        <Grid items={this.state.images} />
        {
          (this.state.total !== 0)
          ? <div className='button_block_container'><button className='button_block_container__btn' onClick={this.showMore}>Show more</button></div>
          : null
        }
        <div className='total_block_container'>
          <div className='total_block_container__item'> Total Items: {this.state.total} </div>
          <div className='total_block_container__item'> Total Pages: {this.state.totalPages} </div>
        </div>
      </div>
    );
  }
}

export default App;
