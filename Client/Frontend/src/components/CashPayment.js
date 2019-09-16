import React, { Component } from 'react'

class CashPayment extends Component {
     
    constructor(props) {
      super(props)
    
      this.state = {
        startLocation:this.props.location.state.detail.startLocation,
        endLocation:this.props.location.state.detail.endLocation,
        startTime:this.props.location.state.detail.startTime,
        price : this.props.location.state.detail.price,
        tickets:this.props.location.state.detail.tickets,
        nic:this.props.location.state.detail.nic,
        cnumber:'',
        CVVNumber:'',
        cardType:'',
        cExpires:'',
        username:'',
        phone:''

      }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.history.push({
            pathname : '/FinalView',
            state: { detail: this.state }
            } 
          );
      }

      logOutButtonHandler = () => {
        this.props.history.push("/")
    }
    
  render() {
    const { cnumber, CVVNumber, cardType , cExpires , username , phone} = this.state;
    return (
        <div className="container">
        <div className="panel panel-default">
            <div className="panel-heading">
            <button type="submit" className="btn btn-outline-danger btn float-right" onClick={this.logOutButtonHandler}>Logout</button>
                <h3 className="panel-title">
                    Cash Payment
                </h3>
            </div>
            <div className="panel-body">
            <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                    <label>Card Number :</label>
                    <input type='text' id="validationCustom01" className="form-control" name="cnumber" value={cnumber} onChange={this.changeHandler} placeholder="Enter Card Number" />
                </div>
                <div className="form-group">
                    <label>CVV Number </label>
                    <input type='text' className="form-control" name="CVVNumber" value={CVVNumber} onChange={this.changeHandler} placeholder="Enter CVV Number" />
                </div>
                <div className="form-group">
                    <label>Card Type :</label>
                    <input type='text' className="form-control" name="cardType" value={cardType} onChange={this.changeHandler} placeholder="Enter Card Type" />
                </div>
                <div className="form-group">
                    <label>Card Expires on :</label>
                    <input type='month' className="form-control" name="cExpires" value={cExpires} onChange={this.changeHandler} placeholder="Enter Card Expires" />
                </div>
                <div className="form-group">
                    <label>User Name : </label>
                    <input type='text' className="form-control" name="username" value={username} onChange={this.changeHandler} placeholder="Enter User Name" />
                </div>
                <div className="form-group">
                    <label>Phone :</label>
                    <input type='number' className="form-control" name="phone" value={phone} onChange={this.changeHandler} placeholder="Enter Phone Number" />
                </div>
                <button type="submit" className="btn btn btn-outline-success registerBtn">Pay</button>
            </form>
            </div>
        </div>
    </div>
    )
  }
}

export default CashPayment
