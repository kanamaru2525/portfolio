import Navi from "@/component/Navi";
import { Box, Button, Flex,Text } from "@yamada-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box _scrollbar={{display:"none"}}>
        <Flex  justifyContent="flex-end" position="fixed" w="100%">
          <Navi href="/portforio"title="About"></Navi>
          <Navi href="/portforio"title="Works"></Navi>
          <Navi href="/portforio"title="Contact"></Navi>
        </Flex>
      <Flex h="100vh" bg="#B9C0CC" justifyContent="center" alignItems="center" display="flex">   
          <Text fontSize="128px">Kanamaru</Text>
          <Text fontSize="128px">Taisei</Text>
      </Flex>
      <Box h="100vh">
      
      </Box>     
    </Box>
  )
  };