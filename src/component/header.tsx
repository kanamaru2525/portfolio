import { Flex } from "@yamada-ui/react"
import Navi from "./Navi"

const Header = () => {
    return (
    <Flex  justifyContent="flex-end" position="fixed" w="100%">
        <Navi href="/"title="About"></Navi>
        <Navi href="/portfolio"title="Works"></Navi>
        <Navi href="/portfolio"title="Contact"></Navi>
    </Flex>
    )
  }
  
  export default Header

