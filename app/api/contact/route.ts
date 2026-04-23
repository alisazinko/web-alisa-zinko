import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, email, telefono, empresa, mensaje } = body

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
    }

    // TODO: Send email via your preferred service (Resend, SendGrid, etc.)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'web@alisazinko.com',
    //   to: 'alisa@alisazinko.com',
    //   subject: `Nuevo contacto de ${nombre}`,
    //   html: `<p><b>Nombre:</b> ${nombre}</p>
    //          <p><b>Email:</b> ${email}</p>
    //          <p><b>Teléfono:</b> ${telefono || '-'}</p>
    //          <p><b>Empresa:</b> ${empresa || '-'}</p>
    //          <p><b>Mensaje:</b> ${mensaje}</p>`
    // })

    console.log('Contact form submission:', { nombre, email, telefono, empresa, mensaje })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
