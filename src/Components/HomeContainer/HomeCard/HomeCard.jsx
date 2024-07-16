import { Link } from "react-router-dom";

const HomeCard = ({ data }) => {
    const { img, title, id, link } = data;


    return (
        <div >
            <Link to={`${link}`}>
                <div className=" transform hover:scale-105 duration-200 hover:border-green-500 flex  flex-col justify-between items-center  text-center h-64 p-8 border-t-8 rounded-2xl border-[#0f79b9]  shadow-2xl space-y-2">
                    <h2 className="font-semibold text-xl">{title}</h2>
                    <img className="w-56" src={img} alt="" />
                </div>
            </Link>
        </div>
    );
};

export default HomeCard;