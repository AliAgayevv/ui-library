import Button from "./components/Button";
import { ModeToggle } from "./components/mode-toogle";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vie-ui-theme">
      <main className=" ">
        <div className="w-full justify-center items-center flex">
          <ModeToggle />
        </div>
        <div className="flex justify-center items-center mt-24">
          <div className="flex gap-4 ">
            <Button variant={"primary"}>Submit</Button>
            <Button variant={"default"} shape={"pill"}>
              Default
            </Button>
            <Button variant={"destructive"}>Cancel</Button>
            <Button variant={"warning"}>Warning</Button>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
