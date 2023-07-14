import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
    name = "Ankit Singh";
    render() {
        return(
            <>
                <div>
                    <h1>This is {this.name}!</h1>
                </div>
                <div>
                    <p>This is paragraph and name is: {this.name}</p>
                </div>
            </>
        );
    }
}

export default App;
