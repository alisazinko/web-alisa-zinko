const row1 = [
  { icon: '🔗', label: 'LinkedIn B2B' },
  { icon: '👥', label: 'Captación de Leads' },
  { icon: '🏷️', label: 'Marca' },
  { icon: '🔗', label: 'LinkedIn B2B' },
  { icon: '👥', label: 'Captación de Leads' },
  { icon: '🏷️', label: 'Marca' },
]

const row2 = [
  { icon: '🛡️', label: 'Autoridad Digital' },
  { icon: '📖', label: 'Storytelling' },
  { icon: '📊', label: 'Presentaciones' },
  { icon: '🎯', label: 'Estrategia' },
  { icon: '🛡️', label: 'Autoridad Digital' },
  { icon: '📖', label: 'Storytelling' },
  { icon: '📊', label: 'Presentaciones' },
  { icon: '🎯', label: 'Estrategia' },
]

function Tag({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 whitespace-nowrap mx-1.5">
      <span className="text-xs">{icon}</span>
      {label}
    </span>
  )
}

export default function MarqueeTags() {
  const row1Double = [...row1, ...row1]
  const row2Double = [...row2, ...row2]

  return (
    <div className="bg-[#E8E8E3] py-8 overflow-hidden">
      {/* Row 1 - left to right */}
      <div className="flex overflow-hidden mb-3">
        <div className="marquee-track">
          {row1Double.map((tag, i) => (
            <Tag key={i} {...tag} />
          ))}
        </div>
      </div>
      {/* Row 2 - right to left */}
      <div className="flex overflow-hidden">
        <div className="marquee-track-reverse">
          {row2Double.map((tag, i) => (
            <Tag key={i} {...tag} />
          ))}
        </div>
      </div>
    </div>
  )
}
