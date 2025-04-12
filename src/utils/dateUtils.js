/**
 * Calculate the duration between two dates in years and months
 * @param {string} startDate - Start date in format 'MMM YYYY' (e.g., 'Jan 2023')
 * @param {string} endDate - End date in format 'MMM YYYY' or 'Present'
 * @returns {string} Formatted duration string (e.g., '2 yrs 3 mos')
 */
export function calculateDuration(startDate, endDate) {
  // Parse the start date
  const startParts = startDate.split(" ")
  const startMonth = getMonthNumber(startParts[0])
  const startYear = Number.parseInt(startParts[1])

  // Parse the end date (or use current date if 'Present')
  let endMonth, endYear
  if (endDate.toLowerCase() === "present") {
    const now = new Date()
    endMonth = now.getMonth() // 0-11
    endYear = now.getFullYear()
  } else {
    const endParts = endDate.split(" ")
    endMonth = getMonthNumber(endParts[0])
    endYear = Number.parseInt(endParts[1])
  }

  // Calculate total months
  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth)

  // Calculate years and remaining months
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  // Format the output
  let result = ""
  if (years > 0) {
    result += `${years} ${years === 1 ? "yr" : "yrs"}`
  }

  if (months > 0) {
    if (result) result += " "
    result += `${months} ${months === 1 ? "mo" : "mos"}`
  }

  // If duration is less than a month
  if (!result) {
    result = "Less than a month"
  }

  return result
}

/**
 * Convert month name to month number (0-11)
 * @param {string} monthName - Month name (e.g., 'Jan', 'February')
 * @returns {number} Month number (0-11)
 */
function getMonthNumber(monthName) {
  const months = {
    jan: 0,
    january: 0,
    feb: 1,
    february: 1,
    mar: 2,
    march: 2,
    apr: 3,
    april: 3,
    may: 4,
    jun: 5,
    june: 5,
    jul: 6,
    july: 6,
    aug: 7,
    august: 7,
    sep: 8,
    september: 8,
    oct: 9,
    october: 9,
    nov: 10,
    november: 10,
    dec: 11,
    december: 11,
  }

  return months[monthName.toLowerCase()] || 0
}
