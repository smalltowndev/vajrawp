import { CheckCircleIcon } from '@heroicons/react/20/solid'
import OnboardingLayout from '../layout/OnboardingLayout';
import { NavLink } from 'react-router-dom'

const tiers = [
    {
        name: 'Starter',
        id: 'tier-starter',
        href: '#',
        price: { monthly: '$15', annually: '$12' },
        description: 'Everything necessary to get started.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    },
    {
        name: 'Plus',
        id: 'tier-plus',
        href: '#',
        price: { monthly: '$30', annually: '$24' },
        description: 'Everything in Starter, plus essential tools for growing your business.',
        features: [
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automations',
        ],
    },
    {
        name: 'Pro',
        id: 'tier-Pro',
        href: '#',
        price: { monthly: '$60', annually: '$48' },
        description: 'Everything in Plus, plus collaboration tools and deeper insights.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '1-hour, dedicated support response time',
            'Marketing automations',
            'Custom reporting tools',
        ],
    },
]

const steps = [
    { id: '01', name: '01. Configuration', href: '#/getting-started', status: 'complete' },
    { id: '02', name: '02. Plan', href: '#/getting-started', status: 'current' },
    { id: '03', name: '03. Take Off', href: '#/getting-started', status: 'upcoming' },
]
const Onboarding = () => {
    return (
        <OnboardingLayout>
            <div className="mb-6 text-center">
                <NavLink
                    to="/dashboard"
                    className="text-gray-400 hover:text-gray-800 inline-flex items-center px-1 pt-1 text-base shadow-none"
                >
                    Skip to Dashboard
                </NavLink>
            </div>
            <div className="bg-white rounded">
                <nav aria-label="Progress" className="px-4 py-6 border-b border-b-gray-200">
                    <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                        {steps.map(( step) => (
                            <li key={step.id} className="md:flex-1">
                                {step.status === 'complete' ? (
                                    <a
                                        href={step.href}
                                        className="group flex flex-col border-l-4 border-gray-600 py-2 pl-4 hover:border-gray-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 outline-none shadow-none"
                                    >
                                        <span className="text-sm font-medium">{step.name}</span>
                                    </a>
                                ) : step.status === 'current' ? (
                                    <a
                                        href={step.href}
                                        className="flex flex-col border-l-4 border-gray-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 outline-none shadow-none"
                                        aria-current="step"
                                    >
                                        <span className="text-sm font-medium">{step.name}</span>
                                    </a>
                                ) : (
                                    <a
                                        href={step.href}
                                        className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 outline-none shadow-none"
                                    >
                                        <span className="text-sm font-medium">{step.name}</span>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
                <div className="bg-white px-4 py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl sm:text-center">
                            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Select a plan
                            </p>
                        </div>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
                            Plans for all that you need and more, select a plan and get ready to take off!
                        </p>
                        <div className="mt-20 flow-root">
                            <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
                                {tiers.map((tier) => (
                                    <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                                        <h3 id={tier.id} className="text-base font-semibold leading-7 text-gray-900">
                                            {tier.name}
                                        </h3>
                                        <p className="mt-6 flex items-baseline gap-x-1">
                                            <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                                            <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                                        </p>
                                        <p className="mt-3 text-sm leading-6 text-gray-500">{tier.price.annually} per month if paid annually</p>
                                        <a
                                            href={tier.href}
                                            aria-describedby={tier.id}
                                            className="mt-10 block rounded-md bg-gray-700 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Buy plan
                                        </a>
                                        <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">{tier.description}</p>
                                        <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex gap-x-3">
                                                    <CheckCircleIcon className="h-6 w-5 flex-none text-gray-600" aria-hidden="true" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OnboardingLayout>
    )
}

export default Onboarding;