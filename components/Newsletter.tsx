export default function Newsletter() {
  return (
    <section className="bg-[#ECEBE4] py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <h2 className="font-serif italic text-[clamp(1.9rem,3.5vw,2.75rem)] leading-[1.1] tracking-[-0.02em] text-[#5B58D6]">
          Estrategia digital, IA y marca personal: sin filtros.
        </h2>
        <p className="text-[1.0625rem] text-gray-600 leading-[1.7] max-w-lg mx-auto">
          Una newsletter para curiosos que quieren entender cómo está cambiando la comunicación
          digital. Estrategias reales, novedades sobre IA aplicada al marketing y reflexiones
          sobre marca personal y contenido B2B.
        </p>
        <a
          href="https://substack.com/@alisazinko"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#5B58D6] hover:bg-[#4a47c0] text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
        >
          Unirme ahora
        </a>
      </div>
    </section>
  )
}
