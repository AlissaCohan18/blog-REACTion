// const BlogList = (props) => {
//   const blogs = props.blogsProp;
//   console.log(props, blogs);
//   const title = props.titleProp;

//   return (
//     <div className="blog-list">
//       <h2>{ title }</h2>
//       {/* similar to a forEach loop */}
//       {blogs.map(blog => (


// Can also destructure to reduce code/const declarations:
const BlogList = ({ blogsProp, titleProp}) => {
  return (
    <div className="blog-list">
      <h2>{ titleProp }</h2>
      {/* similar to a forEach loop */}
      {blogsProp.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;