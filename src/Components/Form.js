import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "Mortgage Term" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    alert("Mortgage Term: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
 
    render() { 
        return ( 
            <div className="mortgage-form">
                <form>
                    <label>Enter Mortgage Amount: </label>
                    <input/>
                </form>
                <div className="mortgage-term">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <span>Mortgage Term: </span> 
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="10-Year">10-Year</option> 
                                <option value="15-Year">15-Year</option>
                                <option value="20-Year">20-Year</option>
                                <option value="25-Year">25-Year</option>
                                <option value="30-Year">30-Year</option>
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
