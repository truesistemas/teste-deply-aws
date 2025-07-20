import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Olá da API do Next.js!',
    timestamp: new Date().toISOString(),
    status: 'success'
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  return NextResponse.json({
    message: 'Dados recebidos com sucesso!',
    receivedData: body,
    timestamp: new Date().toISOString()
  })
}