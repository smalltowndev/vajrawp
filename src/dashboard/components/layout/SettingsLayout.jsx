/**
 * External dependencies.
 */
import { Route, Routes } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/20/solid';

/**
 * Internal dependencies.
 */
import { Header, Footer, Content } from '../parts';

export default function SettingsLayout({ children }) {
    const navigation = [
        { name: 'General', href: '/settings' },
        { name: 'Blocks', href: '/block-settings' },
    ]

    const secondaryNav = [
        { name: 'Back to Onboarding', href: '/getting-started', icon: false },
        { name: 'Dashboard', href: '/dashboard', icon: HomeIcon }
    ]

    return (
        <>
            <div className="min-h-full">
                <Header navigation={navigation} secondaryNav={secondaryNav} />
                <Content className="space-y-10">{children}</Content>
                <Footer />
            </div>
        </>
    )
}