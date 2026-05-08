'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cards = [
  { title: 'Visibilidade que converte', desc: 'Apareça para pessoas que já querem experimentar o que você ensina ou cria — sem depender de algoritmo de rede social ou investimento em anúncios.', icon: '◆', iconBg: '#FFDAED', iconColor: '#F72F7F' },
  { title: 'Gestão sem dor de cabeça', desc: 'Publique suas aulas e eventos, acompanhe quem participa e fortaleça sua comunidade. Tudo em um lugar só, sem planilha, sem WhatsApp lotado.', icon: '✦', iconBg: '#C8EDD8', iconColor: '#1E6B44' },
  { title: 'Ganhos reais', desc: 'Comissão por cada participante convertido, além de acesso antecipado a recursos exclusivos para parceiros ativos na plataforma.', icon: '◆', iconBg: '#FFF3C4', iconColor: '#9A7400' },
]

export default function Partners() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="parceiros" style={{ background: 'var(--bg)', padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--yellow-light)', borderRadius: 999, padding: '5px 14px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7A5A00', marginBottom: 14 }}>
            ✦ Para empresas e criadores
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)' }}>
            Cresça com quem já está<br />buscando o que você <em style={{ fontStyle: 'italic', color: 'var(--green)' }}>oferece</em>
          </h2>
          <p style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: 480 }}>
            Uma audiência engajada, pronta para experimentar o que você ensina ou cria. Perfeito para escolas, estúdios, instrutoras e criadores de conteúdo.
          </p>
        </motion.div>

        <div ref={ref} className="partner-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 56 }}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
              style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: '36px 28px',
                transition: 'box-shadow 0.3s, transform 0.3s', cursor: 'default',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10, marginBottom: 20,
                background: c.iconBg, border: `1.5px solid ${c.iconColor}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', color: c.iconColor,
              }}>
                {c.icon}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{c.title}</div>
              <div style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
