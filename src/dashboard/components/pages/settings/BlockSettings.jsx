import SettingsLayout from '../../layout/SettingsLayout';

const BlockSettings = () => {
    return (
        <SettingsLayout>
            <form className="bg-white p-10 rounded">
                <div className="space-y-12">
                    <div className="pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Block Config</h2>
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-start gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-gray-700 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </SettingsLayout>
    )
}

export default BlockSettings;