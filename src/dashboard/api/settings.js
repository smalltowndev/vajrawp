/**
 * Internal dependencies.
 */
import { getOption, setOptions } from './local';

export async function fetchOptions( { key = false, updateOptions } ) {
    const settings = await getOption( key );
    if ( Object.keys(settings).length !== 0 && settings.constructor === Object ) {
        updateOptions( settings );
    }
}

export async function saveOptions( { options = {} } ) {
    const res = await setOptions( options );

    return res;
}