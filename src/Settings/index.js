import './style.css';
import Slider from '../Slider/';

function Settings(props) {

	let { settings, setSettings, returnToDefault } = props;

	return (
		<div className="settings">
			<div className="table">
			{
				Object.keys(settings).map((setting, index) =>
					<Slider 
						key={ index }
						label={ setting }
						value={ settings[setting] }
						onChange={ e => 
							setSettings({ ...settings, [setting]: e.target.value }) 
						}
						min="0"
						max="100"
					/>
				)
			}
			</div>
			<div 
				className="button"
				onClick={ returnToDefault }
			>
				Revert to Original
			</div>
		</div>
	);
}

export default Settings;
