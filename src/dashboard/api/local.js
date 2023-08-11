/**
 * External dependencies.
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies.
 */
const { apiRoute } = window.vajraPluginState;
import { addQueryArgs } from '@wordpress/url';
export async function getOption( key = false ) {
    const queryParams = key && ! empty( key) ? { key } : {};

	return await apiFetch( {
        path: addQueryArgs( `/${apiRoute}/options/get`, queryParams ),
    } ).then(
		response => response
	);
}

export async function setOptions( options ){
    const data = {
        options
    };

    return await apiFetch({
            path: `/${apiRoute}/options/set`,
            method: 'POST',
            data,
        } ).then(
            response => response
    );
}