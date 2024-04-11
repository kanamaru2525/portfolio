import Header from "@/component/header";
import Navi from "@/component/Navi";
import { Box, Button, Flex,Text } from "@yamada-ui/react";
import { Noto_Sans_JP } from 'next/font/google'

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

export default function Home() {
  return (
    <Box _scrollbar={{display:"none"}} fontFamily="notojp">
      <Header></Header>
      <Flex h="100vh" bg="#B9C0CC" justifyContent="center" alignItems="center" flexDirection="column" display="flex">   
          <Text fontSize="96px"fontWeight="black"color="white" borderBottom="solid">KANAMARU TAISEI</Text>
          <Text fontSize="32px" color="white" margin="25px">A failure to become a creator</Text>
      </Flex>
      <Box h="100vh">
        
      </Box>     
    </Box>
  )
  };