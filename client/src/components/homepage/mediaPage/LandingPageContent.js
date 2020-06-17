import React, { Component } from 'react'
import axios from 'axios';
import './LandingPageContent.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRandom, faJava} from '@fortawesome/free-solid-svg-icons'
import TypeIt from "typeit-react";


class LandingPageContent extends Component {
  constructor(props){
    super(props)
    //Hold state of image url
    this.state = {  
      img: '',
      name:'',
      bio:'',
      quote: ''
    };

    
    this.handleQuoteShuffle = this.handleQuoteShuffle.bind(this);
  };

  handleQuoteShuffle(e){
    e.preventDefault();
    axios.get('https://mike.sollazzo.tk/api/quote/', {
     
    })
    .then(response => {
      
      console.log(response.data.quote);
      
      this.setState({
        quote: response.data.quote,
        
      })
      
    })
    .catch(error => console.log(error.response)
    )   
  } 
  componentDidMount() {
/*
   http://localhost:9000/image
   http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/image
*/
    fetch('https://mike.sollazzo.tk/api/image/'   
    )      //Fetch most recently added image from database
      .then((res) => res.json())
      .then((data) => {
         // console.log(data[0].url);
          var imageURL = data[0].url;
          this.setState({
            img: imageURL
          })
        }
      )
/*
   http://localhost:9000/userInfo
   http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/userInfo
*/  
      axios.get('https://mike.sollazzo.tk/api/userInfo/', {
     
      })
      .then(response => {
        this.setState({
          name: response.data[0].name,
          bio: response.data[0].bio
        })
        
      })
      .catch(err => console.log(err))      
       
      axios.get('https://mike.sollazzo.tk/api/quote/', {
     
    })
    .then(response => {
      
      console.log(response.data.quote);
      
      this.setState({
        quote: response.data.quote,
        
      })
      
    })
    .catch(error => console.log(error.response)
    )   
  }
  render() {
    const {img} = this.state;
    console.log(this.state.quote);
    
    return (

      <div>
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-sm-8">
              <h5 className="landingName mb-0 display-4 pl-4">{this.state.name}</h5>
              <h3 className="landingName2 mb-0 pl-4">{this.state.bio}</h3>
              <div className="row text-center">
              <div className="col-md-12 align">
              <div className="row text-skills mt-4">
               
                <div className="col-sm-6">
                <h2 className="text-left text-light pl-3"><u>Skills</u></h2>
                  <div className="row mt-4 pt-2">
                    <div className="col-md-4">
                    <p className="icons"><i className="fab fa-java fa-4x "></i></p>
                    </div>
                    <div className="col-md-4">
                    <p className="icons"><i className="fab fa-html5 fa-4x"></i></p>
                    </div>
                    <div className="col-md-4">
                    <p className="icons"><i className="fab fa-js fa-4x "></i></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                    <p className="icons"><i className="fab fa-react fa-4x"></i></p>  
                    </div>
                    <div className="col-md-4">
                    <p className="icons"><i className="fab fa-css3 fa-4x"></i></p>
                    </div>
                    <div className="col-md-4">
                    <p className="icons"><i className="fab fa-git fa-4x"></i></p>
                    </div>
                  </div>                        
                </div>
                <div className="col-sm-6">
                <h2 className="custom-resume-mobile text-light"><u>Resume</u></h2>
                <a href="https://drive.google.com/file/d/1yAHiv7snDUPb_ENyg6qFcgKHN6F2mQ2s/view?usp=sharing" target="self"><i className="mt-4 resume-icon far fa-file-pdf fa-7x"></i></a>
                </div>  
              </div>     
              </div>
        </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="mask">
                <img className="profileImage shadow-lg" src={img} width="250px" height="250px" alt=""/> 
              </div>
              <div className="mt-3">
              {this.state.quote}
              </div>
                <button type="submit" className="random_btn btn py-0 px-0" onClick={this.handleQuoteShuffle}>
                  <FontAwesomeIcon icon={faRandom} size="2x" />
                </button>
            </div>
            <div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
            <h2 className="text-left text-light pl-3"><u>Projects</u></h2>
            </div>
          </div>
          <div className="row text-project my-4">
           <div className="col-md-4">
          <a href="https://ratemydorm.418y.tk/" target="_blank">   
           <div className="text-block text-center">
            <h4>Rate My Dorm</h4>
            <p>A web application made for UAlbany students where students can leave a review about their dorm expierence.</p>
           </div>
          </a> 
          </div> 
           <div className="col-md-4">
          <a href="https://github.com/sollazzo08/misty-albany-499/" target="_blank">
           <div className="text-block text-center">
            <h4>Misty II</h4>
            <p>Programmed Misty II Robot and designed a UI.</p>
           </div>
          </a>
          </div> 
           <div className="col-md-3">
          <a href="https://mike.sollazzo.tk" target="_blank">
           <div className="text-block text-center">
            <h4>SE Term Project</h4>
            <p>MERN stack application/portfolio which you are currently looking at.</p>
           </div>
          </a>
          </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPageContent;