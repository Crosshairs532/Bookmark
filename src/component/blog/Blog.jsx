const Blog = ({ blog, Bookmark, RemoveBook, state }) => {
    const { cover, author, title, posted_date, hashtags, reading_time } = blog;
    // console.log(cover, author, title, posted_date, hashtags, reading_time);
    return (
        <div className={`w-[800px] mb-[70px] shadow-md p-4 rounded-lg ${state ? 'bg-[#2b6777] text-white' : 'bg-[white] text-[#2b6777]'}`}>
            <img className="w-full mb-8 rounded-xl" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src='https://i.ibb.co/N36QdQv/profile.png' alt="" />
                    <div className="">
                        <h1 className="font-semibold text-2xl">{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="">
                    <h1 className="">{reading_time} min read</h1>
                    <button onClick={() => Bookmark(blog)}>Book</button>
                </div>
            </div>
            <h1 className="text-4xl font-bold mt-4">{title}</h1>
            <div className="flex gap-3">
                {
                    hashtags.map((i, idx) => <p key={idx}>#{i}</p>)
                }
            </div>
            <button onClick={() => RemoveBook(blog)} className="underline">Mark as read</button>
        </div>
    );
};

export default Blog;