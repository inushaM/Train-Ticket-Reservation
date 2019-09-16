import React, { Component } from 'react'

class FinalView extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        startLocation:this.props.location.state.detail.startLocation,
        endLocation:this.props.location.state.detail.endLocation,
        startTime:this.props.location.state.detail.startTime,
        price : this.props.location.state.detail.price,
        tickets:this.props.location.state.detail.tickets,
        nic:this.props.location.state.detail.nic
      }
    }

     
    backButtonHandler = (e) => {
        e.preventDefault()
        this.props.history.push({
            pathname : '/App',
            } 
          );
      }

      logOutButtonHandler = () => {
        this.props.history.push("/")
    }
    
  render() {
    const {price, tickets } = this.state;
    return (
        <div className="container">
        <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title header1">
          <button type="submit" className="btn btn-outline-danger btn float-right" onClick={this.logOutButtonHandler}>Logout</button>
            Booking details
          </h3>
        </div>
        <div className="panel-body">
          <table className="table table1">
          
          <tr>
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
            <th className="th1">Nic No:</th>
            <td className="td1">{this.state.nic}</td>
          </tr>
         
          <tr>
            <th className="th1"><h3>Total Pice:</h3></th>
            <td className="td1"><h4>Rs.{price * tickets}</h4></td>
          </tr>
        
          </table>
          <form>
            <br/>
            <div class="alert alert-success" role="alert">
                Payment success!, Thank you for booking.
            </div>
          <div className="button1Div">
            <button type="submit" className="btn btn-outline-primary sampathBankBtn" onClick={this.backButtonHandler}>Back To Find</button>
          </div>
          </form>
        </div>
      </div>
      </div>
    )
  }
}

export default FinalView
