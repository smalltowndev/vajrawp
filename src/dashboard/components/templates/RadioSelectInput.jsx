const RadioSelectInput = ({ id, label, description, value, options, setOption, ...props }) => {
    const handleChange = e => {
        setOption( e.target.value, id );
    };

    return (
        <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">{label && label}</legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">{description && description}</p>
            <legend className="sr-only">{label && label}</legend>
            <div className="space-y-5 mt-4">
                {options.map(( option ) => (
                    <div key={option.key} className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                id={id+`[${option.key}]`}
                                aria-describedby={id+`[${option.key}]-description`}
                                name={id}
                                type="radio"
                                value={option.key}
                                checked={value === option.key}
                                onChange={handleChange}
                                className="h-4 w-4 shadow-none border-gray-300 text-gray-600 focus:ring-gray-600"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor={id+`[${option.key}]`} className="font-medium text-gray-900">
                                {option.label}
                            </label>
                            <p id={`${option.key}-description`} className="text-gray-500">
                                {option.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}

export default RadioSelectInput;