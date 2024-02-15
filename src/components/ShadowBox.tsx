import { ReactNode } from "react";
import { Flex } from "rebass";

interface Props {
  children: ReactNode;
}

const ShadowBox = ({ children }: Props) => {
  return (
    <Flex
      flexDirection={"column"}
      minHeight={"220px"}
      width={"400px"}
      paddingX={4}
      bg={"white"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      css={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {children}
    </Flex>
  );
};

export default ShadowBox;
