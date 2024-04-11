import { Flex } from "@yamada-ui/react"
import Navi from "./Navi"

const Header = () => {
    return (
    <Flex  justifyContent="flex-end" position="fixed" w="100%">
        <Navi href="/"title="About"></Navi>
        <Navi href="/portforio"title="Works"></Navi>
        <Navi href="/portforio"title="Contact"></Navi>
    </Flex>
    )
  }
  
  export default Header

