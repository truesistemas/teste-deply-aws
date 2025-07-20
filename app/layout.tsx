import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Teste Deploy AWS',
  description: 'Aplicação Next.js para teste de deploy na AWS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}