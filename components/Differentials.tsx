'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cards = [
  {
    title: 'Explore sem se prender',
    desc: 'Você não precisa escolher um hobbie pra sempre. Dança hoje, fotografia semana que vem, cerâmica no mês seguinte. Sem cobranças, sem expectativas.',
    accent: '#F72F7F', bg: 'var(--bg-3)',
    shape: { type: 'diamond', color: '#F72F7F', bgC: '#FFDAED' },
  },
  {
    title: 'Amizades que ficam',
    desc: 'Aqui você não troca likes — você encontra pessoas que também aparecem pra jogar, criar, cozinhar ou aprender junto. Conexões reais que duram.',
    accent: '#1E6B44', bg: 'var(--bg-2)',
    shape: { type: 'star', color: '#1E6B44', bgC: '#C8EDD8' },
  },
  {
    title: 'No seu ritmo, sempre',
    desc: 'Explorou, gostou, continuou. Explorou, pausou, voltou depois. Tudo bem. O Clubinho entende que interesses vêm e vão — e isso é o mais humano que existe.',
    accent: '#8B5CF6', bg: '#F5F3FF',
    shape: { type: 'diamond', color: '#8B5CF6', bgC: '#EDE9FF' },
  },
]

export default function Differentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="diferenciais" style={{ background: 'var(--bg-2)', padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--pink-light)', borderRadius: 999, padding: '5px 14px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink-vivid)', marginBottom: 14 }}>
            ◆ Por que o Clubinho?
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)' }}>
            Um jeito diferente de<br /><em style={{ fontStyle: 'italic', color: 'var(--pink-vivid)' }}>descobrir o que você ama</em>
          </h2>
          <p style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: 480 }}>
            Sem fórmula pronta. Sem pressão. Feito para o jeito humano de se interessar pelas coisas.
          </p>
        </motion.div>

        <div ref={ref} className="diff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 56 }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
              style={{
                background: c.bg, border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '40px 30px',
                position: 'relative', overflow: 'hidden', cursor: 'default',
                transition: 'box-shadow 0.3s, transform 0.3s',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Corner shape */}
              <div style={{
                position: 'absolute', top: 20, right: 20,
                width: 36, height: 36,
                background: c.shape.bgC, border: `2px solid ${c.shape.color}`,
                borderRadius: c.shape.type === 'diamond' ? 4 : '50%',
                transform: c.shape.type === 'diamond' ? 'rotate(45deg)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: c.shape.type === 'star' ? '0.9rem' : undefined,
                color: c.shape.color,
              }}>
                {c.shape.type === 'star' && '✦'}
              </div>

              <div style={{ width: 3, height: 36, background: c.accent, borderRadius: 2, marginBottom: 20 }} />
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>{c.title}</div>
              <div style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
