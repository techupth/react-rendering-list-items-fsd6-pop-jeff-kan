import "./App.css";
import { MoviesList } from "./MovieList";

function App() {
  return (
    <div className="App">
      <section className="p-10">
        {/* Render Movie Lists Here */}
        <h1 className='flex items-center justify-center text-black text-5xl m-5'>Movie List Section</h1>
        <MoviesList />
      </section>
    </div>
  );
}

export default App;
