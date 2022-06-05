import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import style from "./Sidebar.module.css";
import {
  HamburgerIcon,
  AddIcon,
  UnlockIcon,
  TimeIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";

// verbose

const Sidebar = () => {
  return (
    <Flex>
      <Box width="20%" height="600px" backgroundColor="white">
        <Box m="20px">
          
          <h2><HamburgerIcon/> Logo</h2>
        </Box>
        <Flex direction="column" p="40px" className={style.items}>
          <Box>
            <p> <AddIcon/> Home</p>
          </Box>
          <Box>
            <p> <UnlockIcon /> Trending</p>
          </Box>
          <Box>
            <p><TimeIcon /> Explore</p>
          </Box>
          <Box>
            <p><StarIcon /> Favourite</p>
          </Box>
          <Box>
            <p><WarningIcon/>Settings</p>
          </Box>
        </Flex>
      </Box>
      <Box width="80%" height="600px" backgroundColor="gray"></Box>
    </Flex>
  );
};

export default Sidebar;
