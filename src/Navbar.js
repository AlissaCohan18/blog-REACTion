const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">
        <a href="/">Home</a>
 {/* Ex of in-line sytle CSS. Note: double {{}} where inside is object */}
   <a href="/create" style={{
            color: "white",
            backgroundColor: '#f1356d',
            borderRadius: '8px'
        }}>New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
