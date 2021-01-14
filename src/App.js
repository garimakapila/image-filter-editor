import './App.css';
import { useState } from 'react';

import Image from './Image/';
import Settings from './Settings/';

function App() {

	let defaultSettings = {
		brightness: 50,
		contrast: 50,
		saturate: 50,
		invert: 0,
		blur: 0,
	};

	let [ settings, setSettings ] = useState(defaultSettings);

	let [ image, setImage ] = useState({ })

	return (
		<div className="App">
			<div className="header">
				Image Filter Editor
			</div>
			<div className="table full-width">
				<div className="table-row">
					<div className="table-cell">
						<Image 
							image={ image }
							setImage={ setImage }
							settings={ settings }
						/>
					</div>
					<div className="table-cell settings-cell">
						<Settings 
							settings={ settings }
							setSettings={ setSettings }
							returnToDefault={ () => setSettings(defaultSettings) }
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
