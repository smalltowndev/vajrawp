/**
 * External dependencies.
 */
import clsx from 'clsx';
import { Switch } from '@headlessui/react'
import { useState, useEffect } from '@wordpress/element';
const ToggleInput = ({ id, label, description, value, className, options, setOption, ...props }) => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        setEnabled( value );
    }, [value]);

    const handleChange = v => {
        setOption( v, id );
        setEnabled( v );
    };

    return (
        <fieldset>
            <Switch.Group as="div" className="flex items-center">
                <Switch
                    checked={enabled}
                    onChange={handleChange}
                    className={clsx(
                        enabled ? 'bg-gray-600' : 'bg-gray-200',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2'
                    )}
                >
                    <span
                        aria-hidden="true"
                        className={clsx(
                            enabled ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                        )}
                    />
                </Switch>
                <Switch.Label as="span" className="ml-3 text-sm">
                    <span className="font-medium text-gray-900">{label && label}</span>{' '}
                    <span className="text-gray-500">{description && description}</span>
                </Switch.Label>
            </Switch.Group>
        </fieldset>

    );
}

export default ToggleInput;