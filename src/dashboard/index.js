import * as WPElement from '@wordpress/element';
import React from 'react';
import App from './components'

import '../styles/index.css';

/**
 * Initial render function.
 */
function render() {
	const container = document.getElementById( 'vajra-starter-dashboard-root' );

	if ( null === container ) {
		return;
	}

	// @todo: Remove fallback when we drop support for WP 6.1
	const component = (
		<App />
	);
	if ( WPElement.createRoot ) {
		WPElement.createRoot( container ).render( component );
	} else {
		WPElement.render( component, container );
	}
}

render();
