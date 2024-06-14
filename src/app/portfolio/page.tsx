'use client'
import Footer from "@/component/footer";
import Header from "@/component/header";
import WorksContents from "@/component/WorksContents";
import { Box, Center, Flex, Grid, GridItem, Image,Modal as ModalComponent, ModalBody, ModalFooter, ModalHeader,Text, Button} from "@yamada-ui/react";
import { useDisclosure } from "@yamada-ui/react"
import React  from "react"


export  function Portfolio() {
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
        <WorksContents title="市役所発表向けポスターの作成" pic="/images/poster-PD.png" product_time="2023年11月頃:1週間" 
        article="市役所と協力し、地域の課題解決を行う授業の中で解決策発表用に作成したポスター$n青色は知的なイメージがあるため、青を基調しアクセントカラーとして黄色を用いた。上から順序経って結論まで提示するようなデザインにした。" />
        </GridItem>
        <GridItem w="full" h="45vh"  bg="#D9D9D9" >
          <WorksContents title="プロジェクト新人歓迎ポスター作成" pic="/images/poster-project.png" product_time="2024年3月:3日" 
          article="4月に学内プロジェクトの合同説明会があるということで、プロジェクトより作成を依頼されたポスター$nプロジェクトの意向によって、明るいイメージを出すため、赤を基調とした。サークル用に作成したポスターの評判が良かったため、構図を再利用した。" />
        </GridItem>    
        <GridItem w="full" h="45vh"  bg="#D9D9D9" >
          <WorksContents title="プロジェクト新人歓迎動画作成" pic="/images/MV.png" product_time="2024年2月:1か月" 
          article="https://youtu.be/gtCcKbqwJx8?t=193 $n 学校より、プロジェクトの紹介動画を作成せよとの通達があったために作成。DaVinci Resolveをこの時まで触ったことがなかったが、動画作成方法を覚えた。また、この動画は見やすいように話者が話した内容を要約した字幕を付けた。" />
        </GridItem>
      </Grid>
      </Center>
      
      </Box>
      <Footer />
    </div>
  )
  };

