import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Login/Login";
import {useStateValue} from "./services/StateProvider";

function App() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="app">
            {!user ? (
                <Login/>
            ) : (
                <div className="app__body">
                    <Router>
                        <Sidebar/>
                        <Switch>
                            <Route path='/rooms/:roomId'>
                                <Chat/>
                            </Route>
                            <Route exact path='/'>
                                <h1>Hallo World</h1>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            )}
        </div>
    );
}

export default App;
