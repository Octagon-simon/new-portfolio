"use client"

import { useState } from "react"
import { Printer } from "lucide-react"
import styles from "./PrintResume.module.css"

export default function PrintResume() {
  const [isPrinting, setIsPrinting] = useState(false)

  const handlePrint = () => {
    setIsPrinting(true)

    // Add a print-friendly class to the body
    document.body.classList.add("print-mode")

    // Print the page
    window.print()

    // Remove the print-friendly class after printing
    setTimeout(() => {
      document.body.classList.remove("print-mode")
      setIsPrinting(false)
    }, 1000)
  }

  return (
    <button onClick={handlePrint} className={styles.printButton} disabled={isPrinting} aria-label="Print Resume">
      <Printer size={16} />
      <span>{isPrinting ? "Printing..." : "Print Portfolio"}</span>
    </button>
  )
}
