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
    <IconButton onClick={toggleColorMode} sx={{ ...sx }}>
      {mode === "light" ? <BedtimeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
