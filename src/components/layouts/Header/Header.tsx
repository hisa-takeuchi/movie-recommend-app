import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Dancing_Script } from "next/font/google";
import React from "react";

const DancingScript = Dancing_Script({ subsets: ["latin"] });

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="h1"
            fontFamily={DancingScript.style.fontFamily}
            sx={{ flexGrow: 1 }}
          >
            AI in Theater
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
