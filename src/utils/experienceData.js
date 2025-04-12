import { calculateDuration } from "./dateUtils"

// Recent experiences (most recent 5)
export const recentExperiences = [
  {
    title: "Software Engineer",
    company: "DLVR Logistics",
    startDate: "Mar 2025",
    endDate: "Present",
    location: "Lagos State, Nigeria",
    jobType: "Full-time",
  },
  {
    title: "Software Engineer Intern",
    company: "Afriex",
    startDate: "Mar 2025",
    endDate: "Present",
    location: "Lagos State, Nigeria · Remote",
    jobType: "Internship",
  },
  {
    title: "Technical Support Agent",
    company: "Afriex",
    startDate: "Jan 2023",
    endDate: "Present",
    location: "Lagos State, Nigeria · Remote",
    jobType: "Full-time",
  },
  {
    title: "Frontend Engineer",
    company: "Sheruta Online",
    startDate: "Jul 2024",
    endDate: "Nov 2024",
    location: "Lekki, Lagos State, Nigeria · Remote",
    jobType: "Internship",
  },
  {
    title: "Lead Web Developer",
    company: "Boulevard Creative Agency",
    startDate: "Apr 2024",
    endDate: "Oct 2024",
    location: "Lagos State, Nigeria · Remote",
    jobType: "Contract",
  },
]

/**
 * Calculate total professional experience
 * @returns {Object} Object containing years, months, and formatted string
 */
export function calculateTotalExperience() {
  // This is a simplified calculation based on the earliest start date to now
  // For a more accurate calculation, you would need to account for overlapping periods

  // Assuming the earliest job started in Sep 2021 (based on the data)
  const earliestStartDate = "Jul 2020"
  const now = new Date()
  const currentDate = `${now.toLocaleString("default", { month: "short" })} ${now.getFullYear()}`

  const duration = calculateDuration(earliestStartDate, currentDate)

  console.log(duration)

  // Parse the duration to get years and months
  const durationParts = duration.split(" ")
  let years = 0
  let months = 0

  for (let i = 0; i < durationParts.length; i += 2) {
    const value = Number.parseInt(durationParts[i])
    const unit = durationParts[i + 1]

    if (unit.startsWith("yr")) {
      years = value
    } else if (unit.startsWith("mo")) {
      months = value
    }
  }

  return {
    years,
    months,
    formatted: duration,
  }
}
