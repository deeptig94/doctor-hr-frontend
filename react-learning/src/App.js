
import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

var styles = {
    "dataStyle": {
    "marginTop": "10px",
    "marginLeft": "20px",
    "marginBottom": "30px"
    }

}

const url="http://127.0.0.1:5000/api/heart_rate";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
  	    "heart_rate": [null],
	    };
	}

    onEmailTextFieldChange = (event) => {
        this.setState({"EmailTextField": event.target.value});
	}

    onButtonClick = (event) => {
        console.log(this.state.EmailTextField);
	}

    getData = () => {
	var email = this.state.EmailTextField
	var url_full = url.concat(email)
	var data = []
	var final_data = []

	axios.get(url_full).then( (response) => {
      	
	    data.push({
	         "heart_rate": response.data.heart_rate,
		});
 	
			
	
	    var final_Data = ["Heart Rate: ", data.heart_rate];
	    final_data.push(final_Data)
	    

   	    this.setState({
		"heart_rate": final_data,		
		});
		console.log(this.state.heart_rate)
	 })
			
    }			
	

render() {
    return (
        <div style={styles.dataStyle}>	
  	    <div>
	        Enter your email address: <TextField
		    value={this.state.EmailTextField}
		        onChange={this.onEmailTextFieldChange}/>
	        <div> 
 	            <Button onClick={this.getData}>
 		        Click here to get your heart rate data
		    </Button>
    	        </div>
	    </div>
  		    Heart Rates:
			{this.state.final_data}
	    </div>
	);
	}	
}


export default App;