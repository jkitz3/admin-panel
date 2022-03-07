import "./App.css";

import Input from "./components/Input/Input";
import Searchbar from "./components/Search-bar/Search-bar";
import Checkboxradio from "./components/Checkbox-radio/Checkbox-radio";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <div className="ui-kit">
      <Input />
      <Searchbar />
      <Checkboxradio />
      <Button />
      <Dropdown />
    </div>
  );
}

export default App;
