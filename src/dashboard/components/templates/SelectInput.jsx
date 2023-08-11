/**
 * External dependencies.
 */
import clsx from 'clsx';

const SelectInput = ({ id, label, description, value, options, setOption, className, ...props }) => {

    const filteredOptions = options && Object.entries( options );

    const handleChange = e => {
        setOption( e.target.value, id );
    };

    return (
        <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">{label && label}</legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">{description && description}</p>
            <select
                id={id}
                name={id}
                className={clsx(
                    "block w-full rounded-md border-0 mt-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6",
                    className && className
                )}
                onChange={handleChange}
                value={value ?? ''}
                {...props}
            >
                <option value="default">Select</option>
                { filteredOptions &&
                            filteredOptions.map( ( [key, value], index ) =>
                                <option key={key}
                                    value={key}
                                >
                                    {value}
                                </option>
                            )
                }
            </select>
        </fieldset>
    )
}

export default SelectInput;