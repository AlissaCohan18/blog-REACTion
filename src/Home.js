import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  return (
    <div className="home">

        {/* Note: BlogList is the child component; Home is the parent component where blogs are declared */}
        {/* Props, short for properties is what will allow a child component to access data from the parent */}

      <BlogList blogsProp={blogs} titleProp="All Blogs!" />
      </div>
  );
}
 
export default Home;