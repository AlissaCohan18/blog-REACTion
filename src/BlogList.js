// const BlogList = (props) => {
//   const blogs = props.blogsProp;
//   console.log(props, blogs);
//   const title = props.titleProp;

//   return (
//     <div className="blog-list">
//       <h2>{ title }</h2>
//       {/* similar to a forEach loop */}
//       {blogs.map(blog => (


//  Can also destructure to reduce code/const declarations:
//  Note: can pass in function (handleDelete) as a Prop and will be invoked when delete button pressed to 
// then alter the blogs which is captured on the homepage
const BlogList = ({ blogsProp, titleProp, handleDelete}) => {
  return (
    <div className="blog-list">
      <h2>{ titleProp }</h2>
      {/* similar to a forEach loop */}
      {blogsProp.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;