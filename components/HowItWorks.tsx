'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { num: '01', title: 'Monte seu perfil', desc: 'Conta o que você curte — ou o que tem vontade de experimentar. Não precisa saber ainda. É exatamente pra isso que serve.' },
  { num: '02', title: 'Receba sugestões certeiras', desc: 'Aulas, eventos e comunidades selecionadas pra você. Sem pesquisa, sem perda de tempo, sem rolagem infinita.' },
  { num: '03', title: 'Experimente de graça', desc: 'Participe de aulas experimentais sem pagar nada. Gostou? Continua. Não gostou? Tenta outra. Sem pressão, sem julgamento.' },
  { num: '04', title: 'Encontre sua galera', desc: 'Entre nos clubinhos, apareça pra criar, jogar ou aprender junto. Amizades reais com quem ama as mesmas coisas que você.' },
]

const accents = ['#F72F7F', '#1E6B44', '#FFD24D', '#F72F7F']

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="como-funciona" style={{ background: 'var(--bg)', padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--green-light)', borderRadius: 999, padding: '5px 14px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: 14 }}>
            ✦ Simples assim
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)' }}>
            Tão simples<br />quanto <em style={{ fontStyle: 'italic', color: 'var(--green)' }}>parece</em>
          </h2>
          <p style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: 460 }}>
            Nada de burocracia. Você começa a descobrir no mesmo dia.
          </p>
        </motion.div>

        <div ref={ref} className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 56 }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}
              style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '36px 24px',
                transition: 'box-shadow 0.3s, transform 0.3s', cursor: 'default',
                boxShadow: 'var(--shadow-sm)',
                borderTop: `3px solid ${accents[i]}`,
              }}
            >
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.8rem', fontWeight: 700, color: accents[i], lineHeight: 1, marginBottom: 18, opacity: 0.9 }}>{s.num}</div>
              <div style={{ fontSize: '0.975rem', fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{s.title}</div>
              <div style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
