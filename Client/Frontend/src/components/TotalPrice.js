import React, { Component } from 'react'

 class TotalPrice extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        startLocation:this.props.location.state.detail.startLocation,
        endLocation:this.props.location.state.detail.endLocation,
        startTime:this.props.location.state.detail.startTime,
        price : this.props.location.state.detail.price,
        tickets:this.props.location.state.detail.tickets,
        nic:this.props.location.state.detail.nic,
        totalPrice:''
      }
    }

    cashPayButtonHandler = (e) => {
      e.preventDefault()
      this.props.history.push({
          pathname : '/CashPayment',
          state: { detail: this.state }
          } 
        );
    }

    dialogPayButtonHandler = (e) => {
      e.preventDefault()
      this.props.history.push({
          pathname : '/DialogPayment',
          state: { detail: this.state }
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
        <button type="submit" className="btn btn-outline-danger btn float-right" onClick={this.logOutButtonHandler}>Logout</button>
          <h3 className="panel-title header1">
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
            <th className="th1"><h3>Total Price:</h3></th>
            <td className="table1Td"><h4>Rs.{price * tickets}</h4></td>
          </tr>
        
          </table>
          <form>
          <label className="lable2">Payment Method:</label>
          <div className="button1Div">
            <button type="submit" className="btn btn-outline-primary sampathBankBtn" onClick={this.cashPayButtonHandler}>Sampath Bank</button>
            <button type="submit" className="btn btn-outline-primary dialogBtn" onClick={this.dialogPayButtonHandler}>Dialog</button>
          </div>
          </form>
        </div>
      </div>
      </div>
    )
  }
}

export default TotalPrice
