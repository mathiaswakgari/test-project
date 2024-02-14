import { Box, Text, Flex } from "rebass";
import AddButton from "./AddButton";

const NavBar = () => {
  return (
    <Box
      css={{
        borderBottom: "solid 2px gray",
      }}
      width={1}
      height={"50px"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          All Songs
        </Text>
        <AddButton />
      </Flex>
    </Box>
  );
};

export default NavBar;
