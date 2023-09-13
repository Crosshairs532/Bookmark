
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Header from './component/header/Header'
import Book from './component/Bookmarks/Book'
import { useEffect, useState } from 'react'
import { addlocal, getstored } from './utilitites/local'
// import Blog from './component/blog/Blog'
function App() {
  const [books, setBooks] = useState([])
  const Bookmark = (blog) => {
    const newarr = [...books, blog]
    setBooks(newarr)
    addlocal(blog.id)
  }

  const RemoveBook = (blog) => {
    const arr = books.filter(i => i.id == blog.id ? '' : i)
    setBooks(arr)
  }
  const [state, setState] = useState(true)
  const handletheme = () => {
    setState(!state)
  }
  // const main_book = (buk) => {
  //   var bu = buk
  // }
  // useEffect(() => {
  //   if (bu.length > 0) {
  //     const get = getstored();
  //     const arr = []
  //     for (const i of get) {
  //       const filterd = books.find(bo => bo.id == i);
  //       if (filterd) {
  //         arr.push(filterd);

  //       }
  //     }
  //     setBooks(arr)


  //   }


  // }, [bu])
  return (
    <>
      <Header count={books.length} handletheme={handletheme} state={state}></Header>
      <div className='flex container m-auto'>
        <Blogs Bookmark={Bookmark} RemoveBook={RemoveBook} state={state}></Blogs>
        <Book Books={books} state={state} ></Book>
      </div>
    </>
  )
}

export default App
