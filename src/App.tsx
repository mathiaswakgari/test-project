import { Flex } from "rebass";
import SongsPage from "./pages/SongsPage";

const App = () => {
  return (
    <Flex
      alignItems={"center"}
      flexDirection={"column"}
      css={{
        backgroundImage: "linear-gradient(50deg, #34c0eb, #0fa38e)",
      }}
      height={"100vh"}
      fontFamily={"Open Sans"}
    >
      <SongsPage />
    </Flex>
  );
};

export default App;
