/**
 * External dependencies.
 */
import { HashRouter } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import App from './App';

const AppContainer = () => {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}

export default AppContainer;