/**
 * Internal dependencies.
 */
import { Header, Footer, Content } from './parts';

export default function Layout({ children }) {
    return (
        <>
            <div className="min-h-full">
                <Header />
                <Content>{children}</Content>
                <Footer />
            </div>
        </>
    )
}