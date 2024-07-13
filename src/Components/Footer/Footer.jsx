const Footer = () => {
    return (
        <footer className="py-6 bg-[#3a3a3a] text-white mt-20">
            <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium hover:cursor-pointer">USA Office</p>
                        <ul>
                            <li>
                                <p className="hover:text-blue-400 hover:cursor-pointer">404, Shatto Pl, Suite # 506,<br />
                                    Losangeles, CA 90020.
                                </p>
                            </li>
                            <li>
                                <p className="hover:text-blue-400 hover:cursor-pointer"> Email:
                                    atctechltdusa@gmail.com
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium hover:cursor-pointer">Dubai Office</p>
                        <ul>
                            <li>
                                <p className="hover:text-blue-400 hover:cursor-pointer">Central
                                    Building, Shop No. G-11,<br /> Naif,
                                    Deira, Dubai, UAE.
                                </p>
                            </li>
                            <li>
                                <p className="hover:text-blue-400 hover:cursor-pointer"> Email:
                                    atctechlimited@gmail.com
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium hover:cursor-pointer">Bangladesh Office</p>
                        <ul>
                            <li>
                                <p className="hover:text-blue-400 hover:cursor-pointer">Email: support@atctechltd.com</p>
                            </li>
                        </ul>
                    </div>

                    <div className="pb-6 md:pb-0 md:col-span-3 col-span-12 flex flex-col md:flex-row justify-around items-center">
                        <img className="w-48" src="/public/ATC_Logo/ATC-Logo-white.png" alt="ATC Logo" />
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6 hover:cursor-pointer">
                        <span>©2024 All rights reserved | ATC Tech Ltd </span>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/atc-tech-ltd17/" title="LinkedIn"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F79B9] dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"
                                className="w-5 h-5">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/@ATCTechLtd17" title="Youtube"
                            className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 bg-[#0F79B9] dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"
                                className="w-5 h-5">
                                <path
                                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/ATCTechLtd17/" title="Facebook"
                            className="flex items-center justify-center w-10 h-10 rounded-full sm:w-10 sm:h-10 bg-[#0F79B9] dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"
                                className="w-5 h-5">
                                <path
                                    d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z">
                                </path>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/atctechltd17" title="X"
                            className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-[#0F79B9] dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"
                                className="h-5 w-5">
                                <path
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
