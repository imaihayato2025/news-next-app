import ThemeToggleProvider from "./components//ThemeToggleProvider";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { Button } from "@mui/material";
import Link from "next/link";

export default function App() {
  return (
    <ThemeToggleProvider>
      <div className="flex h-screen flex-col items-center justify-center">
        <ThemeToggleButton />
        <h1 className="text-4xl font-bold">NEWS NOW</h1>
        <Link href="/NewsList">
          <Button
            variant="contained"
            sx={{
              mt: 3,
              px: 5,
              py: 1.5,
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#1976d2",
              color: "#fff",
              transition: "transform 0.3s, background-color 0.3s",
              width: 200, // ここで横幅を指定（px単位）
              "&:hover": {
                backgroundColor: "#1565c0",
                transform: "scale(1.1)",
              },
            }}
          >
            記事一覧へ
          </Button>
        </Link>
      </div>
    </ThemeToggleProvider>
  );
}
