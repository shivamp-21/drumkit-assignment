import { useState } from "react";
import Drum from "./components/Drum";

function App() {
	const [recordArray , setRecordArray] = useState([]);
	const [sounds, setSounds] = useState([
		{
			name: "boom",
			sound: require("./sounds/boom.wav").default,
			key: "W",
			url:"images/tom1.png",
		},
		{
			name: "clap",
			sound: require("./sounds/clap.wav").default,
			key: "A",
		},
		{
			name: "hihat",
			sound: require("./sounds/hihat.wav").default,
			key: "S",
		},
		{
			name: "kick",
			sound: require("./sounds/kick.wav").default,
			key: "D",
		},
		{
			name: "snare",
			sound: require("./sounds/snare.wav").default,
			key: "J",
		},
		{
			name: "tink",
			sound: require("./sounds/tink.wav").default,
			key: "K",
		},
		{
			name: "tom",
			sound: require("./sounds/tom.wav").default,
			key: "L",
		},
	]);

	const record = () => {
		setRecordArray([]);
	} 
	const playRecordArray = () => {
		console.log(recordArray);
		recordArray.map((sound , i) => {
			setTimeout(() => {
				playRecording(sound);
			}, 500*(i+1));
		})
	}
	const playRecording = (sound) => {
		new Audio(sound).play();
	}


	return (
		<div className="App">
			<h1 className="heading">Drum 🥁 kit </h1>
			<div>
			<div className="drums">
				{sounds.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} recordArray = {recordArray} setRecordArray = {setRecordArray} url={sound.url}/>
				))}
			</div>
				<div>
				<button className="recordbtn"
				onClick={record}>Record</button>
				<button className="endbtn" onClick={playRecordArray}>Stop and Play Recording</button>
				</div>
			</div>
		</div>
	);
}

export default App;