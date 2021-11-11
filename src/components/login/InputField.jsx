import React from 'react'

const InputField = (props) => {
    return (
        <div className="mx-4 my-5 flex flex-col">
            <label className="text-white-primary mb-2">{props.name}</label>
            <input type="text" className="bg-black-light h-10 outline-none text-white-primary px-2"></input>
        </div>
    )
}

export default InputField
