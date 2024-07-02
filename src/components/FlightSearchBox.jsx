import { Box, Button, ClickAwayListener, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import searchcode from "../assets/code.json";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
const FlightSearchBox = () => {
  const [openDep, setOpenDep] = useState(false);
  const [openOnward, setOpenOnward] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [dep,setDep]=useState("")
  const [onward,setOnward]=useState("")
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAirports = searchcode
    ?.filter(
      (item) =>
        item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 5);

  return (
    <ClickAwayListener onClickAway={()=>{
        setOpenDep(false)
        setOpenOnward(false)
    }}>

  
    <Box sx={{ position: "relative", mt: 5 }}>
        <Container>
        <Box sx={{display:{xs:"flex",sm:"none"},justifyContent:"start",alignItems:'center',gap:"10px",mb:3}}>
                <Button
                  variant="outlined"
                  sx={{
           px:3,
             border:"1px solid #FCAF17",
                    boxShadow: "none",
                    color: "white",
                    textTransform: "capitalize",
                  
                    fontSize: "13px",
                    borderRadius: "50px",
                  }}
                >
                  Flight
                </Button>
                <Button
       
                  sx={{
       
                           boxShadow: "none",
                           color: "white",
                           textTransform: "capitalize",
                         
                           fontSize: "13px",
                           borderRadius: "50px",
                         }}
                >
                  Hotel
                </Button>
                <Button

                  sx={{
                   
                           boxShadow: "none",
                           color: "white",
                           textTransform: "capitalize",
                         
                           fontSize: "13px",
                           borderRadius: "50px",
                         }}
                >
                  Airport Taxi
                </Button>
                <Button
                 
                  sx={{
                    
                           boxShadow: "none",
                           color: "white",
                           textTransform: "capitalize",
                         
                           fontSize: "13px",
                           borderRadius: "50px",
                         }}
                >
                  Tour
                </Button>
              </Box>
        </Container>
      <Box sx={{ position: "absolute", width: "100%" }}>
        <Container>
          <Box
            sx={{
              bgcolor: "white",
              boxShadow:5,
              border: "2px solid #FCAF17",
              borderRadius: "10px",
              pt:{xs:0.2,sm: 2.5},
              pb: 5,
            }}
          >
            <Container>
              <Box sx={{display:{xs:"none",sm:"block"}}}>
                <Button
                  variant="contained"
                  sx={{
                    '&:hover': {
                        bgcolor: '#FCAF17',  // Change background color on hover
                        color: "#17202C",
                      },     
                    bgcolor: "#FCAF17",
                    boxShadow: "none",
                    color: "#17202C",
                    textTransform: "capitalize",
                    px: 4,
                    fontSize: "15px",
                    borderRadius: "5px",
                  }}
                >
                  Flight
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    '&:hover': {
                        bgcolor: '#FCAF17',  // Change background color on hover
                        color: "#17202C",
                      },
                    boxShadow: "none",
                    color: "#17202C",
                    textTransform: "capitalize",
                    bgcolor: "transparent",
                    px: 4,
                    fontSize: "15px",
                    borderRadius: "5px",
                  }}
                >
                  Hotel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    '&:hover': {
                        bgcolor: '#FCAF17',  // Change background color on hover
                        color: "#17202C",
                      },
                    boxShadow: "none",
                    color: "#17202C",
                    textTransform: "capitalize",
                    bgcolor: "transparent",
                    px: 4,
                    fontSize: "15px",
                    borderRadius: "5px",
                  }}
                >
                  Airport Taxi
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    '&:hover': {
                        bgcolor: '#FCAF17',  // Change background color on hover
                        color: "#17202C",
                      },
                    boxShadow: "none",
                    color: "#17202C",
                    textTransform: "capitalize",
                    bgcolor: "transparent",
                    px: 4,
                    fontSize: "15px",
                    borderRadius: "5px",
                  }}
                >
                  Tour
                </Button>
              </Box>

              <Box sx={{ mt: 3 }}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    sx={{ flexDirection: "row",flexWrap:"nowrap" }}
                  >
                    <FormControlLabel
                      sx={{
                        '& .MuiFormControlLabel-label': {
                   
                            fontSize: '11px', 
                           
                          },
                        "& .Mui-checked + .MuiFormControlLabel-label": {
                          color: "#FCAF17",
                          fontWeight: 500,
                        },
                      }}
                      value="female"
                      control={
                        <Radio
                        
                          sx={{
                            color: "#FCAF17",
                            "&.Mui-checked": { color: "#FCAF17" },
                          }}
                        />
                      }
                      label="One Way"
                    />
                    <FormControlLabel
                      sx={{
                        '& .MuiFormControlLabel-label': {
                   
                            fontSize: '11px', 
                            
                          },
                        "& .Mui-checked + .MuiFormControlLabel-label": {
                          color: "#FCAF17",
                          fontWeight: 500,
                         
                        },
                      }}
                      value="male"
                      control={
                        <Radio
                          sx={{
                            color: "#FCAF17",
                            "&.Mui-checked": { color: "#FCAF17" },
                          }}
                        />
                      }
                      label="Round Way"
                    />
                    <FormControlLabel
                      sx={{
                        '& .MuiFormControlLabel-label': {
                   
                            fontSize: '11px', 
                         
                          },
                        "& .Mui-checked + .MuiFormControlLabel-label": {
                          color: "#FCAF17",
                          fontWeight: 500,
                        },
                      }}
                      value="other"
                      control={
                        <Radio
                          sx={{
                            color: "#FCAF17",
                            "&.Mui-checked": { color: "#FCAF17" },
                          }}
                        />
                      }
                      label="Multi City"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>

              {/* search area */}

              <Box sx={{ mt: 3 }}>
                <Grid container spacing={1}>
                  <Grid
                    onClick={() => {
                      setOpenDep(!openDep);
                      setOpenOnward(false);
                    }}
                    item
                    lg={2.5}
                    xs={12}
                    sx={{ py:{xs:2,sm:0},cursor: "pointer", position: "relative",borderBottom:{xs:"1px solid #FEEBC5",sm:'none'}  }}
                  >
                      <Box
                      sx={{border:"1px solid #FEEBC5",width:"23px",height:"23px",borderRadius:"50%", display:{xs:"flex",sm:'none'},justifyContent:"center",alignItems:'center', position: "absolute", right: "3%", bottom:'-20%',bgcolor:"white" }}
                    >
                      <SwapHorizIcon sx={{ color: "#FCAF17" }} />
                    </Box>
                    <Box
                      sx={{ position: "absolute", right: "0%", top:"15px",display:{xs:"none",sm:"block"} }}
                    >
                      <SwapHorizIcon sx={{ color: "#FCAF17" }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight:"500", fontSize: "13px", color: "rgb(176,175,175)",display:"flex",gap:"5px",justifyContent:'start',alignItems:'center' }}>
                        <span>Departure</span>{" "}
                        <FlightTakeoffIcon sx={{color: "rgb(176,175,175)" ,fontSize:"18px"}}/>
                      </Typography>
                      <Typography
                        sx={{
                            mt:0.2,
                          fontSize: "15px",
                          color: "#4C4B4B",
                          fontWeight: "500",
                          textTransform: "capitalize",
                        }}
                      >
                        {dep||'Dhaka,Bangladesh'}
                      </Typography>
                    </Box>
                    {openDep && (
                      <Box
                        sx={{
                          bgcolor: "white",
                          zIndex:1300,
                          width: "100%",
                          position: "absolute",
                          boxShadow: 1,
                        }}
                      >
                        <div>
                          <input
                            onClick={(e) => e.stopPropagation()}
                            type="search"
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="Search airport"
                            style={{
                              outline: "none",
                              border: "none",
                              width: "100%",
                            }}
                          />
                        </div>
                        <Box sx={{ mt: 2 }}>
                          {filteredAirports.map((item, index) => (
                            <Box sx={{ mb: 2 }} onClick={()=>setDep(item?.address)}>
                              <Typography sx={{ fontSize: "14px" }}>
                                {item.address}
                              </Typography>

                              <Typography sx={{ fontSize: "12px" }}>
                                {item.name}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    )}
                  </Grid>

                  <Grid
                    onClick={() => {
                      setOpenOnward(!openOnward);
                      setOpenDep(false);
                    }}
                    item
                    lg={2.5}
                    xs={12}
                    sx={{
                        py:{xs:2,sm:0},
                      cursor: "pointer",
                      borderRight: {xs: 'none',sm:"1px solid #E7E7E7"}  ,
                      position: "relative",
                      borderBottom:{xs:"1px solid #FEEBC5",sm:'none'}
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight:"500", fontSize: "13px", color: "rgb(176,175,175)", color: "rgb(176,175,175)",display:"flex",gap:"5px",justifyContent:'start',alignItems:'center' }}>
                       <span> Arrival</span>{" "}
                        <FlightLandIcon sx={{color: "rgb(176,175,175)" ,fontSize:"18px"}}/>
                      </Typography>
                      <Typography
                        sx={{
                            mt:0.2,
                          fontSize: "15px",
                          color: "#4C4B4B",
                          fontWeight: "500",
                          textTransform: "capitalize",
                        }}
                      >
                       {onward||'Dubai, United Arab Emirates'}
                      </Typography>
                    </Box>
                    {openOnward && (
                      <Box
                      sx={{
                        zIndex:1300,
                        bgcolor: "white",
                        width: "100%",
                        position: "absolute",
                        boxShadow: 1,
                      }}
                    >
                      <div>
                        <input
                          onClick={(e) => e.stopPropagation()}
                          type="search"
                          value={searchTerm}
                          onChange={handleSearch}
                          placeholder="Search airport"
                          style={{
                            outline: "none",
                            border: "none",
                            width: "100%",
                          }}
                        />
                      </div>
                      <Box sx={{ mt: 2 }}>
                        {filteredAirports.map((item, index) => (
                          <Box sx={{ mb: 2 }} onClick={()=>setOnward(item?.address)}>
                            <Typography sx={{ fontSize: "14px" }}>
                              {item.address}
                            </Typography>

                            <Typography sx={{ fontSize: "12px" }}>
                              {item.name}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    )}
                  </Grid>
                  <Grid item    xs={6} lg={1.6} sx={{  py:{xs:2,sm:0},borderRight: {xs:"1px solid #FEEBC5",sm:"1px solid #E7E7E7"},         borderBottom:{xs:"1px solid #FEEBC5",sm:'none'}}}>
                    <Box sx={{pl:{xs:0,lg:1}}}>
                      <Typography  sx={{fontWeight:"500", fontSize: "13px", color: "rgb(176,175,175)",display:"flex",gap:"5px",justifyContent:'start',alignItems:'center' }}>
                      <span>  Depart Date</span>
              
                        <CalendarMonthIcon sx={{color: "rgb(176,175,175)" ,fontSize:"15px"}}/>
                      </Typography>
                      <Typography
                        sx={{
                            mt:0.2,
                          fontSize: "15px",
                          color: "#4C4B4B",
                          fontWeight: "500",
                          textTransform: "capitalize",
                        }}
                      >
                        July 29, 2023
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item     xs={6} lg={1.6} sx={{ py:{xs:2,sm:0}, borderRight: {xs: 'none',sm:"1px solid #E7E7E7"}  ,         borderBottom:{xs:"1px solid #FEEBC5",sm:'none'} }}>
                    <Box sx={{pl:{xs:0,lg:1}}}>
                      <Typography sx={{ fontWeight:"500", fontSize: "13px", color: "rgb(176,175,175)",display:"flex",gap:"5px",justifyContent:'start',alignItems:'center' }}>
                      Onward Date{" "}
                        <CalendarMonthIcon sx={{color: "rgb(176,175,175)" ,fontSize:"15px"}}/>
                      </Typography>
                      <Typography
                        sx={{
                            mt:0.2,
                          fontSize: "15px",
                          color: "#4C4B4B",
                          fontWeight: "500",
                          textTransform: "capitalize",
                        }}
                      >
                        July 29, 2023
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item    xs={12} lg={2.6} sx={{ py:{xs:2,sm:0}}} >
                    <Box sx={{pl:{xs:0,lg:1}}}>
                      <Typography  sx={{ fontWeight:"500", fontSize: "13px", color: "rgb(176,175,175)",display:"flex",gap:"5px",justifyContent:'start',alignItems:'center' }}>
                  <span>      Passenger & Class</span>
                        <PersonIcon sx={{ color: "rgb(176,175,175)" ,fontSize:"18px"}}/>
                      </Typography>
                      <Typography
                        sx={{
                            mt:0.2,
                          fontSize: "15px",
                          color: "gray",
                          color: "#4C4B4B",
                          fontWeight: "500",
                          textTransform: "capitalize",
                        }}
                      >
                        2 Traveler, Economy
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item    xs={12} lg={1.2}>
                    <Box sx={{textAlign:'right'}}>
                      <Button
                        variant="contained"
                        sx={{
                            '&:hover': {
                                bgcolor: '#FCAF17',  // Change background color on hover
                           
                              },
                          borderRadius: "12px",
                          boxShadow: "none",
                          fontSize: "16px",
                          bgcolor: "#FCAF17",
                          textTransform: "capitalize",
                          fontWeight: "500",
                          color: "#17202C !important",
                          px: 3,
                          py: 1.5,
                        }}
                      >
                        Search
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Box>
    </ClickAwayListener>
  );
};

export default FlightSearchBox;
