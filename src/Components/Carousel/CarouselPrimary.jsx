import img1 from '/public/banner/hacker-dark-room-image.jpg'
import img2 from '/public/banner/robot-working-office-instead-humans.jpg'

const CarouselPrimary = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const slider = document.querySelector('#slider');
        setTimeout(function moveSlide() {
            const max = slider.scrollWidth - slider.clientWidth;
            const left = slider.clientWidth;

            if (max === slider.scrollLeft) {
                slider.scrollTo({ left: 0, behavior: 'smooth' })
            } else {
                slider.scrollBy({ left, behavior: 'smooth' })
            }

            setTimeout(moveSlide, 1000)
        }, 1000)

    })

    return (
        <>
            <div className=" w-full h-full  rounded  ">
                <div className="navbar  rounded-md bg-[#bfe5f7]  flex flex-col md:flex-row ">
                    <div className="flex-1 ">
                        <div className="flex items-center ">
                            <img className="w-36" src="/ATC_Logo/ATC logo-02.png" alt="" />
                            <p className=" text-xl font-medium badge border-none p-4 bg-[#0F79B9] text-white"> Admin Panel</p>
                        </div>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Link</a></li>
                            <li>
                                <details>
                                    <summary>Parent 2</summary>
                                    <ul className="bg-base-100 rounded p-2">
                                        <li><a>Link 1</a></li>
                                        <li><a>Link 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Parent 3</summary>
                                    <ul className="bg-base-100 rounded p-2">
                                        <li><a>Link 1</a></li>
                                        <li><a>Link 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className=' m-4 mt-0 pt-16'>
                {/* <!-- HERO Section --> */}
                <section className="flex  items-center justify-center z-10 min-h-[400px]  md:min-h-[400px] ">
                    <div className="md:max-w-7xl md:mx-auto w-full text-center space-y-4">
                        <h2 className="md:text-6xl text-2xl ">
                            <span className="font-light">Innovate,</span>
                            <span className="font-bold text-[#0f79b9]">Create</span>
                            <span className="font-light">, Elevate</span>
                        </h2>
                        <h2 className="md:text-6xl text-xl font-bold">
                            Your Digital Journey Starts Here.
                        </h2>
                        <div
                            className="flex gap-4 justify-center items-center text-xs md:text-lg py-2 md:py-4 divide-x-2 md:min-h-28  ">
                            <h3 className="">7+ years experience</h3>

                            <h3 className="pl-4">Leading with Innovation</h3>
                        </div>
                        {/* <a href="#contact">
                        <button className=" btn-md text-white bg-[#0f79b9] hover:bg-gray-500 md:text-xl md:font-semibold p-2 md:px-4 md:py-3 rounded-lg shadow-xl 
                          flex gap-2 items-center mx-auto ">Contact
                            Us </button>
                    </a> */}
                    </div>
                </section>


                {/* carosel */}
                {/* <section className="  relative  w-full rounded-md -z-0 ">
                <div id="slider" className=" rounded-md h-[510px]  md:h-[500px] w-full overflow-hidden flex flex-nowrap text-center" itemID='slider' id="slider">
                    <div className=" flex-none w-full flex flex-col items-center justify-center">
                        <img src={img1} alt="" />
                    </div>

                    <div className=" flex-none w-full flex flex-col items-center justify-center">
                        <img src={img2} alt="" />
                    </div>
                </div>
            </section> */}
                {/* carousel */}
            </div >
        </>

    );
};

export default CarouselPrimary;