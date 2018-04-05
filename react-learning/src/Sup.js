
import React from 'react';

const default_color = "black";



var styles = {

	"dataStyle": {

		"marginTop": "10px",
		"marginLeft": "10px",
		"marginBottom": "100px",
	}
}


class Sup extends React.Component {
	render() {

		var color = this.props.color;
		if (color === undefined) {
			color = default_color;
		}

		return (
		<div style={styles.dataStyle}>
			Heart Rate {this.props.name}

			<div>
				Enter your email ID here:
 			</div>
		</div>
		);
	}
}

export default Sup;