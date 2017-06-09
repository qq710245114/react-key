import React from 'react';
import ReactDom from 'react-dom';
require('./index.css');
class App extends React.Component{
	render() {
		return (
			<div>
			<p className={"title"}>4444444444444</p>
			</div>
		)
	}
}
ReactDom.render(
	<App/>,document.getElementById('app')
)
