import React, { useState } from "react";
import {
  AccessTime,
  Email,
  HelpOutline,
  Home,
  Menu,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ListItem,
  MenuList,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CuerryImg from "../assets/image/curry.jpg";
import NoodlesImg from "../assets/image/noodles.jpg";
import StewImg from "../assets/image/stew.jpg";

export default function Main() {
  const media930 = useMediaQuery("(max-width:930px)");
  const media750 = useMediaQuery("(max-width:750px)");
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      {!media750 ? (
        <Box display={"flex"}>
          <Box
            padding={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"end"}
            sx={{ width: "32%" }}
          >
            <Typography variant="h6" fontWeight={"bold"}>
              FOOD NINJA
            </Typography>
            <Box
              sx={{
                direction: "rtl",
                display: "flex",
                flexDirection: "column",
                gap: "9px",
              }}
              mt={3}
            >
              <Typography
                sx={{
                  display: "flex",
                  gap: "8px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Home />
                <Typography fontSize={14} fontWeight={"bold"}>
                  Home
                </Typography>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: "8px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#5e5e5e",
                }}
              >
                <HelpOutline />
                <Typography fontSize={14} fontWeight={"bold"}>
                  About
                </Typography>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  gap: "8px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#5e5e5e",
                }}
              >
                <Email />
                <Typography fontSize={14} fontWeight={"bold"}>
                  Contact
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box
            pt={2}
            pl={6}
            pr={6}
            sx={{ backgroundColor: "#ebebeb", width: "68%" }}
          >
            <Box display={"flex"} justifyContent={"end"} gap={2}>
              <Button
                sx={{
                  color: "#ff4d47",
                  fontWeight: "600",
                  fontSize: "13px",
                  border: "2px solid #ff4d47",
                  borderRadius: "50px",
                  padding: "5px 12px",
                  "&:hover": {
                    color: "#c5c5c5",
                    backgroundColor: "#ff4d47",
                  },
                }}
              >
                LOG IN
              </Button>
              <Button
                sx={{
                  color: "#ff4d47",
                  fontWeight: "600",
                  fontSize: "13px",
                  border: "2px solid #ff4d47",
                  borderRadius: "50px",
                  padding: "5px 12px",
                  "&:hover": {
                    color: "#c5c5c5",
                    backgroundColor: "#ff4d47",
                  },
                }}
              >
                SIGN IN
              </Button>
            </Box>

            <Box
              mt={4}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
            >
              <Typography variant="h3" fontWeight={"bold"} color={"#525252"}>
                Recipes
              </Typography>
              <Typography fontWeight={"bold"} color={"#777777"}>
                For Ninjas
              </Typography>
            </Box>

            <Box mt={7}>
              <Typography
                color={"slategrey"}
                borderBottom={"1px solid #afafafd6"}
                pb={1}
              >
                Latest Recipes
              </Typography>
              {!media930 ? (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={3}
                  p={3}
                  m={3}
                >
                  <Box
                    sx={{
                      width: "230px",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={StewImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        5 Bean Chili stew
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "230px",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={NoodlesImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        Veg Noodles
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "230px",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={CuerryImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        Tofu Curry
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={3}
                  p={3}
                  m={3}
                  flexWrap={"wrap"}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={StewImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        5 Bean Chili stew
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={NoodlesImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        Veg Noodles
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={CuerryImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        Tofu Curry
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}

              <Typography
                color={"slategrey"}
                borderBottom={"1px solid #afafafd6"}
                pb={1}
              >
                Most Popular
              </Typography>
            </Box>

            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "40px auto",
                fontWeight: "bold",
                color: "#797979",
                backgroundColor: "gainsboro",
                transition: "all .2s",
                "&:hover": {
                  backgroundColor: "gainsboro",
                  transform: "scale(1.2)",
                },
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      ) : (
        <Box display={""}>
          <Box
            padding={2}
            display={"flex"}
            alignItems={"center"}
            sx={{ width: "100%" }}
            justifyContent={"space-evenly"}
            flexDirection={'column'}
          >
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} sx={{width:"100%"}}>
              <Typography variant="h6" fontWeight={"bold"}>
                FOOD NINJA
              </Typography>
              <Menu onClick={handleMenu} />
            </Box>
            {menu ? (
              <Box
                sx={{
                  direction: "rtl",
                  display: "flex",
                  flexDirection: "column",
                  gap: "9px",
                  
                }}
                mt={3}
              >
                <Typography
                  sx={{
                    display: "flex",
                    gap: "8px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Home />
                  <Typography fontSize={14} fontWeight={"bold"}>
                    Home
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    gap: "8px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "#5e5e5e",
                  }}
                >
                  <HelpOutline />
                  <Typography fontSize={14} fontWeight={"bold"}>
                    About
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    gap: "8px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "#5e5e5e",
                  }}
                >
                  <Email />
                  <Typography fontSize={14} fontWeight={"bold"}>
                    Contact
                  </Typography>
                </Typography>
              </Box>
            ) : (
              ""
            )}
          </Box>
          <Box
            pt={2}
            display={"flex"}
            flexDirection={"column"}
            sx={{
              backgroundColor: "#ebebeb",
              width: "100%",
              padding: "10px 18px",
            }}
          >
            <Box display={"flex"} justifyContent={"center"} gap={2}>
              <Button
                sx={{
                  color: "#ff4d47",
                  fontWeight: "600",
                  fontSize: "13px",
                  border: "2px solid #ff4d47",
                  borderRadius: "50px",
                  padding: "5px 12px",
                  "&:hover": {
                    color: "#c5c5c5",
                    backgroundColor: "#ff4d47",
                  },
                }}
              >
                LOG IN
              </Button>
              <Button
                sx={{
                  color: "#ff4d47",
                  fontWeight: "600",
                  fontSize: "13px",
                  border: "2px solid #ff4d47",
                  borderRadius: "50px",
                  padding: "5px 12px",
                  "&:hover": {
                    color: "#c5c5c5",
                    backgroundColor: "#ff4d47",
                  },
                }}
              >
                SIGN IN
              </Button>
            </Box>

            <Box
              mt={4}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
            >
              <Typography variant="h3" fontWeight={"bold"} color={"#525252"}>
                Recipes
              </Typography>
              <Typography fontWeight={"bold"} color={"#777777"}>
                For Ninjas
              </Typography>
            </Box>

            <Box mt={7}>
              <Typography
                color={"slategrey"}
                borderBottom={"1px solid #afafafd6"}
                pb={1}
              >
                Latest Recipes
              </Typography>
              {!media930 ? (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={3}
                  p={3}
                  m={3}
                >
                  <Box
                    sx={{
                      width: "230px",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={StewImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        5 Bean Chili stew
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "230px",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={NoodlesImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        Veg Noodles
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "230px",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={CuerryImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        Tofu Curry
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={3}
                  p={3}
                  m={3}
                  flexWrap={"wrap"}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={StewImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        5 Bean Chili stew
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={NoodlesImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        Veg Noodles
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      backgroundColor: "white",
                      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.466)",
                      position: "relative",
                    }}
                  >
                    <img
                      src={CuerryImg}
                      alt=""
                      style={{
                        width: "100%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position={"absolute"}
                      top={8}
                      left={8}
                      sx={{
                        backgroundColor: "gainsboro",
                        borderRadius: "22px",
                        display: "flex",
                        padding: "8px",
                        gap: "5px",
                      }}
                    >
                      <AccessTime sx={{ fontSize: "20px", color: "#5c5c5c" }} />
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#5c5c5c"}
                      >
                        25MINS
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "26%",
                        backgroundColor: "white",
                        padding: "5px",
                      }}
                    >
                      <Typography
                        fontSize={16}
                        fontWeight={"bold"}
                        color={"#535353"}
                      >
                        Tofu Curry
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        fontSize={14}
                        color={"#838383"}
                      >
                        Recipe by Mario
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              )}

              <Typography
                color={"slategrey"}
                borderBottom={"1px solid #afafafd6"}
                pb={1}
              >
                Most Popular
              </Typography>
            </Box>

            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "40px auto",
                fontWeight: "bold",
                color: "#797979",
                backgroundColor: "gainsboro",
                transition: "all .2s",
                "&:hover": {
                  backgroundColor: "gainsboro",
                  transform: "scale(1.2)",
                },
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
