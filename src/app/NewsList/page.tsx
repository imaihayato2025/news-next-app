import React from "react";
import Header from "../components/Header";
import ThemeToggleProvider from "../components//ThemeToggleProvider";
import ThemeToggleButton from "../components/ThemeToggleButton";
import BackButton from "../components/BackButton";

export default function NewsList() {
  return (
    <ThemeToggleProvider>
      <div>
        <BackButton />
        <ThemeToggleButton />
        <Header />
      </div>
    </ThemeToggleProvider>
  );
}
