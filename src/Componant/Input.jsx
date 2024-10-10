import React from 'react'

export default function Input({register, errors, name, label, type="text",placeholder="text", required = false}) {
  return (
    <div>
        {label && <label htmlFor={name}>{label}</label>}
        <input type={type} placeholder={placeholder} id={name} {...register(name, { required })}
        className="w-full px-3 py-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-800 sm:text-sm sm:leading-6"
        />
        {errors && errors[name] && <span>{label} is required.</span>}
    </div>
  )
}
