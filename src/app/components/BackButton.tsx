"use client";

import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  return (
    <Link href="/">
      <ArrowBackIcon
        sx={{
          width: "30px",
          height: "30px",
          position: "fixed",
          top: 21,
          left: 15,
          zIndex: 1,
        }}
      />
    </Link>
  );
}
