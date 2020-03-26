import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './Form.css'
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    
    showCheckboxes = () => {
        let expanded = false;
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
        }
    }
 
    render() { 
        return ( 
            <div>
                <form>
                    <label for="fname">Enter Mortgage Amount: </label>
                    <input/>
                </form>
                <div className="mb-2">
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
                </div>
            
            </div>
         );
    }
}
 
export default Form
