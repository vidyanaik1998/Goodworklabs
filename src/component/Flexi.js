import React, { useState } from 'react';

const Flexi = ({ onSubmit, config }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const renderFormItem = item => {
    switch (item.type) {
      case 'TextField':
        return (
          <div key={item.name}>
            <label>{item.label}</label>
            <input
              type="text"
              value={formData[item.name] || ''}
              onChange={e => handleChange(item.name, e.target.value)}
            />
          </div>
        );
      case 'DropDown':
        return (
          <div key={item.name}>
            <label>{item.label}</label>
            <select
              value={formData[item.name] || ''}
              onChange={e => handleChange(item.name, e.target.value)}
            >
              <option value="" disabled>
                Select {item.label}
              </option>
              {item.values.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div>
      {config.map(item => renderFormItem(item))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Flexi;
