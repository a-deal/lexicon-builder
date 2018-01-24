import React from 'react';

class DefinitionEntry extends React.Component {
	render() {
		return (
			<textarea onChange={this.handleDefinition}></textarea>
		);
	}

	handleDefinition: (event) => {

	}
};

export default DefinitionEntry;
