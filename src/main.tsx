import React, { FormEvent, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'

type MediaItem = {
  id: string
  title: string
  event: 'topaderas' | 'toros' | 'bailes'
  eventLabel: string
  location: string
  date: string
  type: 'photo' | 'video'
  previewUrl: string
  description: string
  priceDigital: number
  pricePhysical?: number
}
type CartItem = { mediaId: string; format: 'digital' | 'usb' | 'printed' }
type CatalogResponse = { success: boolean; catalog: MediaItem[] }
type TokenResponse = {
  success: boolean
  valid?: boolean
  status?: string
  error?: string
  orderId?: string
  customerName?: string
  items?: Array<{ title: string; filename: string; type: 'photo' | 'video' }>
}

const money = (value: number) => `$${value} MXN`
const filters = [
  ['all', 'Todo'],
  ['topaderas', 'Topaderas'],
  ['toros', 'Jaripeo y toros'],
  ['bailes', 'Bailes'],
] as const

function App() {
  return window.location.pathname === '/descargar' ? <DownloadPage /> : <Storefront />
}

function Storefront() {
  const [catalog, setCatalog] = useState<MediaItem[]>([])
  const [filter, setFilter] = useState<string>('all')
  const [cart, setCart] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem('eltigre_cart') || '[]') } catch { return [] }
  })
  const [selected, setSelected] = useState<MediaItem | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [order, setOrder] = useState<{ orderId: string; token: string; totalAmount: number; whatsappUrl: string } | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [previewIndex, setPreviewIndex] = useState(0)
  const [previewPlaying, setPreviewPlaying] = useState(false)

  useEffect(() => {
    fetch('/api/catalog').then(r => r.json() as Promise<CatalogResponse>).then(data => {
      if (data.success) setCatalog(data.catalog)
    }).catch(() => setError('No se pudo cargar el catálogo. Recarga la página para intentarlo de nuevo.'))
  }, [])
  useEffect(() => { localStorage.setItem('eltigre_cart', JSON.stringify(cart)) }, [cart])
  useEffect(() => {
    if (!previewPlaying) return
    const timer = window.setInterval(() => setPreviewIndex(i => (i + 1) % 4), 2500)
    const stop = window.setTimeout(() => setPreviewPlaying(false), 10_000)
    return () => { window.clearInterval(timer); window.clearTimeout(stop) }
  }, [previewPlaying])

  const visible = useMemo(() => filter === 'all' ? catalog : catalog.filter(item => item.event === filter), [catalog, filter])
  const photos = catalog.filter(item => item.type === 'photo')
  const total = cart.reduce((sum, entry) => {
    const media = catalog.find(item => item.id === entry.mediaId)
    return sum + (media ? priceFor(media, entry.format) : 0)
  }, 0)
  const previewImages = [
    '/static/images/foto-7-topadera-multitud.jpg',
    '/static/images/foto-5-topadera-harina.jpg',
    '/static/images/foto-9-topadera-plaza.jpg',
    '/static/images/foto-8-fiesta-harina-rostro.jpg',
  ]

  function addItem(item: MediaItem, format: CartItem['format'] = 'digital') {
    setCart(current => [...current, { mediaId: item.id, format }])
    setSelected(null)
    setCartOpen(true)
  }
  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!cart.length) return
    const form = new FormData(event.currentTarget)
    setBusy(true); setError('')
    fetch('/api/orders/create', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerName: String(form.get('name') || '').trim(),
        customerPhone: String(form.get('phone') || '').trim(),
        customerNote: String(form.get('note') || '').trim(), items: cart,
      }),
    }).then(r => r.json()).then(data => {
      if (!data.success) throw new Error(data.error || 'No se pudo crear el pedido.')
      setOrder(data); setCart([]); setCartOpen(false)
    }).catch(err => setError(err.message || 'Error de conexión. Intenta otra vez.'))
      .finally(() => setBusy(false))
  }

  return <div className="min-h-screen bg-[#0c0c0e] text-zinc-100">
    <header className="border-b border-amber-900/40 bg-gradient-to-r from-amber-950 via-zinc-900 to-amber-950 px-4 py-2 text-xs text-amber-200">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
        <span>Fotografía y video de las fiestas de San Pedro Lagunillas</span>
        <a className="text-emerald-400" href="https://wa.me/523118470860" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp mr-2"/>WhatsApp 311 847 0860</a>
      </div>
    </header>
    <nav className="sticky top-0 z-30 border-b border-zinc-800 bg-zinc-950/95 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="flex items-center gap-3"><img className="h-11 w-11 rounded-full border-2 border-amber-500 object-cover" src="/static/images/logo-el-tigre.jpg" alt="Logo El Tigre"/><span><small className="block text-[10px] tracking-widest text-amber-400">FOTOS Y VIDEO</small><b className="font-display text-xl tracking-wider text-amber-300">EL TIGRE</b></span></a>
        <div className="flex items-center gap-3"><a href="/descargar" className="hidden text-sm text-zinc-300 sm:block">Canjear token</a><button onClick={() => setCartOpen(true)} className="rounded-xl border border-amber-500/30 bg-zinc-800 px-4 py-2 text-sm text-amber-300"><i className="fas fa-shopping-bag mr-2"/>Mi pedido ({cart.length})</button></div>
      </div>
    </nav>

    <main>
      <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 via-zinc-900 to-[#0c0c0e] px-4 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div><span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs font-bold uppercase text-amber-300">Tradición de San Pedro Lagunillas</span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-6xl">TOPADERAS, TOROS Y BAILES <span className="text-amber-400">EL TIGRE</span></h1>
            <p className="mt-5 max-w-2xl text-zinc-300">Revive los mejores momentos de las fiestas, el jaripeo y los bailes populares con fotografía y video profesional.</p>
            <div className="mt-7 flex flex-wrap gap-3"><a className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-zinc-950" href="#galeria">Explorar galería</a><a className="rounded-xl bg-emerald-700 px-5 py-3 font-bold text-white" href="https://wa.me/523118470860" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp mr-2"/>Pedir información</a></div>
            <div className="mt-8 grid max-w-lg grid-cols-2 gap-3 text-sm"><div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"><b className="text-amber-300">VIDEO</b><p className="mt-1">Digital $600 · USB $700</p></div><div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"><b className="text-amber-300">FOTOGRAFÍAS</b><p className="mt-1">Digital $30 · Impresa $50</p></div></div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-black shadow-2xl"><img className="aspect-video w-full object-cover" src={previewImages[previewIndex]} alt="Muestra de las topaderas"/><div className="absolute inset-0 flex items-center justify-center bg-black/20"><button aria-label={previewPlaying ? 'Pausar vista previa' : 'Reproducir vista previa'} onClick={() => setPreviewPlaying(value => !value)} className="h-16 w-16 rounded-full bg-amber-400 text-2xl text-zinc-950"><i className={`fas ${previewPlaying ? 'fa-pause' : 'fa-play'}`}/></button></div><span className="absolute bottom-3 left-3 rounded bg-black/70 px-3 py-1 text-xs">Muestra · vista previa de 10 segundos</span></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12" id="destacadas"><div className="mb-5 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-amber-400">Momentos destacados</p><h2 className="mt-1 text-2xl font-bold">Fotografías recientes</h2></div><div className="flex gap-2"><button aria-label="Desplazar fotos a la izquierda" onClick={() => document.getElementById('photo-strip')?.scrollBy({ left: -320, behavior: 'smooth' })} className="rounded-lg bg-zinc-800 px-3 py-2">←</button><button aria-label="Desplazar fotos a la derecha" onClick={() => document.getElementById('photo-strip')?.scrollBy({ left: 320, behavior: 'smooth' })} className="rounded-lg bg-zinc-800 px-3 py-2">→</button></div></div>
        <div id="photo-strip" className="flex gap-4 overflow-x-auto pb-3">{photos.map((item, index) => <button onClick={() => setSelected(item)} key={item.id} className="w-64 shrink-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-left"><img className="h-60 w-full object-cover" src={item.previewUrl} alt={item.title}/><span className="block p-3"><small className="text-amber-400">#{index + 1} · {item.eventLabel}</small><b className="mt-1 block truncate text-sm">{item.title}</b></span></button>)}</div>
      </section>

      <section id="galeria" className="mx-auto max-w-7xl px-4 py-10"><p className="text-xs font-bold uppercase tracking-widest text-amber-400">Catálogo</p><h2 className="mt-1 text-3xl font-bold">Galería de eventos</h2>
        <div className="my-5 flex flex-wrap gap-2">{filters.map(([id, label]) => <button key={id} onClick={() => setFilter(id)} className={`rounded-xl border px-4 py-2 text-xs font-bold ${filter === id ? 'border-amber-400 bg-amber-400 text-zinc-950' : 'border-zinc-800 bg-zinc-900 text-zinc-300'}`}>{label}</button>)}</div>
        {error && !order && <p role="alert" className="mb-4 rounded-lg bg-red-950 p-3 text-sm text-red-200">{error}</p>}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map(item => <article key={item.id} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"><button onClick={() => setSelected(item)} className="relative block w-full"><img className={`w-full object-cover ${item.type === 'video' ? 'aspect-video' : 'aspect-[4/3]'}`} src={item.previewUrl} alt={item.title}/><span className="absolute bottom-2 right-2 rounded bg-black/75 px-2 py-1 text-[10px] text-amber-200">EL TIGRE · MUESTRA</span></button><div className="p-4"><small className="text-amber-400">{item.eventLabel} · {item.date}</small><h3 className="mt-1 font-bold">{item.title}</h3><p className="mt-2 line-clamp-2 text-xs text-zinc-400">{item.description}</p><div className="mt-4 flex items-center justify-between"><span className="text-xs text-zinc-300">Desde {money(item.priceDigital)}</span><button onClick={() => addItem(item)} className="rounded-lg bg-amber-400 px-3 py-2 text-xs font-bold text-zinc-950">Agregar</button></div></div></article>)}</div>
        {!visible.length && <p className="py-12 text-center text-zinc-400">Cargando catálogo…</p>}
      </section>
    </main>
    <footer className="mt-12 border-t border-zinc-800 bg-zinc-950 px-4 py-8 text-center text-sm text-zinc-400">Fotos y Video El Tigre · San Pedro Lagunillas, Nayarit · <a className="text-emerald-400" href="https://wa.me/523118470860">WhatsApp 311 847 0860</a></footer>

    {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelected(null)}><div className="max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl border border-zinc-700 bg-zinc-900 p-5" onClick={e => e.stopPropagation()}><button className="float-right text-zinc-400" onClick={() => setSelected(null)} aria-label="Cerrar">✕</button><img className="mb-4 max-h-80 w-full rounded-xl object-cover" src={selected.previewUrl} alt={selected.title}/><small className="text-amber-400">{selected.eventLabel} · {selected.location}</small><h2 className="my-2 text-xl font-bold">{selected.title}</h2><p className="text-sm text-zinc-300">{selected.description}</p><p className="mt-4 text-sm">Digital: {money(selected.priceDigital)} · {selected.type === 'video' ? 'USB' : 'Impresión 4x6'}: {money(selected.pricePhysical || 0)}</p><div className="mt-5 flex flex-wrap gap-2"><button onClick={() => addItem(selected, 'digital')} className="rounded-lg bg-amber-400 px-4 py-2 font-bold text-zinc-950">Agregar digital</button><button onClick={() => addItem(selected, selected.type === 'video' ? 'usb' : 'printed')} className="rounded-lg bg-zinc-700 px-4 py-2 font-bold">Agregar físico</button></div></div></div>}

    {cartOpen && <div className="fixed inset-0 z-50 flex justify-end bg-black/75" onClick={() => setCartOpen(false)}><aside className="h-full w-full max-w-lg overflow-y-auto bg-zinc-900 p-5" onClick={e => e.stopPropagation()}><div className="flex items-center justify-between"><h2 className="text-xl font-bold">Tu pedido</h2><button onClick={() => setCartOpen(false)} aria-label="Cerrar">✕</button></div>{cart.length ? <><div className="my-5 space-y-3">{cart.map((entry, index) => { const item = catalog.find(media => media.id === entry.mediaId); return item ? <div key={`${entry.mediaId}-${index}`} className="flex items-center gap-3 rounded-xl bg-zinc-950 p-3"><img className="h-14 w-14 rounded-lg object-cover" src={item.previewUrl} alt=""/><div className="min-w-0 flex-1"><b className="block truncate text-sm">{item.title}</b><small className="text-zinc-400">{entry.format} · {money(priceFor(item, entry.format))}</small></div><button aria-label="Quitar artículo" onClick={() => setCart(current => current.filter((_, i) => i !== index))} className="text-red-300">Quitar</button></div> : null })}</div><div className="mb-4 border-t border-zinc-700 pt-3 text-right font-bold">Total: {money(total)}</div><form onSubmit={submitOrder} className="space-y-3"><input required name="name" maxLength={100} placeholder="Tu nombre" className="w-full rounded-lg bg-zinc-950 p-3 text-sm"/><input name="phone" maxLength={30} placeholder="Teléfono" className="w-full rounded-lg bg-zinc-950 p-3 text-sm"/><textarea name="note" maxLength={500} placeholder="Nota (opcional)" className="w-full rounded-lg bg-zinc-950 p-3 text-sm"/><button disabled={busy} className="w-full rounded-lg bg-amber-400 p-3 font-bold text-zinc-950 disabled:opacity-50">{busy ? 'Creando pedido…' : 'Crear pedido y continuar'}</button>{error && <p role="alert" className="text-sm text-red-300">{error}</p>}</form></> : <p className="py-12 text-center text-zinc-400">Tu pedido está vacío. Agrega material de la galería.</p>}</aside></div>}

    {order && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"><div className="w-full max-w-md rounded-2xl border border-amber-500/30 bg-zinc-900 p-6"><h2 className="text-xl font-bold">Pedido registrado</h2><p className="mt-3 text-sm text-zinc-300">Folio {order.orderId} · Total {money(order.totalAmount)}</p><p className="mt-3 break-all rounded-lg bg-zinc-950 p-3 font-mono text-sm text-amber-300">{order.token}</p><p className="my-3 text-xs text-zinc-400">Conserva el token y confirma el pago por WhatsApp.</p><div className="flex flex-col gap-2"><a className="rounded-lg bg-emerald-700 p-3 text-center font-bold" href={order.whatsappUrl} target="_blank" rel="noreferrer">Continuar en WhatsApp</a><a className="rounded-lg bg-amber-400 p-3 text-center font-bold text-zinc-950" href={`/descargar?token=${encodeURIComponent(order.token)}`}>Abrir centro de descarga</a><button onClick={() => setOrder(null)} className="p-2 text-sm text-zinc-400">Cerrar</button></div></div></div>}
  </div>
}

function priceFor(item: MediaItem, format: CartItem['format']) {
  return format === 'digital' ? item.priceDigital : item.pricePhysical || (item.type === 'video' ? 700 : 50)
}

function DownloadPage() {
  const [token, setToken] = useState(() => new URLSearchParams(window.location.search).get('token') || '')
  const [data, setData] = useState<TokenResponse | null>(null)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')

  async function checkToken(value = token) {
    if (!value.trim()) { setMessage('Escribe el token de tu pedido.'); return }
    setBusy(true); setMessage('')
    try {
      const result = await fetch(`/api/tokens/check/${encodeURIComponent(value.trim())}`).then(r => r.json()) as TokenResponse
      setData(result)
      if (!result.valid) setMessage(result.error || 'No se pudo validar el token.')
    } catch { setMessage('No se pudo contactar con el servidor.') }
    finally { setBusy(false) }
  }
  async function consume() {
    setBusy(true); setMessage('')
    try {
      const result = await fetch(`/api/tokens/consume/${encodeURIComponent(token.trim())}`, { method: 'POST' }).then(r => r.json())
      if (!result.success) throw new Error(result.error || 'No se pudo iniciar la descarga.')
      for (const [index, file] of (result.files as Array<{ url: string; filename: string }>).entries()) {
        window.setTimeout(() => { const anchor = document.createElement('a'); anchor.href = file.url; anchor.download = file.filename; anchor.rel = 'noreferrer'; anchor.click() }, index * 800)
      }
      setData(null); setMessage('Se solicitó la descarga. Si tienes algún problema, comunícate por WhatsApp al 311 847 0860.')
    } catch (err) { setMessage(err instanceof Error ? err.message : 'Error al iniciar la descarga.') }
    finally { setBusy(false) }
  }
  useEffect(() => { if (token) void checkToken(token) }, [])

  return <main className="flex min-h-screen items-center justify-center bg-[#0b0b0d] px-4 py-10 text-zinc-100"><section className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-9"><a href="/" className="text-sm text-amber-300">← Volver a la galería</a><div className="my-6 text-center"><img className="mx-auto h-16 w-16 rounded-full border-2 border-amber-500 object-cover" src="/static/images/logo-el-tigre.jpg" alt="Logo El Tigre"/><h1 className="mt-4 text-2xl font-bold">Centro de descarga</h1><p className="mt-2 text-sm text-zinc-400">Ingresa el token de tu pedido para consultar los archivos.</p></div><form className="flex flex-col gap-3 sm:flex-row" onSubmit={e => { e.preventDefault(); void checkToken() }}><input value={token} onChange={e => setToken(e.target.value)} placeholder="Token de pedido" className="min-w-0 flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 font-mono text-amber-300"/><button disabled={busy} className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-zinc-950 disabled:opacity-50">Verificar</button></form>{message && <p role="status" className="mt-4 rounded-xl bg-zinc-950 p-4 text-sm text-zinc-200">{message}</p>}{data?.valid && <div className="mt-5 rounded-xl border border-emerald-700 bg-emerald-950/30 p-4"><b className="text-emerald-300">Token válido</b><p className="mt-2 text-sm">Folio: {data.orderId} · Cliente: {data.customerName}</p><ul className="my-4 space-y-2">{data.items?.map(file => <li className="rounded-lg bg-zinc-950 p-3 text-sm" key={file.filename}>{file.type === 'video' ? '🎞️' : '📷'} {file.title} <small className="block text-zinc-400">{file.filename}</small></li>)}</ul><button disabled={busy} onClick={() => void consume()} className="w-full rounded-xl bg-amber-400 p-3 font-bold text-zinc-950 disabled:opacity-50">{busy ? 'Procesando…' : 'Consumir token e iniciar descarga'}</button></div>}<p className="mt-5 text-center text-xs text-zinc-500">¿Necesitas ayuda? <a className="text-emerald-400" href="https://wa.me/523118470860">WhatsApp 311 847 0860</a></p></section></main>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
