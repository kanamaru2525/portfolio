import Navi from "@/component/Navi";
import { Box, Button } from "@yamada-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box _scrollbar={{display:"none"}}>
      <Box h="100vh">
        <Box>
          <Navi href="/portforio"title="日本語"></Navi>
        </Box>
      
      </Box>
      <Box h="100vh">
      
      </Box>     
    </Box>
  )
  };