import "./App.css";
import PurpleContainer from "./components/Pagecontainer/purple-container/Purple-container";
import ApparelPage from "./pages/ApparelPage";
import WrapperCenter from "./wrapper/WrapperCenter/WrapperCenter";

function App() {
  return (
    <div>
      <WrapperCenter>
        <ApparelPage />
      </WrapperCenter>
    </div>
  );
}

export default App;
