import formatString from "../Helper/TextFormatting";


const HeadingPrimary = ({text}) => {
    return (
        <h1 className="text-xl font-bold text-start max-w-5xl mx-auto pt-4 border-b-2 pb-2">
            {text? formatString(text): null}
        </h1>
    );
};

export default HeadingPrimary;