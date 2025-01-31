import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {useColorMode} from "./ui/color-mode.jsx"
import { IoMoon } from "react-icons/io5";
import { LiaPlusSquareSolid } from "react-icons/lia";
import { LuSun } from "react-icons/lu";



const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()  
  return (
    <Container maxW={"1140px"} px={4}  >
      <Flex h={20}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row",
        }} 
      >
        <Text 
          fontSize = {{base:"22px", sm:"28px"}}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"to-r"} gradientFrom={"blue.400"} gradientTo={"purple.500"}
          bgClip={"text"}
          
        >
          <Link to={"/"}>CooOOooL ST 𓆉 </Link>


        </Text>
        <HStack spacing={"2"} alignItems={"center"} >
          <Link to={"/create"}>
            <Button variant="outline"  >
            <LiaPlusSquareSolid fontSize={"18"}/>
            </Button>
            
          </Link>
          <Button variant="outline"    onClick={toggleColorMode}>{colorMode==="light"? <IoMoon /> : <LuSun  size="sm" />}
          </Button>

          


        </HStack>
      </Flex>



    </Container>)
}

export default Navbar;