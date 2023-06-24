import * as WPElement from '@wordpress/element';
import React from 'react';

import '../styles/index.css';

/**
 * Initial render function.
 */
function render() {
	const container = document.getElementById( 'vajra-starter-onboarding-root' );

	if ( null === container ) {
		return;
	}

	// @todo: Remove fallback when we drop support for WP 6.1.
	const component = (
		<h1 className='text-3xl'>Hello Onboarding!</h1>
	);
	if ( WPElement.createRoot ) {
		WPElement.createRoot( container ).render( component );
	} else {
		WPElement.render( component, container );
	}
}

render();