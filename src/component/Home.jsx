import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btcf.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
  
        fontSize={{base: "4xl", md: "6xl", lg: "7xl"}} // // Responsive font sizes based on screen breakpoints
        textAlign={"center"}
        fontWeight={"bold"}
        color={"whiteAlpha.700"}
        mt={{ base: "-7", md: "-20" }}// Adjust the marginTop based on screen breakpoints
      >
        CryptoVerse
      </Text >
    </Box>
  );
};

export default Home;
