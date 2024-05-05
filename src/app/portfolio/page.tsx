'use client'
import Footer from "@/component/footer";
import Header from "@/component/header";
import WorksContents from "@/component/WorksContents";
import { Box, Center, Flex, Grid, GridItem, Image,Modal as ModalComponent, ModalBody, ModalFooter, ModalHeader,Text, Button} from "@yamada-ui/react";
import { useDisclosure } from "@yamada-ui/react"
import React  from "react"


export default function Portfolio() {
  const {isOpen,onOpen,onClose} = useDisclosure();
  
  return (
    <div>
      <Box _scrollbar={{display:"none"}} fontFamily="notojp">
      <Header></Header>
      <Flex h="50vh" bg="#B9C0CC" justifyContent="center" alignItems="center" flexDirection="column" display="flex"> 
          <Text fontSize="96px"fontWeight="black"color="white" borderBottom="solid">
            Works
          </Text>
      </Flex> 
      <Center>
      <Grid templateColumns="repeat(2, 1fr)" gap={"md"} margin="5vh" w="65vw">

        <GridItem w="full" h="45vh"  bg="#D9D9D9">
            <WorksContents title="テスト" pic="/images/me.jpg" article="記事を書く"></WorksContents>
          </GridItem>        
        <GridItem w="full" h="45vh"  bg="#D9D9D9">
          <WorksContents title="テスト" pic="/images/me.jpg" article="記事を書く"></WorksContents>
        </GridItem>
        <GridItem w="full" h="45vh"  bg="#D9D9D9"></GridItem>
        <GridItem w="full" h="45vh"  bg="#D9D9D9"></GridItem>
        <GridItem w="full" h="45vh"  bg="#D9D9D9"></GridItem>
        <GridItem w="full" h="45vh"  bg="#D9D9D9"></GridItem>
      </Grid>
      </Center>
      
      </Box>
      <Footer></Footer>
    </div>
  )
  };

