const Navbar = () => {
  return (
    <nav className="flex justify-between p-2 bg-blue-50">
      <p>sTech Overflow</p>
      <div className="flex gap-3">
        <button>Jobs</button>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
