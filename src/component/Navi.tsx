import { Box, Link } from "@yamada-ui/react"
import { title } from "process"

interface Naviprps {
    href: string
    title: string
  }

const Navi = ({href,title}:Naviprps) => {
    return (
      <Link fontWeight="medium" color="#7AA2E3" fontSize="40px" href={href} _hover={{ color: "#97E7E1" }}>{title}</Link>
      
    )
  }
  
  export default Navi