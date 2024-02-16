import { Flex } from "rebass";
import { Outlet } from "react-router-dom";

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
      <Outlet />
    </Flex>
  );
};

export default App;
