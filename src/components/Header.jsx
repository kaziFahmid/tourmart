import { Box, Container } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  return (
   <Box sx={{background:'#17202C',py:{xs:5,sm:2}}}>
<Container  sx={{display:'flex',justifyContent:'space-between',alignItems:"center"}}>
    <Box sx={{display:{xs:'block',sm:"none"}}}>
        
        <img src='https://i.ibb.co/6BhNM03/logo.png' style={{width:"200px"}}  />
    </Box>
<Box sx={{display:{xs:'none',sm:"block",width:"330px"}}} >
<img src='https://i.ibb.co/tY1YZDm/ss.png' style={{width:"100%"}}  />
</Box>
<Box>
   <MenuIcon sx={{color:'white',fontSize:"50px",display:{xs:' block',sm:"none"}}}/>
</Box>
</Container>
   </Box>
  )
}

export default Header