const hobbies = ['Arte', 'Dança', 'Games', 'Gastronomia', 'Música', 'Leitura', 'Natureza', 'Esportes', 'Tecnologia', 'Artesanato', 'Fotografia', 'Teatro', 'Yoga', 'Moda']

export default function MarqueeBar() {
  const items = [...hobbies, ...hobbies]
  return (
    <div style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden', whiteSpace: 'nowrap', padding: '11px 0', marginTop: 64 }}>
      <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} } .mq{display:inline-block;animation:marquee 30s linear infinite;font-size:.7rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--text-dim);}`}</style>
      <div className="mq">
        {items.map((h, i) => (
          <span key={i}>
            <span style={{ margin: '0 20px' }}>{h}</span>
            <span style={{ color: 'var(--pink-vivid)', verticalAlign: 'middle' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
