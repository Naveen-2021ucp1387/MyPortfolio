import Navbar from "./components/Navbar";
import Starfield from "./components/Starfield";

function App() {
  return (
    <>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="#000000"
      />
      <Navbar />
    </>
  );
}

export default App;
