import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
  
    constructor(props){
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title = `${this.props.category} - NewsApp`
    }

    async updateNews(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=798553f95cc545bebe69932632d222df&page=${this.state.page}&pagesize=${this.props.pageSize}`
      this.setState({loading: true})
      let data = await fetch(url)
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
        })
    }

    async componentDidMount(){ 
      console.log("news")                                                         //Life cycle method
      this.updateNews();
    }

    handlePrevClick = async ()=>{
        this.setState({page: this.state.page-1});
        this.updateNews();
    }

    handleNextClick = async ()=>{
        this.setState({page: this.state.page+1});
        this.updateNews();
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{margin: '35px 0px'}}>NewsApp - Top Headlines From {this.props.category} category</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {/* {console.log(this.state.articles)} */}
        {!this.state?.loading && this.state?.articles.map((element)=>{
         
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
                imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
            })}
        </div>
        <dib className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </dib>
      </div>
    )
  }
}
