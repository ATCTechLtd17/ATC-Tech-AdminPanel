

const SubmitButton = (onClick) => {
  return (
    <div className="w-full flex justify-center  mt-24 mb-24">
      <button onClick={onClick} className="bg-sky-600 hover:bg-gray-400 px-20 py-2 rounded font-medium     text-white">
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;