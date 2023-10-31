/**
 * External dependencies.
 */
import clsx from 'clsx';

const TextInput = ({ id, type = 'text', label, description, value, className, options, setOption, ...props }) => {

    const handleChange = e => {
        setOption( e.target.value, id );
    };

    const getType = ( t ) => {
        let type;

        switch ( t ) {
            case 'text':
            case 'number':
            case 'email':
                type = t;
                break;

            default:
                type = 'text';
                break;
        }

        return type;
    }

    return (
        <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">{label && label}</legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">{description && description}</p>
            <input
                type={getType(type)}
                name={id}
                id={id}
                autoComplete={id}
                className={clsx(
                    "block w-full max-w-[450px] rounded-md border-0 mt-3 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6",
                           className && className
                )}
                onChange={handleChange}
                value={value}
                {...props}
            />
        </fieldset>

    );
}

export default TextInput;