import Navi from "@/component/Navi";
import { Box, Button, Flex } from "@yamada-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box _scrollbar={{display:"none"}}>
        <Flex  justifyContent="flex-end" position="fixed" w="100%">
          <Navi href="/portforio"title="日本語1"></Navi>
          <Navi href="/portforio"title="日本語2"></Navi>
          <Navi href="/portforio"title="日本語3"></Navi>
        </Flex>
      <Box h="100vh" bg="#F8F6E3">      
      </Box>
      <Box h="100vh">
      
      </Box>     
    </Box>
  )
  };