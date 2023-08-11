/**
 * External dependencies.
 */
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

/**
 * Internal dependencies.
 */
import { Dashboard, Onboarding, Changelog } from './pages';
import { GeneralSettings, BlockSettings } from './pages/settings';

const App = () => {
    return (
        <>
            <Toaster position="bottom-center" />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/getting-started" element={<Onboarding />} />
                <Route path="/changelog" element={<Changelog />} />
                <Route path="/settings" element={<GeneralSettings />} />
                <Route path="/block-settings" element={<BlockSettings />} />
            </Routes>
        </>
    )
}

export default App;