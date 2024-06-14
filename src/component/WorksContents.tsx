"use client"
import { Box, Modal as ModalComponent, ModalBody, ModalFooter, ModalHeader, useDisclosure,Text,Image, Center, Flex, List, ListItem, Spacer, Grid, GridItem, Heading, Divider } from "@yamada-ui/react"
import React  from "react"

interface WorksProps {
    title: string
    pic: string
    product_time:string
    article:string
  }

const WorksContents = ({title,pic,product_time,article}:WorksProps) => {
    const {isOpen,onOpen,onClose} = useDisclosure();
    return (
        <>
        <Box as="button" type="button" w="full" h="40vh" rounded="md" bg="#D9D9D9" onClick={onOpen}>
            <Image src={pic}  fallback="/images/test.jpg" alt="me" rounded="md" zoom="0.25" fit="cover" w="full" h="80%" margin="auto"/>
                <Center margin="5% 0" >
                <Heading as="h4"  isTruncated>{title}</Heading>
                </Center>
        </Box>
        <ModalComponent isOpen={isOpen} onClose={onClose} size="full" >
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
                <Grid gap="md" margin="2.5% auto" templateAreas={`
                "b b a a a"
                "b b c c c"
                "b b c c c"`} >
                <GridItem area="a" w="50vw"  >
                    <Heading as="h3" size="lg" isTruncated w="full" borderBottom="solid">製作時期・時間</Heading>
                    <Text>{product_time}</Text>

                </GridItem>

                <GridItem area="b" w="full" minH="4xs"maxH="4xs" >
                    <Image src={pic} alt="me" zoom="0.5"marginRight="5%"/>
                </GridItem>
                <GridItem area="c" w="50vw"  >
                <Heading as="h3" size="lg" isTruncated w="full" borderBottom="solid">作成意図</Heading>
                    <Divider variant="solid" />
                    <Box whiteSpace="pre-line">
                   
                    {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
                    {article.split('$n').map((line, index) => <Text key={index}>{line}</Text>)}
                    </Box>
                </GridItem>
                </Grid>
            </ModalBody>
        </ModalComponent>
        </>
    )
  }
  
  export default WorksContents
