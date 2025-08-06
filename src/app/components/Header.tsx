"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        height: 75,
        backgroundColor: "#1976d2", // MUIデフォルト青を直接指定
        borderBottom: "1px solid #1565c0",
      }}
      elevation={1}
    >
      <Toolbar
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          p: 0,
        }}
      >
        <Link href="/" passHref>
          <Typography variant="h5" component="h1" sx={{ fontSize: "24px" }}>
            NEWS NOW
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
