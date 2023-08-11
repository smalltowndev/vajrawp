const MultiSelectInput = ({ id, label, description, values, options, setOption, ...props }) => {
    const handleChange = ( e, key ) => {
        const updatedValues = e.target.checked ? values : values.filter((value) => value !== key);
        setOption( [
                ...updatedValues,
            e.target.checked && key
        ], id );
    };

    return (

        <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">{label && label}</legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">{description && description}</p>
            { options &&
                <div className="mt-6 space-y-6">
                    {
                        options.map( ( option ) =>
                            <div key={option.key} className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id={id+`[${option.key}]`}
                                        name={id}
                                        type="checkbox"
                                        className="h-4 w-4 shadow-none rounded border-gray-300 text-gray-600 focus:ring-gray-600"
                                        onChange={(e) => handleChange(e, option.key)}
                                        checked={values.includes(option.key)}
                                        {...props}
                                    />
                                </div>
                                <div className="text-sm leading-6 self-center">
                                    <label htmlFor={id+`[${option.key}]`} className="font-medium text-gray-900">
                                        {option?.label}
                                    </label>
                                    <p className="text-gray-500">{option?.description}</p>
                                </div>
                            </div>

                        )
                    }
                </div>
                }
        </fieldset>
)
}

export default MultiSelectInput;