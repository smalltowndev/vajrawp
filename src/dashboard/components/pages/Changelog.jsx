/**
 * External dependencies.
 */
import { useState, useEffect } from "@wordpress/element";
import clsx from 'clsx';

/**
 * Internal dependencies.
 */
const { changelogURL, version } = window.vajraPluginState;
import Layout from '../layout/Layout';

const TypeTag = ({ type }) => {

    return (
        <span
            className={clsx(
                "mr-2.5 px-2 py-1 rounded border-2",
                type === 'New' && 'border-gray-800',
                type === 'Fixes' && 'border-amber-800 text-amber-800',
                type === 'Improvements' && 'border-blue-500 text-blue-500',
            )}
        >{type}</span>
    )
}

const Changelog = () => {

    const [changelogData, setChangelogData] = useState(null);

    useEffect(() => {
        fetch( changelogURL )
            .then(response => response.json())
            .then((jsonData) => {
                setChangelogData( jsonData );
            })
            .catch((error) => {
                console.error(error)
            });
    }, [changelogURL])

    return (
        <Layout>
            <div className="space-y-8">
                {changelogData && Object.keys(changelogData).map((ver, i)=>{
                    return (
                        <div key={ver} className="bg-white rounded">
                            <div className="px-6 py-4 border-b border-b-gray-200 flex justify-between">
                                <div className="flex gap-4 items-center">
                                    <h2 className="text-xl font-semibold leading-7 text-gray-900">v{ver}</h2>
                                    { i === 0 && <span className="bg-gray-800 px-2.5 py-1 text-white rounded">Latest</span> }
                                </div>
                            </div>
                            <div className="p-6 space-y-4">
                                { changelogData[ver] && Object.keys(changelogData[ver]).map(( type, i2 ) => {
                                    if ( typeof changelogData[ver][type] === 'string' ) {
                                        return (
                                            <p key={i2}>
                                                <TypeTag type={type} />
                                                {changelogData[ver][type]}
                                            </p>
                                        );
                                    } else if ( typeof changelogData[ver][type] === 'object' ) {
                                        return ( Object.entries(changelogData[ver][type]).map(( [ key, change ], i3 ) =>
                                            <p key={i3}>
                                                <TypeTag type={type} />
                                                {change}
                                            </p> )
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Changelog;