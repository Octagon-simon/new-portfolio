"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import styles from "./ThemeToggle.module.css"

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
      document.documentElement.setAttribute("data-theme", savedTheme)
    }
  }, [])

  // Add a smooth transition animation to the theme toggle
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark"

    // Add a transition class to the body for smoother theme change
    document.body.classList.add("theme-transition")

    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)

    // Remove the transition class after the transition is complete
    setTimeout(() => {
      document.body.classList.remove("theme-transition")
    }, 500)
  }

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun size={20} className={styles.icon} /> : <Moon size={20} className={styles.icon} />}
    </button>
  )
}
