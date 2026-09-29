import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())

// Catálogo de eventos y archivos de San Pedro Lagunillas
export interface MediaItem {
  id: string
  title: string
  event: 'topaderas' | 'toros' | 'bailes'
  eventLabel: string
  location: string
  date: string
  type: 'photo' | 'video'
  previewUrl: string
  downloadFilename: string
  description: string
  priceDigital: number
  pricePhysical?: number
  physicalLabel?: string
  durationSec?: number
  highlight?: boolean
}

const mediaCatalog: MediaItem[] = [
  {
    id: 'vid-topaderas-2024',
    title: 'Topaderas Tradicionales de San Pedro Lagunillas - Edición Especial',
    event: 'topaderas',
    eventLabel: 'Topaderas Tradicionales',
    location: 'San Pedro Lagunillas, Nayarit',
    date: 'Temporada Festiva',
    type: 'video',
    previewUrl: '/static/images/foto-7-topadera-multitud.jpg',
    downloadFilename: 'Video_Topaderas_San_Pedro_Lagunillas_El_Tigre_FullHD.mp4',
    description: 'Cobertura completa en video 4K/Full HD de las emocionantes topaderas, la fiesta de harina, música de banda y la euforia del pueblo de San Pedro Lagunillas.',
    priceDigital: 600,
    pricePhysical: 700,
    physicalLabel: 'En Memoria USB de Regalo',
    durationSec: 10,
    highlight: true
  },
  {
    id: 'vid-toros-jaripeo',
    title: 'Gran Jaripeo Ranchero y Toros de Reparó',
    event: 'toros',
    eventLabel: 'Jaripeo y Toros',
    location: 'Lienzo Charro San Pedro Lagunillas',
    date: 'Temporada Festiva',
    type: 'video',
    previewUrl: '/static/images/foto-2-caballo-jaripeo.jpg',
    downloadFilename: 'Video_Jaripeo_Toros_San_Pedro_El_Tigre_FullHD.mp4',
    description: 'Video cinematográfico con las mejores montas, jinetes de alto poder, música de tamborazo y el ambiente bravío del ruedo.',
    priceDigital: 600,
    pricePhysical: 700,
    physicalLabel: 'En Memoria USB de Regalo',
    durationSec: 10,
    highlight: true
  },
  {
    id: 'vid-baile-feria',
    title: 'Noche de Baile y Tamborazo en la Plaza',
    event: 'bailes',
    eventLabel: 'Bailes y Fiestas',
    location: 'Plaza Principal San Pedro Lagunillas',
    date: 'Temporada Festiva',
    type: 'video',
    previewUrl: '/static/images/foto-6-baile-pareja.jpg',
    downloadFilename: 'Video_Gran_Baile_San_Pedro_El_Tigre_FullHD.mp4',
    description: 'Grabación profesional del gran baile popular, ambiente familiar, grupos en vivo y zapateado hasta la madrugada.',
    priceDigital: 600,
    pricePhysical: 700,
    physicalLabel: 'En Memoria USB de Regalo',
    durationSec: 10,
    highlight: true
  },
  // 10 Fotos destacadas
  {
    id: 'foto-1',
    title: 'Charro en la Fiesta con Sombrero Blanco y Pulgar Arriba',
    event: 'topaderas',
    eventLabel: 'Topaderas Tradicionales',
    location: 'San Pedro Lagunillas',
    date: '2024',
    type: 'photo',
    previewUrl: '/static/images/foto-1-vaquero-charro.jpg',
    downloadFilename: 'ElTigre_Foto_01_Charro_Original_HQ.jpg',
    description: 'Retrato conmemorativo tradicional durante los festejos con vestimenta campirana.',
    priceDigital: 30,
    pricePhysical: 50,
    physicalLabel: 'Impresa en Papel Fotográfico 4x6',
    highlight: true
  },
  {
    id: 'foto-2',
    title: 'Jinete a Caballo de Gala en el Ruedo de Jaripeo',
    event: 'toros',
    eventLabel: 'Jaripeo y Toros',
    location: 'Lienzo Charro San Pedro',
    date: '2024',
    type: 'photo',
    previewUrl: '/static/images/foto-2-caballo-jaripeo.jpg',
    downloadFilename: 'ElTigre_Foto_02_Jinete_Caballo_Negro_HQ.jpg',
    description: 'Impresionante fotografía nocturna de caballo azabache y jinete con sombrero charro en la arena.',
    priceDigital: 30,
    pricePhysical: 50,
    physicalLabel: 'Impresa en Papel Fotográfico 4x6',
    highlight: true
  },
  {
    id: 'foto-3',
    title: 'Compadres y Amigos en la Fiesta Brava del Ruedo',
    event: 'toros',
    eventLabel: 'Jaripeo y Toros',
    location: 'Lienzo Charro San Pedro',
    date: '2024',
    type: 'photo',
    previewUrl: '/static/images/foto-3-amigos-charros.jpg',
    downloadFilename: 'ElTigre_Foto_03_Amigos_Arena_HQ.jpg',
    description: 'Momento alegre de camaradería ranchera disfrutando en el centro del ruedo con sombrero charro.',
    priceDigital: 30,
    pricePhysical: 50,
    physicalLabel: 'Impresa en Papel Fotográfico 4x6',
    highlight: true
  },
  {
    id: 'foto-4',
    title: 'Familia Disfrutando en las Gradas del Lienzo',
    event: 'toros',
    eventLabel: 'Jaripeo y Toros',
    location: 'Gradas del Lienzo San Pedro',
    date: '2024',
    type: 'photo',
    previewUrl: '/static/images/foto-4-gradas-jaripeo.jpg',
    downloadFilename: 'ElTigre_Foto_04_Familia_Gradas_HQ.jpg',
    description: 'Papá e hija con sombrero vaquero viendo la corrida y el espectáculo ranchero con banderines festivos.',
    priceDigital: 30,
    pricePhysical: 50,
    physicalLabel: 'Impresa en Papel Fotográfico 4x6',
    highlight: true
  },
  {
    id: 'foto-5',
    title: 'Fiesta de Harina y Tradición Bajo el Árbol',
    event: 'topaderas',
    eventLabel: 'Topaderas Tradicionales',
    location: 'Barrio Tradicional San Pedro',
    date: '2024',
    type: 'photo',
    previewUrl: '/static/images/foto-5-topadera-harina.jpg',
    downloadFilename: 'ElTigre_Foto_05_Topadera_Tradicion_HQ.jpg',
    description: 'Celebración y baño de harina tradicional entre amigos que disfrutan de las costumbres del pueblo.',
    priceDigital: 30,
    pricePhysical: 50,
    physicalLabel: 'Impresa en Papel Fotográfico 4x6',
    highlight: true
  },
  {
    id: 'foto-6',
    title: 'Pareja en la Noche de Baile y Tacos en la Feria',
    event: 'bailes',
    eventLabel: 'Bailes y Fiestas',
    location: 'Zona de Baile y Antojitos',
    date: '2024',
    type: 'photo',
    previewUrl: '/static/images/foto-6-baile-pareja.jpg',
    downloadFilename: 'ElTigre_Foto_06_Pareja_Baile_HQ.jpg',
    description: 'Retrato de pareja con gesto de paz disfrutando de la gastronomía y música del baile nocturno.',
    priceDigital: 30,
    pricePhysical: 50,
    physicalLabel: 'Impresa en Papel Fotográfico 4x6',
    highlight: true
  },
  {
    id: 'foto-7',
    title: 'Toma Aérea de la Euforia en la Ruta Patria Topaderas',
    event: 'topaderas',
    eventLabel: 'Topaderas Tradicionales',
    location: 'Callejonada San Pedro',
    date: '2024',
    type: 'photo',
    previewUrl: '/static/images/foto-7-topadera-multitud.jpg',
    downloadFilename: 'ElTigre_Foto_07_Multitud_RutaPatria_HQ.jpg',
    description: 'Vista panorámica impresionante del gentío y la lluvia blanca de harina en la calle de las topaderas.',
    priceDigital: 30,
    pricePhysical: 50,
    physicalLabel: 'Impresa en Papel Fotográfico 4x6',
    highlight: true
  },
  {
    id: 'foto-8',
    title: 'Rostros y Pasión de la Fiesta de Harina',
    event: 'topaderas',
    eventLabel: 'Topaderas Tradicionales',
    location: 'Centro Histórico San Pedro',
    date: '2024',
    type: 'photo',
    previewUrl: '/static/images/foto-8-fiesta-harina-rostro.jpg',
    downloadFilename: 'ElTigre_Foto_08_Retrato_Fiesta_HQ.jpg',
    description: 'Primer plano de los participantes con gafas de sol y gorras cubiertos de polvo festivo de harina.',
    priceDigital: 30,
    pricePhysical: 50,
    physicalLabel: 'Impresa en Papel Fotográfico 4x6',
    highlight: true
  },
  {
    id: 'foto-9',
    title: 'Gran Vista Cenital de la Concentración en la Plaza',
    event: 'topaderas',
    eventLabel: 'Topaderas Tradicionales',
    location: 'Plazoleta San Pedro Lagunillas',
    date: '2024',
    type: 'photo',
    previewUrl: '/static/images/foto-9-topadera-plaza.jpg',
    downloadFilename: 'ElTigre_Foto_09_Plaza_Topaderas_Cenital_HQ.jpg',
    description: 'Perspectiva aérea de cientos de personas cantando, bailando y arrojando harina con la música en vivo.',
    priceDigital: 30,
    pricePhysical: 50,
    physicalLabel: 'Impresa en Papel Fotográfico 4x6',
    highlight: true
  },
  {
    id: 'foto-10-logo',
    title: 'Escudo e Identidad Oficial "Fotos y Video El Tigre"',
    event: 'topaderas',
    eventLabel: 'Identidad El Tigre',
    location: 'Estudio Oficial El Tigre',
    date: '2024',
    type: 'photo',
    previewUrl: '/static/images/logo-el-tigre.jpg',
    downloadFilename: 'ElTigre_Logo_Oficial_Vector_HQ.jpg',
    description: 'Emblema oficial dorado y negro con el tigre y carrete cinematográfico de Capturing Moments Prof. Video & Photos.',
    priceDigital: 30,
    pricePhysical: 50,
    physicalLabel: 'Impresa en Papel Fotográfico 4x6',
    highlight: true
  }
]

// Estructura en memoria para tokens de descarga de UN SOLO USO
interface DownloadToken {
  token: string
  orderId: string
  customerName: string
  customerPhone: string
  items: Array<{
    mediaId: string
    title: string
    type: 'photo' | 'video'
    format: 'digital' | 'physical'
    filename: string
    downloadUrl: string
  }>
  totalAmount: number
  status: 'active' | 'used' | 'expired'
  createdAt: number
  usedAt?: number
  expiresAt: number
}

// Almacén seguro en memoria
const tokensStore = new Map<string, DownloadToken>()

// Pre-creamos algunos pedidos de demostración activos para que el usuario pueda probar de inmediato
function initDemoTokens() {
  const sampleToken1: DownloadToken = {
    token: 'TIGRE-DEMO-DIGITAL-2024',
    orderId: 'ORD-9842',
    customerName: 'Cliente Ejemplo San Pedro',
    customerPhone: '3118470860',
    items: [
      {
        mediaId: 'vid-topaderas-2024',
        title: 'Topaderas Tradicionales de San Pedro Lagunillas - Edición Especial',
        type: 'video',
        format: 'digital',
        filename: 'Video_Topaderas_San_Pedro_Lagunillas_El_Tigre_FullHD.mp4',
        downloadUrl: '/static/images/foto-7-topadera-multitud.jpg'
      },
      {
        mediaId: 'foto-2',
        title: 'Jinete a Caballo de Gala en el Ruedo de Jaripeo',
        type: 'photo',
        format: 'digital',
        filename: 'ElTigre_Foto_02_Jinete_Caballo_Negro_HQ.jpg',
        downloadUrl: '/static/images/foto-2-caballo-jaripeo.jpg'
      }
    ],
    totalAmount: 630,
    status: 'active',
    createdAt: Date.now(),
    expiresAt: Date.now() + 1000 * 60 * 60 * 48 // 48 horas
  }
  tokensStore.set(sampleToken1.token, sampleToken1)
}

initDemoTokens()

// API: Obtener catálogo completo o filtrado
app.get('/api/catalog', (c) => {
  const event = c.req.query('event')
  const type = c.req.query('type')

  let filtered = mediaCatalog
  if (event && event !== 'all') {
    filtered = filtered.filter((item) => item.event === event)
  }
  if (type && type !== 'all') {
    filtered = filtered.filter((item) => item.type === type)
  }

  return c.json({
    success: true,
    total: filtered.length,
    catalog: filtered,
    prices: {
      videoDigital: 600,
      videoUsb: 700,
      fotoDigital: 30,
      fotoImpresa4x6: 50
    },
    contactPhone: '3118470860',
    contactWhatsapp: '+523118470860'
  })
})

// API: Crear solicitud de pedido y generar enlace WhatsApp + Token pendiente
app.post('/api/orders/create', async (c) => {
  try {
    const body = await c.req.json()
    const { customerName, customerPhone, customerNote, items } = body

    if (!customerName || !items || !Array.isArray(items) || items.length === 0) {
      return c.json({ success: false, error: 'Datos de pedido incompletos.' }, 400)
    }

    const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000)
    // Generar token único seguro
    const token = 'TIGRE-' + Math.random().toString(36).substring(2, 8).toUpperCase() + '-' + Date.now().toString(36).toUpperCase()

    let totalAmount = 0
    const processedItems = items.map((it: any) => {
      const media = mediaCatalog.find((m) => m.id === it.mediaId)
      const isVideo = media?.type === 'video'
      const isUsbOrPrint = it.format === 'usb' || it.format === 'printed'

      let price = 0
      if (isVideo) {
        price = isUsbOrPrint ? 700 : 600
      } else {
        price = isUsbOrPrint ? 50 : 30
      }
      totalAmount += price

      return {
        mediaId: it.mediaId,
        title: media ? media.title : 'Material El Tigre',
        type: (isVideo ? 'video' : 'photo') as 'photo' | 'video',
        format: (isUsbOrPrint ? 'physical' : 'digital') as 'digital' | 'physical',
        formatLabel: isVideo ? (isUsbOrPrint ? 'USB ($700 MXN)' : 'Digital ($600 MXN)') : (isUsbOrPrint ? 'Impresa 4x6 ($50 MXN)' : 'Digital HD ($30 MXN)'),
        filename: media?.downloadFilename || 'ElTigre_Material.jpg',
        downloadUrl: media?.previewUrl || '/static/images/logo-el-tigre.jpg'
      }
    })

    const newDownloadToken: DownloadToken = {
      token,
      orderId,
      customerName: customerName || 'Cliente',
      customerPhone: customerPhone || '3118470860',
      items: processedItems,
      totalAmount,
      status: 'active',
      createdAt: Date.now(),
      expiresAt: Date.now() + 1000 * 60 * 60 * 72 // 72 horas para usar
    }

    tokensStore.set(token, newDownloadToken)

    // Formatear mensaje para WhatsApp
    let waMessage = `🐅 *FOTOS Y VIDEO EL TIGRE - NUEVO PEDIDO*\n`
    waMessage += `📋 *Folio:* ${orderId}\n`
    waMessage += `👤 *Cliente:* ${customerName}\n`
    if (customerPhone) waMessage += `📱 *Tel:* ${customerPhone}\n`
    waMessage += `\n🛒 *Material Solicitado:*\n`
    processedItems.forEach((item, idx) => {
      waMessage += `${idx + 1}. ${item.title} (${item.formatLabel})\n`
    })
    waMessage += `\n💰 *Total a pagar:* $${totalAmount} MXN\n`
    if (customerNote) waMessage += `📝 *Nota:* ${customerNote}\n`
    waMessage += `\n🔐 *Token de Descarga Única:* ${token}\n`
    waMessage += `\n_Hola, deseo confirmar el pago de este pedido para habilitar mi descarga de un solo uso._`

    const encodedMessage = encodeURIComponent(waMessage)
    const whatsappUrl = `https://wa.me/523118470860?text=${encodedMessage}`

    return c.json({
      success: true,
      orderId,
      token,
      totalAmount,
      whatsappUrl,
      itemsCount: processedItems.length,
      downloadLink: `/descargar?token=${token}`,
      message: 'Pedido generado exitosamente. Completa el pago en WhatsApp para validar la descarga.'
    })
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500)
  }
})

// API: Validar y consultar estado de un token
app.get('/api/tokens/check/:token', (c) => {
  const tokenStr = c.req.param('token').trim()
  const tokenData = tokensStore.get(tokenStr)

  if (!tokenData) {
    return c.json({
      success: false,
      valid: false,
      error: 'El link o token de descarga no existe o es inválido.'
    }, 404)
  }

  // Verificar si expiró
  if (Date.now() > tokenData.expiresAt) {
    tokenData.status = 'expired'
    return c.json({
      success: false,
      valid: false,
      status: 'expired',
      error: 'Este link de descarga ha expirado (límite de tiempo agotado).'
    }, 410)
  }

  // Verificar si ya fue utilizado (un solo uso)
  if (tokenData.status === 'used') {
    return c.json({
      success: false,
      valid: false,
      status: 'used',
      usedAt: tokenData.usedAt,
      error: '⚠️ Este link de descarga ya fue utilizado. Por motivos de seguridad y derechos de autor, solo es de UN SOLO USO.'
    }, 403)
  }

  return c.json({
    success: true,
    valid: true,
    status: 'active',
    orderId: tokenData.orderId,
    customerName: tokenData.customerName,
    items: tokenData.items,
    totalAmount: tokenData.totalAmount,
    createdAt: tokenData.createdAt,
    expiresAt: tokenData.expiresAt
  })
})

// API: Consumir / Descargar archivo de un solo uso
app.post('/api/tokens/consume/:token', async (c) => {
  const tokenStr = c.req.param('token').trim()
  const tokenData = tokensStore.get(tokenStr)

  if (!tokenData) {
    return c.json({ success: false, error: 'Token no encontrado.' }, 404)
  }

  if (tokenData.status === 'used') {
    return c.json({
      success: false,
      error: 'Este enlace ya fue consumido y no puede descargarse nuevamente. Solicite asistencia al WhatsApp 3118470860 si tuvo un problema técnico.'
    }, 403)
  }

  // Marcar como USADO inmediatamente
  tokenData.status = 'used'
  tokenData.usedAt = Date.now()
  tokensStore.set(tokenStr, tokenData)

  return c.json({
    success: true,
    message: 'Descarga autorizada y token quemado satisfactoriamente (un solo uso).',
    files: tokenData.items.map((it) => ({
      title: it.title,
      filename: it.filename,
      url: it.downloadUrl,
      type: it.type
    }))
  })
})

// React controla las páginas; Hono conserva la API y entrega el punto de montaje.
function renderReactShell(title: string) {
  const clientEntry = import.meta.env.PROD ? "/static/client.js" : "/src/main.tsx"
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0c0c0e" />
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config={theme:{extend:{colors:{tigre:{gold:"#D4AF37",goldLight:"#F3E5AB",goldDark:"#996515",dark:"#0D0D0E",card:"#161619",accent:"#E65100",orange:"#FF6D00"}},fontFamily:{sans:["Montserrat","sans-serif"],display:["Oswald","sans-serif"]}}}}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&family=Oswald:wght@500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="stylesheet" href="/static/style.css" />
</head>
<body><div id="root"></div><script type="module" src="${clientEntry}"></script></body>
</html>`
}

app.get("/", (c) => c.html(renderReactShell("Fotos y Video El Tigre | San Pedro Lagunillas")))
app.get("/descargar", (c) => c.html(renderReactShell("Centro de Descarga | Fotos y Video El Tigre")))

export default app
