import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
const Blogs = ({ Bookmark, RemoveBook, state }) => {
    const [allBlogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }
        , []);

    // const passbuk = () => {
    //     buk(allBlogs)
    // }

    return (

        <div className="container w-2/3 m-auto pt-10">
            <h1>Total blogs: {allBlogs.length}</h1>
            {
                allBlogs.map(i => <Blog state={state} key={i.id} blog={i} Bookmark={Bookmark} RemoveBook={RemoveBook}></Blog>)
            }
        </div>
    );

};
export default Blogs;