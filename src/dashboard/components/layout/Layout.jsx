/**
 * Internal dependencies.
 */
import { Header, Footer, Content } from '../parts';
import {Cog6ToothIcon} from "@heroicons/react/20/solid";

export default function Layout({ children }) {
    const navigation = [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Changelog', href: '/changelog' },
    ]

    const secondaryNav = [
        { name: 'Settings', href: '/settings', icon: Cog6ToothIcon }
    ]

    return (
        <>
            <div className="min-h-full">
                <Header navigation={navigation} secondaryNav={secondaryNav}/>
                <Content>{children}</Content>
                <Footer />
            </div>
        </>
    )
}