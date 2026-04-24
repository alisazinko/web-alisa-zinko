'use client'

import { useState } from 'react'

// Obtén tu access key en https://web3forms.com (gratis, solo pon tu email)
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ''

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo contacto web: ${form.nombre}`,
          from_name: form.nombre,
          email: form.email,
          telefono: form.telefono || '—',
          empresa: form.empresa || '—',
          mensaje: form.mensaje,
          // Redirige la respuesta a tu email
          redirect: 'false',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        setForm({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#5B58D6] focus:ring-1 focus:ring-[#5B58D6] transition-colors'

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white shadow-sm">
      {status === 'sent' ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="font-serif text-xl font-medium">¡Mensaje enviado!</h3>
          <p className="text-sm text-gray-600">Te responderé lo antes posible.</p>
          <button
            onClick={() => setStatus('idle')}
            className="text-sm text-[#5B58D6] hover:underline"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">
              Nombre<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              value={form.nombre}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">
              Email<span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="nombre@tuemail.com"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              placeholder="+1234567890"
              value={form.telefono}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">
              Tu empresa o proyecto
            </label>
            <input
              type="text"
              name="empresa"
              placeholder="Nombre de tu empresa o proyecto"
              value={form.empresa}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">
              Mensaje<span className="text-red-400">*</span>
            </label>
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              required
              rows={4}
              value={form.mensaje}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-[#5B58D6] hover:bg-[#4a47c0] disabled:opacity-60 text-white py-3 rounded-xl text-sm font-medium transition-colors"
          >
            {status === 'sending' ? 'Enviando...' : 'Enviar'}
          </button>

          {status === 'error' && (
            <p className="text-xs text-red-500 text-center">
              Algo salió mal. Escríbeme directamente a{' '}
              <a href="mailto:alisa@alisazinko.com" className="underline">
                alisa@alisazinko.com
              </a>
            </p>
          )}

          {/* Profile strip */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <img src="/alisa-photo.png" alt="Alisa Zinchenko" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs text-gray-600">alisa@alisazinko.com</span>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-700 border border-gray-200 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              DISPONIBLE
            </span>
          </div>
        </form>
      )}
    </div>
  )
}
