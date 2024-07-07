import "./App.css";

let name = "Sabita";

function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
      </nav>

      <div className="container">
        <h1>Hello {name}</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque
        rerum doloremque et sed aperiam ad cumque, cupiditate quos voluptatum
        illum, est aliquid pariatur nihil! In officia enim alias minus? 
      </div>
    </>
  );
}

export default App;
