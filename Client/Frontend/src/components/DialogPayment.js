import React, { Component } from 'react'

class DialogPayment extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        startLocation:this.props.location.state.detail.startLocation,
        endLocation:this.props.location.state.detail.endLocation,
        startTime:this.props.location.state.detail.startTime,
        price : this.props.location.state.detail.price,
        tickets:this.props.location.state.detail.tickets,
        nic:this.props.location.state.detail.nic,
        pinNumber : '',
        pnumber : ''

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
    const { pinNumber, pnumber } = this.state;
    return (
        <div className="container">
        <div className="panel panel-default">
            <div className="panel-heading">
            <button type="submit" className="btn btn-outline-danger btn float-right" onClick={this.logOutButtonHandler}>Logout</button>
                <h3 className="panel-title">
                    Dialog Payment
                </h3>
            </div>
            <div className="panel-body">
            <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                    <label>Phone number :</label>
                    <input type='text' id="validationCustom01" className="form-control" name="pnumber" value={pnumber} onChange={this.changeHandler} placeholder="Enter Phone Number" />
                </div>
                <div className="form-group">
                    <label>Pin number </label>
                    <input type='text' className="form-control" name="pinNumber" value={pinNumber} onChange={this.changeHandler} placeholder="Enter PIN Number" />
                </div>
                <button type="submit" className="btn btn btn-outline-success registerBtn">Pay</button>
            </form>
            </div>
        </div>
    </div>
    )
  }
}

export default DialogPayment
