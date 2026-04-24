const baseRow1 = [
  { icon: '🌐', label: 'Web Profesional' },
  { icon: '🎨', label: 'Identidad Visual' },
  { icon: '💼', label: 'LinkedIn Corporativo' },
  { icon: '📝', label: 'Contenido B2B' },
]

const baseRow2 = [
  { icon: '🔍', label: 'SEO Técnico' },
  { icon: '✍️', label: 'Ghostwriting' },
  { icon: '🛡️', label: 'Autoridad Digital' },
  { icon: '📈', label: 'Presencia Digital' },
  { icon: '🏷️', label: 'Marca' },
]

function Tag({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-700 leading-[1.6] whitespace-nowrap mx-1.5">
      <span className="text-[0.6875rem]">{icon}</span>
      {label}
    </span>
  )
}

export default function MarqueeTags() {
  const row1Items = [...baseRow1, ...baseRow1, ...baseRow1, ...baseRow1, ...baseRow1, ...baseRow1]
  const row2Items = [...baseRow2, ...baseRow2, ...baseRow2, ...baseRow2, ...baseRow2, ...baseRow2]

  return (
    <div className="bg-[#ECEBE4] py-10 md:py-14 overflow-hidden">
      <div className="flex overflow-hidden mb-3">
        <div className="marquee-track">
          {row1Items.map((tag, i) => (
            <Tag key={i} {...tag} />
          ))}
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="marquee-track-reverse">
          {row2Items.map((tag, i) => (
            <Tag key={i} {...tag} />
          ))}
        </div>
      </div>
    </div>
  )
}
