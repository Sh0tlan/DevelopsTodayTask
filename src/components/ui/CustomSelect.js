const Select = ({
  id,
  value,
  onChange,
  label,
  options,
  placeholder = "Select an option",
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-black mb-2"
        id={`${id}-label`}
      >
        {label}
        {required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 pr-8 rounded-lg border border-gray-300 outline outline-2 outline-gray-300 focus:outline-blue-500 focus:border-transparent text-black"
        aria-labelledby={`${id}-label`}
        required={required}
        aria-required={required}
      >
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
