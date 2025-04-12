"use client"

import { useState, useEffect } from "react"
import styles from "./SkillBars.module.css"

const skills = [
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "PHP", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "database" },
  { name: "SQL", level: 65, category: "database" },
  { name: "Git", level: 85, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },
]

export default function SkillBars() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [visibleSkills, setVisibleSkills] = useState(skills)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    // Filter skills based on active filter
    if (activeFilter === "all") {
      setVisibleSkills(skills)
    } else {
      setVisibleSkills(skills.filter((skill) => skill.category === activeFilter))
    }

    // Reset animation state when filter changes
    setAnimated(false)

    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setAnimated(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [activeFilter])

  return (
    <div className={styles.skillBarsContainer}>
      <div className={styles.filterButtons}>
        <button
          className={`${styles.filterButton} ${activeFilter === "all" ? styles.active : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
        <button
          className={`${styles.filterButton} ${activeFilter === "frontend" ? styles.active : ""}`}
          onClick={() => setActiveFilter("frontend")}
        >
          Frontend
        </button>
        <button
          className={`${styles.filterButton} ${activeFilter === "backend" ? styles.active : ""}`}
          onClick={() => setActiveFilter("backend")}
        >
          Backend
        </button>
        <button
          className={`${styles.filterButton} ${activeFilter === "database" ? styles.active : ""}`}
          onClick={() => setActiveFilter("database")}
        >
          Database
        </button>
        <button
          className={`${styles.filterButton} ${activeFilter === "tools" ? styles.active : ""}`}
          onClick={() => setActiveFilter("tools")}
        >
          Tools
        </button>
      </div>

      <div className={styles.skillsList}>
        {visibleSkills.map((skill, index) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.skillInfo}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}%</span>
            </div>
            <div className={styles.skillBarBg}>
              <div
                className={`${styles.skillBarFill} ${animated ? styles.animated : ""}`}
                style={{
                  width: animated ? `${skill.level}%` : "0%",
                  transitionDelay: `${index * 0.1}s`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
