import Search from "./components/Search/Search";
import classes from './App.module.css';
function App() {
  return (
    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Search  />
    </div>
  );
}

export default App;
