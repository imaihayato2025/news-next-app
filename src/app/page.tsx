"use client";

import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        p: 2,
      }}
    >
      <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
        NEWS NOW
      </Typography>

      <Link href="/">
        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 5,
            py: 1.5,
            borderRadius: "999px",
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#1976d2",
            color: "#fff",
            transition: "transform 0.3s, backgroud-color 0.3s",
            width: 200,
            "&:hover": {
              backgroundColor: "#1565c0",
              transform: "scale(1.1)",
            },
          }}
        >
          記事一覧へ
        </Button>
      </Link>

      {/* 右上に配置 */}
      <Box
        sx={{
          position: "absolute",
          top: 15,
          right: 5,
        }}
      ></Box>
    </Box>
  );
}
