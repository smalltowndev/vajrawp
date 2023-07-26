/**
 * Internal dependencies.
 */
import { Header, Footer, Content } from '../parts';
import {Cog6ToothIcon} from "@heroicons/react/20/solid";

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