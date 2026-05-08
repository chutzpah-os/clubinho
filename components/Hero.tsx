'use client'
import { motion } from 'framer-motion'

const avatars = [
  { src: 'https://i.pravatar.cc/150?img=47', border: '#F72F7F' },
  { src: 'https://i.pravatar.cc/150?img=44', border: '#1E6B44' },
  { src: 'https://i.pravatar.cc/150?img=32', border: '#F4874B' },
  { src: 'https://i.pravatar.cc/150?img=25', border: '#F72F7F' },
  { src: 'https://i.pravatar.cc/150?img=38', border: '#1E6B44' },
]

/* Decorative shapes inspired by reference site */
const shapes = [
  { type: 'diamond', color: '#F72F7F', bg: '#FFDAED', top: '12%', left: '2%', size: 44, rotate: '15deg' },
  { type: 'diamond', color: '#1E6B44', bg: '#C8EDD8', top: '28%', right: '1%', size: 36, rotate: '-10deg' },
  { type: 'star',    color: '#FFD24D', bg: '#FFF3C4', bottom: '30%', left: '1%', size: 40, rotate: '5deg' },
  { type: 'diamond', color: '#8B5CF6', bg: '#EDE9FF', bottom: '18%', right: '2%', size: 32, rotate: '20deg' },
]

const pills = ['100% grátis pra começar', 'Aulas experimentais', 'Sem mensalidade obrigatória', '18 a 35 anos']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as number[] },
})

function Shape({ type, color, bg, size, rotate, ...pos }: { type: string; color: string; bg: string; size: number; rotate: string; [k: string]: unknown }) {
  if (type === 'diamond') return (
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [parseFloat(rotate), parseFloat(rotate) + 8, parseFloat(rotate)] }}
      transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut' }}
      className="hide-mobile"
      style={{
        position: 'absolute', ...(pos as React.CSSProperties),
        width: size, height: size,
        background: bg, border: `2px solid ${color}`,
        transform: `rotate(${rotate})`, borderRadius: 6,
        zIndex: 2,
      }}
    />
  )
  return (
    <motion.div
      animate={{ y: [0, -8, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut' }}
      className="hide-mobile"
      style={{
        position: 'absolute', ...(pos as React.CSSProperties),
        width: size, height: size, borderRadius: '50%',
        background: bg, border: `2px solid ${color}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.45, color,
        zIndex: 2,
      }}
    >
      ✦
    </motion.div>
  )
}

export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section style={{
      minHeight: '100vh', position: 'relative', overflowX: 'clip',
      display: 'flex', alignItems: 'center',
      padding: '56px 24px 80px',
      background: 'var(--bg)',
    }}>
      {/* Soft background blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(247,47,127,0.07) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: '-12%', left: '-6%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,107,68,0.07) 0%, transparent 65%)' }} />
      </div>

      {/* Decorative geometric shapes */}
      {shapes.map((s, i) => <Shape key={i} {...s} />)}

      <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Left — copy */}
        <div>
          <motion.div {...fadeUp(0)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--green-light)', border: '1px solid var(--green)',
            borderRadius: 999, padding: '6px 16px',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--green)', marginBottom: 24,
          }}>
            <span>✦</span> Pré-cadastro aberto — vagas limitadas <span>✦</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)',
            fontWeight: 700, lineHeight: 1.05, letterSpacing: '-1px',
            color: 'var(--text)', marginBottom: 18,
          }}>
            Seu próximo hobbie<br />
            está aqui. Sua <em style={{ fontStyle: 'italic', color: 'var(--pink-vivid)' }}>galera</em><br />
            também.
          </motion.h1>

          <motion.p {...fadeUp(0.18)} style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
            lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: 440, marginBottom: 36,
          }}>
            Experimente aulas, conheça pessoas que amam as mesmas coisas e descubra o que te move — no seu ritmo, sem julgamentos, sem mensalidade obrigatória.
          </motion.p>

          <motion.div {...fadeUp(0.26)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <button onClick={() => go('cadastro')} style={{
              background: 'var(--pink-vivid)', color: '#fff',
              border: 'none', borderRadius: 999, padding: '15px 32px',
              fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#d4196a'; e.currentTarget.style.transform = 'scale(1.03)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--pink-vivid)'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              Garantir minha vaga grátis
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={() => go('como-funciona')} style={{
              background: 'transparent', color: 'var(--text)',
              border: '1.5px solid var(--border-2)', borderRadius: 999,
              padding: '14px 28px', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.background = 'var(--bg-2)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.background = 'transparent' }}
            >
              Como funciona?
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.34)} style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {pills.map(p => (
              <span key={p} style={{
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                borderRadius: 999, padding: '5px 14px',
                fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-muted)',
              }}>{p}</span>
            ))}
          </motion.div>
        </div>

        {/* Right — stacked avatars */}
        <motion.div
          initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}
        >
          {/* Decorative ring */}
          <div style={{ position: 'relative', width: 260, height: 260 }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1.5px dashed var(--border-2)' }} />
            <div style={{ position: 'absolute', inset: 20, borderRadius: '50%', background: 'var(--bg-2)', border: '1px solid var(--border)' }} />

            {avatars.map((a, i) => {
              const angle = (i / avatars.length) * 2 * Math.PI - Math.PI / 2
              const r = 110
              const cx = 130 + r * Math.cos(angle)
              const cy = 130 + r * Math.sin(angle)
              return (
                <motion.div
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  style={{
                    position: 'absolute',
                    top: cy - 28, left: cx - 28,
                    width: 56, height: 56, borderRadius: '50%',
                    border: `3px solid ${a.border}`,
                    boxShadow: `0 4px 16px rgba(0,0,0,0.12)`,
                    overflow: 'hidden',
                    background: '#eee',
                  }}
                >
                  <img
                    src={a.src}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
              )
            })}

            {/* Center badge */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>2.4k+</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>membros</div>
            </div>
          </div>

          {/* Stat card */}
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)', padding: '18px 28px',
            textAlign: 'center', boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#5865f2">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.032.052a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>No Discord</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
