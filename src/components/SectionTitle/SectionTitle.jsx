 
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="w-3/12  text-center mx-auto my-10">
            <p className="text-yellow-500 mb-2 italic"> --- {subHeading} --- </p>
            <h3 className="border-y-4 py-3 uppercase text-3xl"> {heading} </h3>
        </div>
    );
};

export default SectionTitle;