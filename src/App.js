import Navbar from './Navbar'
import Home from './Home'

function App() {
  // const title = "Welcome to the new blog";
  // const likes = 50;
  // const link = "http://www.google.com"
  // const user = {name: "yoshi", age: 25}

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
      {/* <h1>{title}</h1>
      <p>Liked {likes} times</p>
      
    <p>Welcome {user.name} </p>
    <a href={link}> Google Site </a> */}
    </div>
    </div>
  );
}

export default App;
