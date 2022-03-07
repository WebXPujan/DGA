
const AuthLayout = ({children}) => {
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="bg-gray-700 w-full lg:w-6/12 hidden lg:block"></div>
                <div className="bg-white w-full sm:w-8/12 lg:w-6/12 min-h-screen flex flex-col pb-56 relative">
                    <div className="flex-1 w-full overflow-auto">
                        {children}
                    </div>
                    <div className="flex-auto absolute bottom-0 right-0 left-0 px-32 text-center text-sm text-gray-400 border-t-1 border-gray-100 py-16">
                        &copy; 2022. All Rights Reserved
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout