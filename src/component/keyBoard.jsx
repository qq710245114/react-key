import React from 'react';
require('./keyBoard.css');
import PropTypes from 'prop-types';
 class KeyBoard extends React.Component{
	constructor(){
		super();
		this.state={
			array:["1/4仓",1,2,3,"退格","1/3仓",4,5,6,"清空","半仓",7,8,9,"隐藏","全仓","00",0,"确定"],
			text:"",
			isShow:false
		}
		this.doClick = this.doClick.bind(this);
	}
	doClick(index,cb){
		console.log(this.state.text);
		switch (index) {
          case 4 :
          let len= this.state.text.length-1;
               let str = this.state.text.substr(0,len);
               this.state.text=str;
           this.setState({text:str });
              console.log(len);
           break;
           case 9 :
           this.state.text='';
           this.setState({text:""});
           break;
            case 14 :
            this.setState({isShow:!this.state.isShow});
           break;
           case 18:
            break ;
           default:
           this.setState({text:this.state.text+=String(this.state.array[index])});
		}

	     cb(this.state.text,this.state.isShow);
	}
	
	render() {
		let {isShow}=this.props;
		let html = this.state.array.map((item,index)=> <li  onClick={this.doClick.bind(this,index,this.props.keyText)} key={index}>{item}</li> );
		return (
			<div className="keyBox" style={{display:isShow? "block":'none',bottom:"0"}}>
			   <ul>{html}</ul>
			</div>
		)
	}
}
KeyBoard.propTypes={
	isShow:PropTypes.bool
};
KeyBoard.defaultProps={
	isShow:true
};
export default KeyBoard;
