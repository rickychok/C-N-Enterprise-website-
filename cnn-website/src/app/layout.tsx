import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'C&N ENTERPRISE - Automotive Electrical Specialists',
  description: 'Professional alternator repair, starter motor repair, and automotive electrical diagnostics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}