import React from 'react'
import Header from './components/Header'
import FlightSearchBox from './components/FlightSearchBox'
import { Box, Container, Typography } from '@mui/material'

const Home = () => {
  return (
    <>
    <Box className='bg' sx={{ bgcolor:{xs:"#17202C",sm:""}, backgroundImage: {xs:'',sm:'url(https://media.licdn.com/dms/image/D5622AQEXZiFxL4zCtw/feedshare-shrink_20/0/1710237576344?e=1723075200&v=beta&t=Rce9g76Gmu1DBrLpzGohcGNqIaAUdbgpOB2KEkv_-GQ)'},
  backgroundPosition: 'center',
  backgroundRepeat:' no-repeat',
  backgroundSize: 'cover',pb:20}}>
    <Header/>
    <Box sx={{pt:{xs:4,sm:11},}}>
        <Container>
      <Typography sx={{color:'white',fontWeight:{xs:500,sm:''},fontSize:{xs:"28px",sm:"34px"}}}>
      Discover Great Flight Deals .   
      </Typography>
      <Typography sx={{color:'white',mt:{xs:2,sm:0},fontSize:{xs:"14px",sm:"19px"},fontWeight:{xs:500,sm:''}}}>
      Book your Flight, Hotels and Desire Holiday Packages
      </Typography>
        </Container>
    </Box>
    <FlightSearchBox/>
    </Box>
    
    </>
  )
}

export default Home