import React, { useState } from 'react';

const Select = ({ getType }) => {
	const [text, setText] = useState('hipster-centric');
	const onChange = (q) => {
		setText(q);
		getType(q);
	};
	return (
		<div>
			<select
				value={text}
				className='form-control'
				onChange={(e) => onChange(e.target.value)}
			>
				<option value='hipster-centric'>Hipster-centric</option>
				<option value='hipster-latin'>Hipster-latin</option>
			</select>
		</div>
	);
};

export default Select;
