const RadioSelectInput = ({ id, label, description, defaultOption, options, setOption }) => {
    const filteredOptions = Object.entries( options );

    const handleChange = e => {
        setOption( e.target.value, id );
    };

    return (
        <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">{label && label}</legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">{description && description}</p>
            { filteredOptions &&
                <div className="mt-6 space-y-6">
                    {
                        filteredOptions.map( ( [key, value], index ) =>
                            <div key={index} className="flex items-center gap-x-3">
                                <input
                                    id={id+`[${key}]`}
                                    name={id}
                                    type="radio"
                                    value={key}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    defaultChecked={ defaultOption === key }
                                    onChange={handleChange}
                                />
                                <label htmlFor={id+`[${key}]`} className="block text-sm font-medium leading-6 text-gray-900">
                                    {value}
                                </label>
                            </div>
                        )
                    }
                </div>
            }
        </fieldset>
    )
}

export default RadioSelectInput;