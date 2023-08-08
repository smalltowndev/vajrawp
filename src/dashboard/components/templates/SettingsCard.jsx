
const SettingsCard = ({ title, description, children, onSave }) => {
    return (
        <div className="bg-white rounded">
            <div className="p-4 border-b border-b-gray-200 flex justify-between">
                <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">{title && title}</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        { description && description }
                    </p>
                </div>
            </div>
            <div className="p-6 space-y-10">
                { children }
            </div>
            <div className="p-4 border-t border-t-gray-200">
                <button
                    type="submit"
                    className="rounded-md bg-gray-700 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={onSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default SettingsCard;