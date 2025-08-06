"use client";

import { IconButton } from "@mui/material";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeMode } from "./ThemeToggleProvider";
import { SxProps } from "@mui/material/styles";

type Props = {
  sx?: SxProps; // ← 追加
};

export default function ThemeToggleButton({ sx }: Props) {
  const { toggleColorMode, mode } = useThemeMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      sx={{
        width: "30px",
        height: "30px",
        position: "fixed",
        top: 21,
        right: 15,
        zIndex: 1,
      }}
    >
      {mode === "light" ? <BedtimeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
