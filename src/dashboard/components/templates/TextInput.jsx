/**
 * External dependencies.
 */
import clsx from 'clsx';

const TextInput = ({ id, label, description, value, className, options, setOption, ...props }) => {

    const handleChange = e => {
        setOption( e.target.value, id );
    };

    return (
        <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">{label && label}</legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">{description && description}</p>
            <input
                type="text"
                name={id}
                id={id}
                autoComplete={id}
                className={clsx(
                    "block w-full max-w-[450px] rounded-md border-0 mt-3 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6",
                           className && className
                )}
                onChange={handleChange}
                defaultValue={value}
                {...props}
            />
        </fieldset>

    );
}

export default TextInput;