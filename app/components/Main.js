import React from 'react';

export default class Main extends React.Component {
	render () {
		return (
			<div className="main-container">
				{this.props.children}
			</div>
		)
	}
}

module.exports = Main;