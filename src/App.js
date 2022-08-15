import Container from "@mui/material/Container";

import { Header } from "./components";
import { AppRouter } from "./components/AppRouter/AppRouter";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <AppRouter />
      </Container>
    </>
  );
}

export default App;
