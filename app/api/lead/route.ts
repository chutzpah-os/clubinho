import { NextRequest, NextResponse } from 'next/server'
import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

function getAdminApp() {
  if (getApps().length > 0) return getApps()[0]
  return initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { nome, email, cidade, idade, hobbies } = body

  if (!nome || !email) {
    return NextResponse.json({ error: 'Nome e e-mail são obrigatórios.' }, { status: 400 })
  }

  try {
    const app = getAdminApp()
    const db = getFirestore(app)
    await db.collection('leads').add({
      nome,
      email,
      cidade: cidade || null,
      idade: idade ? Number(idade) : null,
      hobbies: hobbies || null,
      criadoEm: new Date(),
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Firebase error:', err)
    return NextResponse.json({ error: 'Erro ao salvar. Tente novamente.' }, { status: 500 })
  }
}
