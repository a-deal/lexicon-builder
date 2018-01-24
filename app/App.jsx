import React from 'react';

import WordEntry from './components/WordEntry';
import DefinitionEntry from './components/DefinitionEntry';

class App extends React.Component {
	render() {
		return (
			<div>
				<WordEntry/>
				<DefinitionEntry/>
			</div>
		);
	}
};

export default App;
