import { Box, Link } from "@yamada-ui/react"
import { title } from "process"

interface Naviprps {
    href: string
    title: string
  }

const Navi = ({href,title}:Naviprps) => {
    return (
      <Link color="black" href={href}>{title}</Link>
    )
  }
  
  export default Navi