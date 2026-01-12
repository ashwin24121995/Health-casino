import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PlayNow from "./pages/PlayNow";
import About from "./pages/About";
import GamesHub from "./pages/GamesHub";
import Mines from "./pages/games/Mines";
import Slots from "./pages/games/Slots";
import Plinko from "./pages/games/Plinko";
import Diamonds from "./pages/games/Diamonds";
import DreamCatcher from "./pages/games/DreamCatcher";

function Router() {
  return (
    <Switch>
      <Route path={"/"}>
        {() => (
          <Layout>
            <Home />
          </Layout>
        )}
      </Route>
      <Route path={"/play-now"}>
        {() => (
          <Layout>
            <PlayNow />
          </Layout>
        )}
      </Route>
      <Route path={"/about"}>
        {() => (
          <Layout>
            <About />
          </Layout>
        )}
      </Route>
      <Route path={"/games"}>
        {() => (
          <Layout>
            <GamesHub />
          </Layout>
        )}
      </Route>
      <Route path={"/game/mines"}>
        {() => <Mines />}
      </Route>
      <Route path={"/game/slots"}>
        {() => <Slots />}
      </Route>
      <Route path={"/game/plinko"}>
        {() => <Plinko />}
      </Route>
      <Route path={"/game/diamonds"}>
        {() => <Diamonds />}
      </Route>
      <Route path={"/game/dreamcatcher"}>
        {() => <DreamCatcher />}
      </Route>
      <Route path={"/404"}>
        {() => (
          <Layout>
            <NotFound />
          </Layout>
        )}
      </Route>
      {/* Final fallback route */}
      <Route>
        {() => (
          <Layout>
            <NotFound />
          </Layout>
        )}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
