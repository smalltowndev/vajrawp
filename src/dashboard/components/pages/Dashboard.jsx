import { FolderIcon, RocketLaunchIcon, CubeIcon, AdjustmentsVerticalIcon, ClipboardDocumentCheckIcon, SparklesIcon, SquaresPlusIcon } from '@heroicons/react/20/solid'

const features = [


    {
        name: 'PHP Autoloader',
        description:
            'Vajra uses Composer to autoload your PHP files and namespaces all without having to manually to include/require them.',
        icon: FolderIcon,
    },
    {
        name: 'Built in React App for Admin',
        description: 'A react app for admin running right out of the box. All you need to do is make it your own.',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Blocks Development Workflow',
        description: 'Vajra uses wp-scripts under the hood to give you the latest and greatest of WordPress Block Development.',
        icon: CubeIcon,
    },
    {
        name: 'Settings Page and Workflow',
        description: 'No more needing to look or create a settings page and workflow from scratch, it is all built in.',
        icon: AdjustmentsVerticalIcon,
    },
    {
        name: 'Onboarding Page and Changelog',
        description: 'We know how important it is to have a nice onboarding page, that\'s why we have the base ready for you to customize.',
        icon: ClipboardDocumentCheckIcon,
    },
    {
        name: 'TailwindCSS Support.',
        description: 'Whether you are a seasoned TailwindCSS creator or just starting out, once you use it you will never look back at other CSS libraries.',
        icon: SparklesIcon,
    },
    {
        name: 'And more in works!',
        description: '',
        icon: SquaresPlusIcon,
    },
]
const Dashboard = () => {
    return (
        <div className="overflow-hidden bg-white py-10 rounded">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
                    <div className="lg:pr-8">
                        <h2 className="text-base font-semibold leading-7 text-gray-600">Build faster</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kickstart your WordPress Project!</p>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            A plugin ready for you to bootstrap your next idea, without needing to start from scratch. Take a look at all the offered features.
                        </p>
                        <dl className="mt-12 max-w-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 text-base leading-7 text-gray-600 lg:max-w-none">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-gray-700" aria-hidden="true" />
                                        {feature.name}
                                    </dt>{' '}
                                    <dd className="inline-block">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;