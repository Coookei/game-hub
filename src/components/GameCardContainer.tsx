import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{ transform: "scale(1.03)", transition: "transform .12s ease-in" }}
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
