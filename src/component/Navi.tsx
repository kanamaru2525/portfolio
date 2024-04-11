import { Box, Link } from "@yamada-ui/react"
import { Noto_Sans_JP } from 'next/font/google'

interface Naviprps {
    href: string
    title: string
  }

  const notojp = Noto_Sans_JP({
    weight: ["400", "500"],
    subsets: ["latin"],
    variable: "--font-notojp",
    display: "swap",
  });

const Navi = ({href,title}:Naviprps) => {
    return (
      
      <Link 
        fontFamily="notojp" 
        fontWeight="black" 
        fontSize="40px" 
        color="#141414" 
        _hover={{ color: "#FF9567" }} 
        
        marginRight="25px"
        marginLeft="25px"
        paddingTop="5"

        href={href}
        >
          {title}
        </Link>
      
    )
  }
  
  export default Navi