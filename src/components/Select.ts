import React, { FC, SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

const Select: FC<SelectProps> = ({ label, options, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <select {...rest}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
