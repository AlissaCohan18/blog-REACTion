import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //define state
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

const [name, setName] = useState ('mario');

  //useEffect: a hook that\ runs a function every time a component is rendered (incl when the state changes)
useEffect(() => {
 fetch('http://localhost:8000/blogs')
 .then(res => {
  return res.json();
 })
 .then(data => {
  setBlogs(data);
 });
 //can add a dependency array to specify when to run function (vs every render)
 //note: empty array will only run function on initial render
 }, []);
//added 'name' as a dependency, so will run function at initial render and when state 'name' changes
//}, [name]);

  return (
    <div className="home">
      {/* Note: BlogList is the child component; Home is the parent component where blogs are declared */}
      {/* Props, short for properties is what will allow a child component to access data from the parent */}

{/* Note: add curly brackets to notate using javaScript; add blogs && to evaluate when blogs (is not null) AND...
  since blogs starts as null per code above and would error out on initial load w/o 'AND' evaluation*/}
      {blogs && <BlogList blogsProp={blogs} titleProp="All Blogs!" handleDelete={handleDelete} />}

      {/* example of showing filtered data/props */}
      {/* <BlogList blogsProp={blogs.filter((blog) => blog.author === 'mario')} titleProp="Mario's Blogs!" /> */}
      <button onClick={() => setName('luigi')}> change name </button>
      <p> {name} </p>
    </div>
  );
};

export default Home;
