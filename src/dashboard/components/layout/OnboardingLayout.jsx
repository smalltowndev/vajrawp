/**
 * Internal dependencies.
 */
import { Footer, Content } from '../parts';

export default function OnboardingLayout({ children }) {
    return (
        <>
            <div className="min-h-full">
                <Content>{children}</Content>
                <Footer />
            </div>
        </>
    )
}