/**
 * External dependencies.
 */
import { Route, Routes } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import Layout from './Layout';
import { Dashboard, Onboarding } from './pages';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/getting-started" element={<Onboarding />} />
                <Route path="/changelog" element={<h2>Changelog</h2>} />
                <Route path="/settings" element={<h2>Settings</h2>} />
            </Routes>
        </Layout>
    )
}

export default App;