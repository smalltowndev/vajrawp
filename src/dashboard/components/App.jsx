/**
 * External dependencies.
 */
import { Route, Routes } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import Layout from './Layout';
import { Dashboard } from './pages';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/getting-started" element={<h1>Getting Started</h1>} />
                <Route path="/changelog" element={<h2>Changelog</h2>} />
                <Route path="/settings" element={<h2>Settings</h2>} />
            </Routes>
        </Layout>
    )
}

export default App;