import React from 'react'

const Output = ({ text }) => {
    console.log(typeof(text));
    return (
        <div>
            {text}
        </div>
    )
}

export default Output;
