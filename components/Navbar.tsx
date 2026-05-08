'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="nav-inner"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 48px',
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.35s, border-color 0.35s',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 700,
        color: 'var(--text)', letterSpacing: '-0.3px',
      }}>
        Clubinho <span style={{ color: 'var(--pink-vivid)' }}>Co.</span>
      </span>

      <nav className="nav-links" style={{ display: 'flex', gap: 32 }}>
        {[['Como Funciona', 'como-funciona'], ['Diferenciais', 'diferenciais'], ['Parceiros', 'parceiros'], ['FAQ', 'faq']].map(([l, id]) => (
          <button key={id} onClick={() => go(id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >{l}</button>
        ))}
      </nav>

      <button onClick={() => go('cadastro')} style={{
        background: 'var(--green)', color: '#fff',
        border: 'none', borderRadius: 999, padding: '10px 22px',
        fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', gap: 8,
        transition: 'background 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = '#155233'; e.currentTarget.style.transform = 'scale(1.04)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'var(--green)'; e.currentTarget.style.transform = 'scale(1)' }}
      >
        Garantir minha vaga
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </motion.header>
  )
}
