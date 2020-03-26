import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            term: 0, 
            value: 0
        }
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ term: event.target.term });
  //   }

  handleSubmit(event) {
    alert(this.state.term + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
      console.log(event.target.value)
    this.setState({ term: event.target.value });
  };

  handleMortgage = event => {
      console.log(event.target.value)
      this.setState({
        value: event.target.value
      })
  }
 
    render() { 
        return ( 
            <div className="mortgage-form">
                <form>
                    <label type="number">Enter Mortgage Amount: </label>
                    <input onChange={this.handleMortgage}/>
                </form>
                <div className="mortgage-term">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <span>Mortgage Term: </span> 
                            <select value={this.state.term} onChange={this.handleChange}>
                                <option value="10">10-Year</option> 
                                <option value="15">15-Year</option>
                                <option value="20">20-Year</option>
                                <option value="25">25-Year</option>
                                <option value="30">30-Year</option>
                            </select>
                        </label>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <div>
                    <h4>The monthly estimate is: </h4>
                </div>
            </div>
         );
    }
}
 
export default Form
