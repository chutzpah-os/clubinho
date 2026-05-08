'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  ['Como Funciona', 'como-funciona'],
  ['Diferenciais', 'diferenciais'],
  ['Parceiros', 'parceiros'],
  ['FAQ', 'faq'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 48px',
          background: scrolled || open ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(20px)' : 'none',
          borderBottom: scrolled || open ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background 0.35s, border-color 0.35s',
        }}
      >
        {/* Logo */}
        <span style={{
          fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 700,
          color: 'var(--text)', letterSpacing: '-0.3px', cursor: 'default',
        }}>
          Clubinho <span style={{ color: 'var(--pink-vivid)' }}>Co.</span>
        </span>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 32 }} className="nav-links">
          {links.map(([l, id]) => (
            <button key={id} onClick={() => go(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500,
              transition: 'color 0.2s', padding: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >{l}</button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button onClick={() => go('cadastro')} className="nav-cta" style={{
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

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(o => !o)}
          className="nav-hamburger"
          aria-label="Menu"
          style={{
            display: 'none',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, color: 'var(--text)',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              position: 'fixed', top: 57, left: 0, right: 0, zIndex: 199,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '24px 32px 32px',
              display: 'flex', flexDirection: 'column', gap: 4,
            }}
          >
            {links.map(([l, id], i) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => go(id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text)', fontSize: '1.1rem', fontWeight: 600,
                  textAlign: 'left', padding: '14px 0',
                  borderBottom: '1px solid var(--border)',
                  transition: 'color 0.2s',
                }}
              >{l}</motion.button>
            ))}
            <button
              onClick={() => go('cadastro')}
              style={{
                marginTop: 20,
                background: 'var(--green)', color: '#fff',
                border: 'none', borderRadius: 999, padding: '14px 28px',
                fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}
            >
              Garantir minha vaga
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
