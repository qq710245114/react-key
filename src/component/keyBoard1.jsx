import React from 'react';
import ReactDom from 'react-dom';
require('./keyBoard1.css');
import PropTypes from 'prop-types';
 class KeyBoard extends React.Component{
	constructor(){
		super();
	
	}
	render() {
		return (
			<div className="keyBox">
			  <table className="table">
			  <tbody>
			<tr>
				<td>1/4仓</td>
				<td>1</td>
				<td>2</td>
				<td>3</td>
				<td rowSpan="3">
					<table className="subTable">
					   <tbody>
						 <tr>
							<td  className="remove"></td>
						 </tr>
						 <tr>
							<td  className="clear"></td>
						 </tr>
					  </tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td>1/3仓</td>
				<td>4</td>
				<td>5</td>
				<td>6</td>
			</tr>
			<tr>
				<td>半仓</td>
				<td>7</td>
				<td>8</td>
				<td>9</td>
			</tr>
			<tr>
				<td>全仓</td>
				<td>00</td>
				<td>0</td>
				<td colSpan="2"></td>

			</tr>
		  </tbody>
		</table>
			</div>
		)
	}
}

export default KeyBoard;
 ReactDom.render(
	<KeyBoard/>,document.getElementById('app')
)

