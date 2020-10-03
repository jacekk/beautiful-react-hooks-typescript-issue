import React from 'react';
import './App.css';
import { useGlobalEvent } from 'beautiful-react-hooks';

function App() {
	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
	const onWindowResize = useGlobalEvent('resize');

	onWindowResize(() => {
		setWindowWidth(window.innerWidth);
	});

	return (
		<div className="App">
			<pre>{JSON.stringify({ windowWidth }, null, 4)}</pre>
		</div>
	);
}

export default App;
