import Button from "./components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
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
        <hr className="my-24" />
        <div className="m-6">
          <Card variant="raised">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                This is a description for the card.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li>This 1. </li>
                <li>This 2. </li>
                <li>This 3. </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="primary">Action</Button>
            </CardFooter>
          </Card>
          <Card variant="inset">
            <h1>Hello inset</h1>
          </Card>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
