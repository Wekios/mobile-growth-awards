import { Banner } from "components/Banner";
import { data } from "data";

function App() {
  return (
    <div className="App">
      <Banner {...data} />
    </div>
  );
}

export default App;
