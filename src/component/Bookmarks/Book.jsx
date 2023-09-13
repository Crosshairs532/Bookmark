import BB from "./BB";
const Book = ({ Books, state }) => {
    console.log(Books, 'loll')
    return (

        <div className={`flex ${state ? 'bg-[#f2f2f2] text-[#2b6777]' : 'bg-[#2b6777] text-[#f2f2f2]'} w-1/3 rounded-lg mt-10 flex-col items-center`}>
            <h1 className="text-3xl font-bold">All Bookmarks</h1>
            {
                Books.map((i, idx) => <BB key={idx} i={i}></BB>)
            }
        </div>
    );
};

export default Book;