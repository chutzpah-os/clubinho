'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'

/* ── Chat messages ── */
const MESSAGES = [
  { id: 1, src: 'https://i.pravatar.cc/150?img=47', border: '#F72F7F', name: 'Ana P.',    text: 'gente, fiz aula de cerâmica hoje e AMEI 🫶' },
  { id: 2, src: 'https://i.pravatar.cc/150?img=44', border: '#1E6B44', name: 'Lara M.',   text: 'que máximo!! eu quero tentar também' },
  { id: 3, src: 'https://i.pravatar.cc/150?img=32', border: '#F4874B', name: 'Camila R.', text: 'alguém vai na aula de dança semana que vem?' },
  { id: 4, src: 'https://i.pravatar.cc/150?img=25', border: '#F72F7F', name: 'Ju S.',     text: 'EU!! já me inscrevi aqui no Clubinho 🙋' },
  { id: 5, src: 'https://i.pravatar.cc/150?img=38', border: '#1E6B44', name: 'Marina K.', text: 'o discord tá bom demais, conheci gente incrível' },
  { id: 6, src: 'https://i.pravatar.cc/150?img=21', border: '#F4874B', name: 'Bea T.',    text: 'sem compromisso é a melhor parte 😌' },
  { id: 7, src: 'https://i.pravatar.cc/150?img=16', border: '#F72F7F', name: 'Raíssa F.', text: 'entrei ontem e já sinto que encontrei minha galera ✨' },
  { id: 8, src: 'https://i.pravatar.cc/150?img=29', border: '#1E6B44', name: 'Vivi G.',   text: 'a aula experimental de fotografia foi incrível!' },
]

/* ── Hobby chips ── */
const HOBBIES = [
  { val: 'danca', label: 'Dança' }, { val: 'artes', label: 'Artes' },
  { val: 'musica', label: 'Música' }, { val: 'games', label: 'Games' },
  { val: 'gastro', label: 'Gastronomia' }, { val: 'esportes', label: 'Esportes' },
  { val: 'leitura', label: 'Leitura' }, { val: 'tech', label: 'Tecnologia' },
  { val: 'natureza', label: 'Natureza' }, { val: 'artesanato', label: 'Artesanato' },
  { val: 'fotografia', label: 'Fotografia' }, { val: 'teatro', label: 'Teatro' },
  { val: 'yoga', label: 'Yoga / Meditação' }, { val: 'moda', label: 'Moda' },
]

function ChatSimulator() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [shown, setShown] = useState<number[]>([])
  const [typing, setTyping] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!inView) return
    let step = 0
    const next = () => {
      if (step >= MESSAGES.length) {
        setTimeout(() => { setShown([]); setTyping(null); step = 0; next() }, 3000)
        return
      }
      const msg = MESSAGES[step]
      setTyping(msg.id)
      const t1 = setTimeout(() => {
        setTyping(null)
        setShown(prev => [...prev, msg.id])
        step++
        const delay = 1200 + Math.random() * 800
        setTimeout(next, delay)
      }, 900)
      return () => clearTimeout(t1)
    }
    const init = setTimeout(next, 600)
    return () => clearTimeout(init)
  }, [inView])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [shown, typing])

  return (
    <div ref={ref} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '100%', minHeight: 400, display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-md)' }}>
      {/* Chat header */}
      <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginLeft: 8 }}>
          # clubinho-geral
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#28c840' }} />
          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>ao vivo</span>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '20px 20px', display: 'flex', flexDirection: 'column', gap: 14, scrollbarWidth: 'none' }}>
        <AnimatePresence>
          {MESSAGES.filter(m => shown.includes(m.id)).map(m => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}
            >
              <div style={{
                width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                border: `2px solid ${m.border}`, overflow: 'hidden', background: '#eee',
              }}>
                <img src={m.src} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: m.border, marginRight: 8 }}>{m.name}</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>agora</span>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 3 }}>{m.text}</div>
              </div>
            </motion.div>
          ))}

          {typing !== null && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', gap: 10, alignItems: 'center' }}
            >
              {(() => {
                const m = MESSAGES.find(x => x.id === typing)!
                return (
                  <>
                    <div style={{ width: 34, height: 34, borderRadius: '50%', flexShrink: 0, border: `2px solid ${m.border}`, overflow: 'hidden', background: '#eee' }}>
                      <img src={m.src} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                      {[0, 0.2, 0.4].map(d => (
                        <motion.div key={d} animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }}
                          style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-dim)' }} />
                      ))}
                    </div>
                  </>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function ChatAndForm() {
  const [fields, setFields] = useState({ nome: '', email: '', cidade: '', idade: '' })
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const toggleHobby = (val: string) => {
    setSelected(prev => { const n = new Set(prev); n.has(val) ? n.delete(val) : n.add(val); return n })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, hobbies: Array.from(selected).join(', ') || null }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erro ao salvar.')
      setStatus('success')
      setShowModal(true)
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Erro inesperado.')
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    background: '#FFFFFF', border: '1.5px solid var(--border)',
    borderRadius: 'var(--radius-sm)', padding: '13px 16px',
    fontSize: '0.9rem', color: 'var(--text)', outline: 'none', width: '100%',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }
  const labelStyle: React.CSSProperties = {
    fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)',
    letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 7, display: 'block',
  }

  return (
    <>
      <section id="cadastro" style={{ background: 'var(--bg-3)', padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
        <div className="container">

          {/* Section intro — full width, acima do grid */}
          <div style={{ marginBottom: 48, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 16 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--pink-light)', borderRadius: 999, padding: '5px 14px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--pink-vivid)' }}>
                ✦ Comunidade viva
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--green-light)', borderRadius: 999, padding: '5px 14px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--green)' }}>
                ◆ Seja dos primeiros
              </div>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: 480 }}>
              Entra na nossa comunidade no Discord enquanto a plataforma ainda está sendo construída. Já tem gente te esperando lá.
            </p>
          </div>

          <div className="chat-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'stretch' }}>

            {/* Chat */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', marginBottom: 20 }}>
                Gente de verdade,<br /><em style={{ color: 'var(--pink-vivid)', fontStyle: 'italic' }}>conversando agora</em>
              </h2>
              <div style={{ flex: 1 }}>
                <ChatSimulator />
              </div>
            </div>

            {/* Form */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text)', marginBottom: 20 }}>
                Reserve sua <em style={{ color: 'var(--pink-vivid)', fontStyle: 'italic' }}>vaga</em>
              </h2>

              <div className="form-wrapper-box" style={{ flex: 1, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '32px 28px', boxShadow: 'var(--shadow-md)' }}>
                <form onSubmit={handleSubmit}>
                  <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={labelStyle}>Nome Completo</label>
                      <input type="text" required style={inputStyle} placeholder="Seu nome" value={fields.nome}
                        onChange={e => setFields(f => ({ ...f, nome: e.target.value }))}
                        onFocus={e => { e.target.style.borderColor = 'var(--pink-vivid)'; e.target.style.boxShadow = '0 0 0 3px var(--pink-light)' }}
                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>E-mail</label>
                      <input type="email" required style={inputStyle} placeholder="seu@email.com" value={fields.email}
                        onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
                        onFocus={e => { e.target.style.borderColor = 'var(--pink-vivid)'; e.target.style.boxShadow = '0 0 0 3px var(--pink-light)' }}
                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                  </div>
                  <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
                    <div>
                      <label style={labelStyle}>Cidade / Estado</label>
                      <input type="text" style={inputStyle} placeholder="São Paulo — SP" value={fields.cidade}
                        onChange={e => setFields(f => ({ ...f, cidade: e.target.value }))}
                        onFocus={e => { e.target.style.borderColor = 'var(--pink-vivid)'; e.target.style.boxShadow = '0 0 0 3px var(--pink-light)' }}
                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Idade</label>
                      <input type="number" style={inputStyle} placeholder="24" min={13} max={99} value={fields.idade}
                        onChange={e => setFields(f => ({ ...f, idade: e.target.value }))}
                        onFocus={e => { e.target.style.borderColor = 'var(--pink-vivid)'; e.target.style.boxShadow = '0 0 0 3px var(--pink-light)' }}
                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={{ ...labelStyle, marginBottom: 12 }}>Quais Hobbies Te Interessam?</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {HOBBIES.map(h => (
                        <button key={h.val} type="button" onClick={() => toggleHobby(h.val)} style={{
                          background: selected.has(h.val) ? 'var(--pink-light)' : 'var(--bg-2)',
                          border: `1.5px solid ${selected.has(h.val) ? 'var(--pink-vivid)' : 'var(--border)'}`,
                          borderRadius: 999, padding: '6px 14px',
                          fontSize: '0.78rem', fontWeight: selected.has(h.val) ? 700 : 500,
                          color: selected.has(h.val) ? 'var(--pink-vivid)' : 'var(--text-muted)',
                          cursor: 'pointer', transition: 'all 0.2s',
                        }}>
                          {h.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {status === 'error' && (
                    <p style={{ color: 'var(--pink-vivid)', fontSize: '0.85rem', marginBottom: 12 }}>{errorMsg}</p>
                  )}

                  <button type="submit" disabled={status === 'loading'} style={{
                    background: status === 'loading' ? 'rgba(255,105,180,0.5)' : 'var(--pink-vivid)',
                    color: '#fff', border: 'none', borderRadius: 999,
                    padding: '16px 32px', fontSize: '1rem', fontWeight: 700,
                    cursor: status === 'loading' ? 'wait' : 'pointer', width: '100%',
                    boxShadow: '0 0 32px rgba(255,105,180,0.25)',
                    transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 0 48px rgba(255,105,180,0.45)' } }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(255,105,180,0.25)' }}
                  >
                    {status === 'loading' ? 'Enviando...' : 'Quero minha vaga grátis'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(8,14,11,0.85)', backdropFilter: 'blur(12px)' }}
            onClick={e => { if (e.target === e.currentTarget) setShowModal(false) }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: '#fff', borderRadius: 'var(--radius-xl)', padding: '52px 48px', maxWidth: 520, width: '100%', textAlign: 'center', position: 'relative', boxShadow: 'var(--shadow-lg)' }}
            >
              <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>

              <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,105,180,0.1)', border: '2px solid rgba(255,105,180,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14l7 7L22 8" stroke="var(--pink-vivid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 12, lineHeight: 1.1 }}>
                Você está dentro,{' '}<em style={{ color: 'var(--green)', fontStyle: 'italic' }}>bem-vinda!</em>
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.95rem', marginBottom: 32 }}>
                Agora entra no nosso Discord e já vem se apresentar à galera!
              </p>

              <a href="https://discord.gg/VMM6r9VeeP" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#5865f2', color: '#fff', borderRadius: 999,
                padding: '14px 28px', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 0 32px rgba(88,101,242,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                marginBottom: 16,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 48px rgba(88,101,242,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(88,101,242,0.35)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.1.132 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                Entrar no Discord do Clubinho
              </a>

              <div>
                <button onClick={() => { setShowModal(false); router.push('/bem-vinda') }} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-dim)', fontSize: '0.82rem', textDecoration: 'underline',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-muted)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                >
                  Como funciona o Discord? →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
