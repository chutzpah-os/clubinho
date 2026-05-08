'use client'

export default function Footer() {
  return (
    <footer className="footer-outer" style={{ background: 'var(--bg)', padding: '64px 24px 36px', borderTop: '1px solid var(--border)' }}>
      <div className="footer-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 48, alignItems: 'start' }}>

        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: 12, letterSpacing: '-0.01em' }}>
            Clubinho <em style={{ fontStyle: 'italic', color: 'var(--pink-vivid)' }}>Co.</em>
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.75, maxWidth: 240, color: 'var(--text-muted)' }}>
            Explore hobbies, encontre sua galera e viva o que te move — sem pressão, sem compromisso.
          </p>
          <div style={{ marginTop: 20 }}>
            <a
              href="https://www.instagram.com/seuclubinho/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram do Clubinho"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 38, height: 38, borderRadius: '50%',
                border: '1px solid var(--border-2)',
                color: 'var(--text-muted)', textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.borderColor = 'var(--pink-vivid)'
                e.currentTarget.style.color = 'var(--pink-vivid)'
                e.currentTarget.style.background = 'var(--pink-light)'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.borderColor = 'var(--border-2)'
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-dim)', marginBottom: 16 }}>Navegação</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['Como Funciona', '#como-funciona'], ['Diferenciais', '#diferenciais'], ['Para Parceiros', '#parceiros'], ['Pré-Cadastro', '#cadastro'], ['FAQ', '#faq']].map(([label, href]) => (
              <li key={href}>
                <a href={href} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-dim)', marginBottom: 16 }}>Legal</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['Política de Privacidade', '#'], ['Termos de Uso', '#'], ['Contato', '#']].map(([label, href]) => (
              <li key={label}>
                <a href={href} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{
        maxWidth: 1100, margin: '48px auto 0',
        borderTop: '1px solid var(--border)', paddingTop: 24,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12, fontSize: '0.78rem', color: 'var(--text-dim)',
      }}>
        <span>© 2025 Clubinho Co. Todos os direitos reservados.</span>
        <span>Feito com carinho para quem ama descobrir coisas novas ◆</span>
      </div>
    </footer>
  )
}
