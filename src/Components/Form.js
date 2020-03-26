import React from 'react'


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
            <div>
                <form>
                    <label for="fname">Enter Mortgage Amount: </label>
                    <input/>
                </form>
                <div className="mb-2">
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
                    <input type="submit" value="Submit" />
                </form>
                </div>
            
            </div>
         );
    }
}
 
export default Form
