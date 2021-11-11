import React from 'react'

const InputField = ({ name,value,setValue,type }) => {
    return (
        <div className="mx-4 my-5 flex flex-col">
            <label className="text-white-primary mb-2">{ name }</label>
            <input value={ value } onChange={ (e) => setValue(e.target.value) } type={ type } className="bg-black-light h-10 outline-none text-white-primary px-2"></input>
        </div>
    )
}

export default InputField
