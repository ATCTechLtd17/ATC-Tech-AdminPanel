
import HomeCard from "./HomeCard/HomeCard";
// import acdemy from './../../../public/homeCard/Academy.png'


const data = [
    {
        "img": "/public/homeCard/Academy.png",
        "title": "Academy",
        "id": 1,
        "link": '/academy_login'
    },
    {
        "img": "./../../../public/homeCard/Account.png",
        "title": "Accounts",
        "id": 2,
        "link": '/academy'
    },
    {
        "img": "./../../../public/homeCard/Sales and marketing.png",
        "title": "Sales & Marketing",
        "id": 3,
        "link": '/academy'
    },
    {
        "img": "./../../../public/homeCard/Cyber Security.png",
        "title": "Cyber Security",
        "id": 4,
        "link": '/academy'
    },
    {
        "img": "./../../../public/homeCard/Procurement.png",
        "title": "Procurement",
        "id": 5,
        "link": '/academy'
    },
    {
        "img": "./../../../public/homeCard/Support.png",
        "title": "Support",
        "id": 6,
        "link": '/academy'
    },
    {
        "img": "./../../../public/homeCard/HRM.png",
        "title": "Human Resource Management",
        "id": 7,
        "link": '/academy'
    }
]

// const sup = {
//     "img": "https://example.com/image6.jpg",
//     "title": "Item 6 Title subport",
//     "id": 6
// }

const ContainerHome = () => {
    return (
        <div>
            {/* container */}
            <section className="grid lg:grid-cols-3 md:grid-cols-2 max-w-6xl mx-auto md:gap-14 gap-8">
                {

                    data.map((data, idx) => <HomeCard data={data} key={idx} />)
                }

                {/* <HomeCard data={sup} /> */}
            </section>
        </div>
    );
};

export default ContainerHome;