import logo from "./logo.svg";
import "./App.css";
function mainDpFunction() {
    this.getData = function (fname) {
        if (fname === "Jason") return 20000;
        else if (fname === "DEF") return 5000;
        else return 0;
    };
}
  
function proxyDpFunction() {
    let object_1 = new mainDpFunction();
    let result_object = {};
    return {
        getData: function (fname) {
            if (!result_object[fname]) {
                result_object[fname] = object_1.getData(fname);
            }
            console.log(fname + ": " + result_object[fname]);
            return result_object[fname];
        },
    };
}
  
function mainFunction() {
    let main_object = new proxyDpFunction();
    main_object.getData("Jason");
    main_object.getData("Samoa");
    main_object.getData("Hightenford");
}
  
mainFunction();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit for the Hacktoberfest 2022 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
main
        </a>
      </header>
    </div>
  );
}

export default App;
