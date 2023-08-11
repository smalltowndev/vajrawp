/**
 * External dependencies.
 */
import toast from 'react-hot-toast';

export function showPromiseToast(res, loadingText = '', successText = '', errorText = '' ) {
	toast.promise(
		res,
		{
			loading: loadingText ? loadingText : 'Loading..',
			success: successText ? successText : 'Loaded!',
			error: errorText ? errorText : 'Error while loading!',
		}
	);
}

export function showToast( message, type = '' ) {
	if ( ! type ) {
		toast( message );
	} else if ( 'success' === type ) {
		toast.success( message );
	} else if ( 'error' === type ) {
		toast.error( message );
	}
}
