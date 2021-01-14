import './style.css';

function Slider(props) {

	let { label, min, max, value, onChange } = props;

	return (
		<div className="slider table-row">
			<div className="table-cell">
				<div className="label">
					{ label }
				</div>
			</div>
			<div className="table-cell">
				<input 
					type="range"
					min={ min }
					max={ max }
					value={ value } 
					onChange={ onChange }
				/>
			</div>
		</div>
	);
}

export default Slider;
