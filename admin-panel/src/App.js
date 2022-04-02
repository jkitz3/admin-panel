import "./App.css";

import { Input } from "./components/Input/Input";
import SearchBar from "./components/SearchBar/SearchBar";
import CheckboxRadio from "./components/CheckboxRadio/CheckboxRadio";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <div className="ui-kit">
      <Input />
      <SearchBar />
      <CheckboxRadio />
      <Button />
      <Dropdown />
    </div>
  );
}

export default App;
