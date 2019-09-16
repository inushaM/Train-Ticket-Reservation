import React, { Component } from 'react'
import axios from 'axios'
import constant from '../service/constant';

class AddTicket extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        // detail:this.props.location.state.detail
        startLocation:this.props.location.state.detail.startLocation,
        endLocation:this.props.location.state.detail.endLocation,
        startTime:this.props.location.state.detail.startTime,
        price : this.props.location.state.detail.price,
        tickets:'',
        nic:''
      }
    }

    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value })
  }
  submitHandler = (e) => {
    e.preventDefault()
    const{nic , price , tickets} = this.state
    console.log(this.state)
    axios.post(constant()+'/checknic/'+nic)
    .then(response => {
        console.log(response)
        if(response.data === 'valid' && tickets != '' ){
          this.setState({ 
            price: (price - (price * 0.1))
            
          })
          
          this.props.history.push({
            pathname : '/TotalPrice',
            state: { detail: this.state }
            } 
          );
        }else{

        }
        
    })
    .catch(error => {
        console.log(error)
    })

    if(nic == '' && tickets != ''){
      this.props.history.push({
        pathname : '/TotalPrice',
        state: { detail: this.state }
        } 
      ); 
    }

  }

  logOutButtonHandler = () => {
    this.props.history.push("/")
}
    


  render() {
    return (
    <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
          <button type="submit" className="btn btn-outline-danger btn float-right" onClick={this.logOutButtonHandler}>Logout</button>
            <h3 className="panel-title header1">
              Train details
            </h3>
          </div>
          <div className="panel-body">
            {/* <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4> */}
            <table className="table table1">
            
            <tr className="tableRow1">
              <th className="th1">Start Location:</th>
              <td className="td1">{this.state.startLocation}</td>
            </tr>
            
            
            <tr>
              <th className="th1">End Location:</th>
              <td className="td1">{this.state.endLocation}</td>
            </tr>
            
            <tr>
              <th className="th1">Start Time:</th>
              <td className="td1">{this.state.startTime}</td>
            </tr>
           
            <tr>
              <th className="th1">Price:</th>
              <td className="td1">{this.state.price}</td>
            </tr>
          
            </table>
            <form onSubmit={this.submitHandler}>
            <div className="form-group">
                <label className="lable1">Enter Number Of Tickets:</label>
                <input type="text" className="form-control input1" name="tickets" value={this.state.tickets} onChange={this.changeHandler} placeholder="Enter ticket " />
                <div class="valid-feedback">
                  Looks good!
                 </div>
            </div>
            <div className="form-group">
                <label className="lable1">If you are Government Employee,Enter NIC:</label>
                <input type="text" className="form-control input1" name="nic" value={this.state.nic} onChange={this.changeHandler} placeholder="Enter NIC " />
            </div>
            <div className="button1Div">
              <button type="submit" className="btn btn-outline-primary">Book The Train</button>
            </div>
            </form>
            {/* <Link to={`/edit/${this.state.contact.id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.contact.id)} class="btn btn-danger">Delete</button> */}
          </div>
        </div>
      </div>
    )
  }
}

export default AddTicket
