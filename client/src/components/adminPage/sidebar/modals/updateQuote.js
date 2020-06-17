import React from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom'; //needed for history.push()

class Modal3 extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      quote: "",
  
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault();
    const quote = { 
      quote: this.state.quote,

    };
    /*
    http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/user/login
    http://localhost:9000/userInfo/
    */
    axios.post('https://mike.sollazzo.tk/api/quote/',(quote))
      .then((res) => {
        if(res.status === 200)
          this.props.history.push('/admin');
          //console.log(res.data)
      }).catch((error) => {
          console.log(error)
    })
  }   

  render() {

    console.log(this.state.quote);
    
    return(
      //This section of code was heavily influenced by bootstraps Modals
      <div className="modal fade bg-dark" id="UpdateQuote" tableindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Quote</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div className="modal-body">
              <form className="form-section" onSubmit={this.handleOnSubmit}>
                  <h4>Quote:</h4>
                 <textarea  className="form-control"
                            name="quote"
                            value={this.state.quote}
                            onChange={this.handleOnChange}
                  />
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  
    );
  }
}

export default withRouter(Modal3);