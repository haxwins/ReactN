const colorArray = [
	"red",
	"pink",
	"blue",
	"yellow",
	"green",
	"cyan",
	"orange",
	"purple",
	"hotpink",
	"lightblue"
];
const textList = [
	"JUST KIDDIN LMAO",
	"ALRIGHT I'LL STOP NOW"
];
let pos = 0;
let clickCounter = 0;	
class ColorFull extends React.Component{
	constructor(props){
		super(props)
		this.triggersBoth = this.triggersBoth.bind(this)
		this.state = {
			color: "black",
			textcolor: "white",
			text: "CLICK HERE TO CURE EPILEPSY"
		}
	}
	render(){
		const style = {
		backgroundColor: this.state.color,
		color: this.state.textcolor
		};
		return (
				<div style={style} onMouseMove={this.change.bind(this)} onClick={this.triggersBoth.bind(this)}>
					<p>{this.state.text}</p>
				</div>
				);
	}
	change(){
		console.log(pos);
		if(pos===true){
			this.setState({color: "black"});
			this.setState({textcolor: "white"});
		}
		else if(pos<colorArray.length-1){
			this.setState({color: colorArray[pos]});
			this.setState({textcolor: colorArray[pos+2]});
			pos++;
		}
		else{
			this.setState({color: colorArray[pos]});
			pos=0;
		}
	}
	click(){
		clickCounter++;
		if(clickCounter > 5){
			pos = true;
			this.setState({text: textList[1]});
		} 
		else
			this.setState({text: textList[0]});
	}
		triggersBoth(){
		this.change();
		this.click();
	};
};
ReactDOM.render(<ColorFull/>,document.getElementById('colorFull'));