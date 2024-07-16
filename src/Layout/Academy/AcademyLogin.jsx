
const AcademyLogin = () => {
    return (
        <div className=" w-full h-screen">

            <section className="py-10   bg-gradient-to-b from-[#bfe5f7] to-white w-full ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-52" src="./../../../public/ATC_Logo/ATC logo-02.png" alt="" />
                        <h2 className=" font-normal leading-tight   lg:text-xl badge p-5 bg-[#0F79B9] text-white border-none"> Academy Admin Panel</h2>
                    </div>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Login to your account</p>
                    </div>
                    <div className="relative max-w-md mx-auto mt-8 md:mt-8">
                        <div className="overflow-hidden bg-white rounded-md shadow-md">
                            <div className="px-4 py-6 sm:px-8 sm:py-7">
                                <form action="#" method="POST">
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="email" className="text-base font-medium text-gray-900"> Email address </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Enter email to get started"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="text-base font-medium text-gray-900"> Password </label>

                                                <a href="#" title="" className="text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline"> Forgot password? </a>
                                            </div>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                        />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Enter your password"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#0F79B9] border border-transparent rounded-md focus:outline-none hover:bg-emerald-600 ">
                                                Log in
                                            </button>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-base text-gray-600">Don’t have an account? <a href="#" title="" className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Create a free account</a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcademyLogin;