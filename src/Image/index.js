import './style.css';
import example from '../example.png';
import { useState } from 'react';

function Image(props) {

	let { settings } = props;

	let [ file, setFile ] = useState("");

	let settingsToStyle = () => {
		return {
			filter: "blur(" + settings.blur / 20 + "px) " + 
					"brightness(" + settings.brightness / 50 + ") " + 
					"contrast(" + settings.contrast * 2 + "%) " + 
					"saturate(" + settings.saturate * 2 + "%) " + 
					"invert(" + settings.invert + "%)"
		};
	};

	return (
		<div className="image centered">
	        <input 
	        	type="file"
	        	accept="image/*" 
	        	onChange={ e => {
	        		try {
		    			setFile(URL.createObjectURL(e.target.files[0]))
	        		}
	        		catch(error) {

	        		}
	        	} }
	        />
	        <div className="input button">
	        	Select Image
	        </div>
	        <div 
	        	className="sample button"
	        	onClick={ e => setFile(example) }
	        >
	        	Example
	        </div>
	        <div className="container">
	        	{ 
	        		file !== "" && 
			        <img 
			        	src={ file }
			        	style={ settingsToStyle() }
			        	alt=""
			        />
			    }
			    {
			    	file === "" &&
			    	<div></div>
			    }
	        </div>
		</div>
	);

}

export default Image;