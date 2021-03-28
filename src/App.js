import 'bootswatch/dist/darkly/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Output from './components/Output';
import Select from './components/controls/Select';
import Text from './components/controls/Text';

function App() {
	const [paras, setParas] = useState(5);
	const [type, setType] = useState('hipster-centric');
	const [text, setText] = useState('');
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSampleText = async () => {
			try {
				const { data } = await axios.get(
					`https://hipsum.co/api/?type=${type}&paras=${paras}`
				);
				setText(data[0]);
				console.log(typeof data);
				console.log(data[0]);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getSampleText();
  }, [paras,type]);
  console.log(paras);
  console.log(type);
	return (
		<div className='container'>
			<h1>Sample Text Generator</h1>
			<hr />
			<form className='form-inline'>
				<div className='form-group'>
					<label>Para: </label>
					<Text getParas={(e) => setParas(e)} />
				</div>
				<div className='form-group'>
					<label>Type: </label>
					<Select getType={(e) => setType(e)} />
				</div>
				<div className='form-group'></div>
			</form>
			{loading ? <h1>Loading</h1> : <Output text={text} />}
		</div>
	);
}

export default App;
