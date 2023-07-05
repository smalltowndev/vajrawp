const Content = ({ children }) => {
    return (
        <div className="py-10">
            <main>
                <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
export default Content;