import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import Partenaires from "@/pages/partenaires";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/partenaires" component={Partenaires} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
