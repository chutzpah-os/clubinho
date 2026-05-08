'use client'
import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const faqs = [
  { q: 'Preciso pagar alguma coisa?', a: 'Não. O pré-cadastro é gratuito e o acesso básico à plataforma também. Você experimenta aulas, entra em comunidades e explora sem gastar nada. Futuramente pode haver recursos extras pagos — mas a base é sempre de graça.' },
  { q: 'Tenho que me comprometer com alguma atividade?', a: 'De jeito nenhum. Você experimenta uma aula hoje, pausa semana que vem, testa outra coisa depois. Sem fidelidade obrigatória, sem mensalidade, sem julgamento. O Clubinho respeita o seu ritmo.' },
  { q: 'O que acontece depois que eu me cadastro?', a: 'Você entra no nosso servidor do Discord — onde a comunidade já está ativa e rolando. Quando a plataforma lançar, você recebe acesso antecipado antes de todo mundo, junto com benefícios exclusivos de membro fundador.' },
  { q: 'Como funciona o Discord do Clubinho?', a: 'É o nosso quartel general antes do lançamento. Lá você se apresenta, sugere hobbies, conhece gente, tira dúvidas e fica sabendo de tudo em primeira mão. É seguro, organizado e acolhedor — exatamente o espírito do Clubinho.' },
  { q: 'Posso oferecer minhas aulas ou eventos na plataforma?', a: 'Sim. Se você é professora, instrutora, líder de comunidade ou criadora de conteúdo, adoraríamos ter você como parceira. Indica interesse no pré-cadastro e a gente entra em contato.' },
  { q: 'Funciona para quem não sabe que hobbie quer?', a: 'Funciona especialmente pra você. A ideia do Clubinho é justamente essa — ajudar você a descobrir o que gosta, não pressupor que você já sabe. Você chega sem saber e vai embora com vontade de tentar tudo.' },
  { q: 'Como vou descobrir coisas que combinam comigo?', a: 'Você conta o que curte (ou o que quer experimentar) no perfil e recebe sugestões personalizadas de aulas, eventos e comunidades. Sem pesquisa manual, sem rolagem infinita.' },
  { q: 'Meus dados ficam seguros?', a: 'Sim. Seus dados servem só para personalizar sua experiência no Clubinho. Nunca vendemos, nunca compartilhamos com terceiros. Você controla o que compartilha e pode sair quando quiser.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" style={{ background: 'var(--bg-2)', padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--green-light)', borderRadius: 999,
            padding: '5px 14px', fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--green)', marginBottom: 14,
          }}>
            ✦ Dúvidas?
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3.4rem)',
            fontWeight: 700, lineHeight: 1.1, color: 'var(--text)',
          }}>
            Perguntas <em style={{ fontStyle: 'italic', color: 'var(--pink-vivid)' }}>frequentes</em>
          </h2>
          <p style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: 440 }}>
            Tem alguma dúvida? A gente respondeu as mais comuns aqui embaixo.
          </p>
        </motion.div>

        {/* Accordion */}
        <div style={{ maxWidth: 760, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  border: `1px solid ${isOpen ? 'var(--pink-vivid)' : 'var(--border)'}`,
                  background: isOpen ? '#fff' : 'var(--surface)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'background 0.25s, border-color 0.25s',
                  overflow: 'hidden',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '24px 20px',
                    gap: 20,
                    textAlign: 'left',
                  }}
                >
                  {/* Question number + text */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1, minWidth: 0 }}>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: isOpen ? 'var(--pink-vivid)' : 'var(--border-2)',
                      flexShrink: 0,
                      width: 28,
                      transition: 'color 0.25s',
                      lineHeight: 1,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      lineHeight: 1.5,
                      color: isOpen ? 'var(--text)' : 'var(--text-muted)',
                      transition: 'color 0.25s',
                    }}>
                      {faq.q}
                    </span>
                  </div>

                  {/* Toggle icon — fixed size, never compresses */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? 'var(--pink-vivid)' : 'transparent' }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{
                      width: 36,
                      height: 36,
                      minWidth: 36,
                      minHeight: 36,
                      borderRadius: '50%',
                      border: `1.5px solid ${isOpen ? 'var(--pink-vivid)' : 'var(--border-2)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'border-color 0.25s',
                    }}
                  >
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <path
                        d="M7 1v12M1 7h12"
                        stroke={isOpen ? '#fff' : 'var(--text-muted)'}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        style={{ transition: 'stroke 0.25s' }}
                      />
                    </svg>
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        display: 'flex',
                        gap: 16,
                        padding: '0 20px 28px 20px',
                      }}>
                        {/* Left accent bar */}
                        <div style={{
                          width: 3,
                          minHeight: '100%',
                          background: 'var(--pink-vivid)',
                          borderRadius: 2,
                          flexShrink: 0,
                          marginLeft: 44,
                          opacity: 0.35,
                        }} />
                        <p style={{
                          fontSize: '0.9rem',
                          lineHeight: 1.85,
                          color: 'var(--text-muted)',
                          flex: 1,
                        }}>
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
