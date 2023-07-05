import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                <Route path="/getting-started" element={<h1>Getting Started</h1>} />
                <Route path="/changelog" element={<h2>Changelog</h2>} />
                <Route path="/settings" element={<h2>Settings</h2>} />
            </Routes>
        </Layout>
    )
}

export default App;