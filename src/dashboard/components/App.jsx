/**
 * External dependencies.
 */
import { Route, Routes } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import Layout from './Layout';
import { Dashboard, Onboarding, Settings } from './pages';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/getting-started" element={<Onboarding />} />
                <Route path="/changelog" element={<h2>Changelog</h2>} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Layout>
    )
}

export default App;