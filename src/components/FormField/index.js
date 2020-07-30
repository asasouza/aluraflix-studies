// react
import React from 'react';

function FormField({ label, name, onChange, type, value }) {
    const Input = type === 'textarea' ? 'textarea' : 'input';
    return (
        <div>
            <label>{label}
                <Input
                    name={name}
                    onChange={onChange}
                    type={type}
                    value={value}
                />
            </label>
        </div>
    );
}

export default FormField;