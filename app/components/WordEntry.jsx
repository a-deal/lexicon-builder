import React from 'react';

class WordEntry extends React.Component {
	render() {
		return (
			<input placeholder='Enter Your Word' onChange={this.handleWord}/>
		);
	}

	handleWord: (event) => {

	}
};

export default WordEntry;
