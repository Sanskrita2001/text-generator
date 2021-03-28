import React,{useState} from 'react'

const Text = ({ getParas }) => {
    const [text, setText] = useState(5);
    // console.log(text);
    const onChange = (q) => {
			setText(q);
			getParas(q);
		};
    return (
			<div>
				<input
					className='form-control'
					type='number'
					value={text}
					onChange={(e) => onChange(e.target.value)}
				/>
			</div>
		);
}

export default Text
