'use client'
import Script from 'next/script'
import { useEffect } from 'react'

export default function GoogleAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'G-G8TW41FQR2')
  }, [])

  return (
    <Script
      strategy="lazyOnload"
      src="https://www.googletagmanager.com/gtag/js?id=G-G8TW41FQR2"
    />
  )
}
