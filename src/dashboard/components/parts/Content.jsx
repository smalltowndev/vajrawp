/**
 * External dependencies.
 */
import clsx from 'clsx';

const Content = ({ className, children }) => {
    return (
        <div className="py-10">
            <main>
                <div className={clsx(
                    "mx-auto max-w-6xl sm:px-6 lg:px-8",
                    className && className
                )}>
                    {children}
                </div>
            </main>
        </div>
    )
}
export default Content;