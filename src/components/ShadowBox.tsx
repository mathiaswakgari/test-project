import { ReactNode } from "react";
import { Flex } from "rebass";

interface Props {
  children: ReactNode;
}

const ShadowBox = ({ children }: Props) => {
  return (
    <Flex
      flexDirection={"column"}
      maxHeight={"350px"}
      width={[1, 1 / 1.5, 1 / 1.5, 1]}
      paddingX={4}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      {children}
    </Flex>
  );
};

export default ShadowBox;
