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
      <Header />
      <Flex h="50vh" bg="#B9C0CC" justifyContent="center" alignItems="center" flexDirection="column" display="flex"> 
          <Text fontSize="96px"fontWeight="black"color="white" borderBottom="solid">
            Works
          </Text>
      </Flex> 
      <Center>
      <Grid templateColumns="repeat(2, 1fr)" gap={"md"} margin="5vh" w="65vw">

        <GridItem w="full" h="45vh"  bg="#D9D9D9" >
            <WorksContents title="サークル新人歓迎ポスター作成" pic="/images/poster-TRPG.png" product_time="2023年3月頃:1週間" 
            article="4月頭の部活動・サークル活動紹介オリエンテーション用に作成したポスター$n世間一般のTRPGのイメージであるクトゥルフ神話TRPGのメインカラーが緑なので、大きく緑色を使用した。視点の方向を意識し、Z方向に視線を誘導するように文字を配置した。">

            </WorksContents>
        </GridItem>        
        <GridItem w="full" h="45vh"  bg="#D9D9D9" >
        <WorksContents title="市役所発表向けポスターの作成" pic="/images/poster-PD.png" product_time="2023年11月頃1週間" article="記事を書く" />
        </GridItem>
        <GridItem w="full" h="45vh"  bg="#D9D9D9" >
          <WorksContents title="プロジェクト新人歓迎ポスター作成" pic="/images/poster-project.png" product_time="2022年" article="記事を書く" />
        </GridItem>    
        <GridItem w="full" h="45vh"  bg="#D9D9D9" >
          <WorksContents title="プロジェクト新人歓迎動画作成" pic="/images/MV.png" product_time="2022年" article="記事を書く$nhttps://youtu.be/gtCcKbqwJx8?t=193" />
        </GridItem>
      </Grid>
      </Center>
      
      </Box>
      <Footer />
    </div>
  )
  };

