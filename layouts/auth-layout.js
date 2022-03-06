
const AuthLayout = ({children}) => {
    return(
        <>
            <div className="flex flex-wrap justify-center h-screen">
                <div className="bg-gray-700 w-full lg:w-6/12 h-screen hidden lg:block"></div>
                <div className="bg-white w-full sm:w-8/12 lg:w-6/12 min-h-screen flex flex-col">
                    <div className="flex-1 w-full overflow-auto">
                        {children}
                    </div>
                    <div className="px-32 text-center text-sm text-gray-400 border-t-1 border-gray-100 py-16">
                        &copy; 2022. All Rights Reserved
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout