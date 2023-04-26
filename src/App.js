import { makeStyles } from "@material-ui/core";
 import { BrowserRouter ,Route } from "react-router-dom";
 import CoinPage from "./Pages/CoinPage";
 import './App.css';
import Header from './components/Header';
import Homepage from "./Pages/Homepage";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
        </div>
    </BrowserRouter>
  );
}
 
export default App;
