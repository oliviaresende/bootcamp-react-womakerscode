import React from "react";
import "../index.css"

export const FormInput = ({
    label,
    placeholder,
    inputType,
    value,
    handleChange,
    name
}) => {
    const handleInputChange = e => {
        handleChange(e.target.name, e.target.value);
    };
    return (
        <div className="form-input-container">
            <label className="input">{label}</label>
            <input
                className="form"
                value={value}
                name={name}
                type={inputType}
                placeholder={placeholder}
                onChange={handleInputChange}
            ></input>
        </div>
    );
};
