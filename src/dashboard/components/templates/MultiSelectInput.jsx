const MultiSelectInput = ({ id, label, description, defaultOption, options, setOption }) => {
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
                            <div key={index} className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id={id+`[${key}]`}
                                        name={id}
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        defaultChecked={defaultOption === key}
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor={id+`[${key}]`} className="font-medium text-gray-900">
                                        {value}
                                    </label>
                                    {/*<p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>*/}
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