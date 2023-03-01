import React, { Component } from 'react'
//import 798553f95cc545bebe69932632d222df
export default class 
 extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props
    return (
      <div className='my-3'>
        <div className="card">
        <img src={!imageUrl?"https://kubrick.htvapps.com/vidthumb/b5eb9b3b-e373-4b17-b849-215133339cb4/b5eb9b3b-e373-4b17-b849-215133339cb4_image.  jpg?crop=0.786xw:0.786xh;0,0&resize=1200:*":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}
