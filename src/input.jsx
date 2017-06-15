import React from 'react';
import ReactDom from 'react-dom';
import Keyborad from './component/keyBoard.jsx';

export default class Input extends React.Component{
	constructor(){
		super();
		this.state={
			isShow:false,
			text:""
		}
		this.getFoucus=this.getFoucus.bind(this);
		this.getText=this.getText.bind(this);
	}
	getFoucus() {
       this.setState({isShow:!this.state.isShow})
	}
	
	getText(item,isShow){
		this.setState({text:item});
		if(isShow){
			this.state.isShow=false;
			this.setState(this.state.isShow);
		}
		
		console.log(isShow)
		
	}
	render(){
		return (
			  <div>
                 <input 
                    style={{width:"200px",height:"30px"}} type="text"
                     placeholder="请输入文本框"
                     onClick={this.getFoucus}
                     value={this.state.text}
                     />
                 <Keyborad isShow={this.state.isShow} keyText={this.getText}/>
			  </div>
			)
	}
	
  }

  ReactDom.render(
	<Input/>,document.getElementById('app')
)
