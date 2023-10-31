
const SettingsCard = ({ title, description, children, onSave }) => {

    const handleOnSave = (e) => {
        e.preventDefault();
        onSave();
    }

    return (
        <form
            className="bg-white rounded"
            onSubmit={handleOnSave}
        >
            <div className="px-6 py-4 border-b border-b-gray-200 flex justify-between">
                <div>
                    <h2 className="text-xl font-semibold leading-7 text-gray-900">{title && title}</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        {description && description}
                    </p>
                </div>
            </div>
            <div className="p-6 space-y-10">
                {children}
            </div>
            <div className="px-6 py-4 border-t border-t-gray-200">
                <button
                    type="submit"
                    className="rounded-md bg-gray-700 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default SettingsCard;