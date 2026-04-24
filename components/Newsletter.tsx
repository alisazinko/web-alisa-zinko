export default function Newsletter() {
  return (
    <section className="bg-[#ECEBE4] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <h2 className="font-serif italic text-[clamp(1.8rem,4vw,3rem)] leading-tight text-[#5B58D6]">
          Comunicación, IA y el futuro de la visibilidad digital.
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
          Una newsletter para profesionales que quieren anticiparse. Tendencias, estrategias,
          optimización y lo que está cambiando en comunicación B2B.
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
