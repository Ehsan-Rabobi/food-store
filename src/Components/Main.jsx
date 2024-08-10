import React from "react";
import { Email, HelpOutline, Home } from "@mui/icons-material";
import { Box, ListItem, MenuList, Typography } from "@mui/material";

export default function Main() {
  return (
    <>
      <Box>
        <Box
          padding={2}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"end"}
          height={400}
          sx={{ width: "35%" }}
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
        <Box></Box>
      </Box>
    </>
  );
}
