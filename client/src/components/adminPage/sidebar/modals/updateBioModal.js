import React from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom'; //needed for history.push()

class Modal1 extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: "",
      bio: ""
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
    const userInfo = { 
      name: this.state.name,
      bio: this.state.bio
    };
    /*
    http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/user/login
    http://localhost:9000/userInfo/
    */
    axios.post('https://mike.sollazzo.tk/api/userInfo/',(userInfo))
      .then((res) => {
        if(res.status === 200)
          this.props.history.push('/admin');
          //console.log(res.data)
      }).catch((error) => {
          console.log(error)
    })
  }   

  render() {
    console.log(this.state.name);
    console.log(this.state.bio);
    
    return(
      //This section of code was heavily influenced by bootstraps Modals
      <div className="modal fade bg-dark" id="UpdateBioModal" tableindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Info</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div className="modal-body">
              <form className="form-section" onSubmit={this.handleOnSubmit}>
                 <h4>Name:</h4>
                 <input  className="form-control"
                         name="name"
                         value={this.state.name}
                         onChange={this.handleOnChange}
                  />
                  <h4>Bio:</h4>
                 <textarea  className="form-control"
                            name="bio"
                            value={this.state.bio}
                            onChange={this.handleOnChange}
                  />
            <button type="submit" className="btn btn-primary">Save changes</button>
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

export default withRouter(Modal1);