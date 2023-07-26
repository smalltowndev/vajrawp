import { NavLink } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import classNames from 'clsx';
const pluginState = window.vajraPluginState;

const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Getting Started', href: '/getting-started', icon: false },
    { name: 'Changelog', href: '/changelog' },
]

const secondaryNav = [
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
]

const Header = () => {
    return (
        <Disclosure as="nav" className="bg-white shadow-sm">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-shrink-0 items-center justify-between pt-6 pb-4">
                            <div className="flex gap-4 items-center">
                                <img
                                    className="block h-9 w-auto"
                                    src={pluginState.assetsURL + '/img/icon-dark.svg'}
                                    alt="Vajra Starter"
                                />
                                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Vajra Starter</h1>
                            </div>
                            <div>
                                {/* @todo: Make version numbering dynamic and maybe show an update button when an update is available */}
                                <div className="bg-gray-200 py-1 px-2 rounded-md font-bold text-gray-500 hover:text-gray-800">v0.1.0</div>
                            </div>
                        </div>
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="hidden sm:-my-px sm:flex sm:space-x-8">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className={({ isActive }) => classNames(
                                                isActive
                                                    ? 'border-gray-800 text-gray-900'
                                                    : 'border-transparent text-gray-500 hover:border-gray-700 hover:text-gray-800',
                                                'inline-flex items-center border-b-2 px-1 pt-1 text-base shadow-none'
                                            )}
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                    {secondaryNav.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            className={({ isActive }) => classNames(
                                                isActive
                                                    ? 'border-gray-800 text-gray-900'
                                                    : 'border-transparent text-gray-500 hover:border-gray-700 hover:text-gray-800',
                                                'inline-flex items-center border-b-2 px-1.5 pt-1 text-base shadow-none'
                                            )}
                                        >
                                            { item.icon && <item.icon className="h-4 w-4 mr-1.5 " /> }
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}

export default Header;