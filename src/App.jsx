import { useRoutes } from "react-router-dom";
import Routing from "./routes";

function App() {
  let routes = useRoutes(Routing)
  return routes
}

export default App;
