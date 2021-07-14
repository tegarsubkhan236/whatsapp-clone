import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="app">
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
        </div>
    );
}

export default App;
