'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const steps = [
  {
    num: '01',
    title: 'Acesse o link do Discord',
    desc: 'Clique no botão abaixo ou copie o link do convite: discord.gg/VMM6r9VeeP. Ele te leva direto para o servidor do Clubinho.',
    color: '#F72F7F', bg: '#FFDAED',
  },
  {
    num: '02',
    title: 'Crie sua conta ou faça login',
    desc: 'Se você ainda não tem uma conta no Discord, o app vai te pedir para criar uma — é rápido e gratuito. Se já tem conta, é só entrar.',
    color: '#1E6B44', bg: '#C8EDD8',
  },
  {
    num: '03',
    title: 'Entre no servidor do Clubinho',
    desc: 'Aceite o convite e você já está dentro! Leia as regras da comunidade para garantir que todo mundo se sinta seguro e acolhido.',
    color: '#F4874B', bg: '#FFE8D6',
  },
  {
    num: '04',
    title: 'Se apresente em #apresentações',
    desc: 'Vá até o canal #apresentações e diga oi! Conta quem você é, o que te interessa e o que você espera do Clubinho. A gente adora conhecer cada pessoa.',
    color: '#F72F7F', bg: '#FFDAED',
  },
  {
    num: '05',
    title: 'Explore os canais de hobbies',
    desc: 'Tem um canal para cada interesse: dança, arte, gastronomia, leitura e muito mais. Entre nos que mais combinam com você e já comece a conversar.',
    color: '#1E6B44', bg: '#C8EDD8',
  },
  {
    num: '06',
    title: 'Fique de olho nos anúncios',
    desc: 'No canal #anúncios você vai saber de eventos, aulas experimentais, lançamentos e novidades em primeira mão. É lá que tudo começa.',
    color: '#F4874B', bg: '#FFE8D6',
  },
]

export default function BemVinda() {
  return (
    <>
      {/* Mini navbar */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        padding: '16px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)' }}>
            Clubinho <em style={{ fontStyle: 'italic', color: 'var(--pink-vivid)' }}>Co.</em>
          </span>
        </Link>
        <Link href="/" style={{
          fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          ← Voltar ao início
        </Link>
      </header>

      <main style={{ minHeight: '100vh', background: 'var(--bg)', padding: '120px 24px 80px' }}>

        {/* Soft blobs */}
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '5%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(247,47,127,0.07) 0%, transparent 65%)' }} />
          <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,107,68,0.07) 0%, transparent 65%)' }} />
        </div>

        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', marginBottom: 64 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--pink-light)', borderRadius: 999,
              padding: '5px 14px', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--pink-vivid)', marginBottom: 20,
            }}>
              ✦ Antes de você entrar
            </div>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 700, lineHeight: 1.08, color: 'var(--text)',
            }}>
              Como entrar no{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--pink-vivid)' }}>Discord</em>{' '}
              do Clubinho
            </h1>
            <p style={{ marginTop: 16, fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: 460, margin: '16px auto 0' }}>
              É bem simples! Siga os passos abaixo e você estará dentro da nossa comunidade em menos de 2 minutos.
            </p>
          </motion.div>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 56 }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  background: '#fff', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', padding: '24px 28px',
                  boxShadow: 'var(--shadow-sm)',
                  borderLeft: `4px solid ${step.color}`,
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: step.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: step.color }}>
                    {step.num}
                  </span>
                </div>
                <div style={{ paddingTop: 2 }}>
                  <div style={{ fontSize: '0.975rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                    {step.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
          >
            <a
              href="https://discord.gg/VMM6r9VeeP"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#5865f2', color: '#fff',
                padding: '16px 36px', borderRadius: 'var(--radius-xl)',
                fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(88,101,242,0.25)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(88,101,242,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(88,101,242,0.25)' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.032.052a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Entrar no Discord do Clubinho
            </a>

            <Link
              href="/"
              style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              ← Voltar para o início
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  )
}
