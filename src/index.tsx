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

// Servir página principal
app.get('/', (c) => {
  return c.html(getFrontendHtml())
})

// Servir página dedicada de descarga por token
app.get('/descargar', (c) => {
  const token = c.req.query('token') || ''
  return c.html(getDownloadPageHtml(token))
})

// HTML Principal del sitio
function getFrontendHtml(): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fotos y Video El Tigre | San Pedro Lagunillas, Nayarit</title>
  
  <!-- Tailwind CSS & FontAwesome -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Google Fonts: Montserrat & Oswald -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,400&family=Oswald:wght@500;700&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            tigre: {
              gold: '#D4AF37',
              goldLight: '#F3E5AB',
              goldDark: '#996515',
              dark: '#0D0D0E',
              card: '#161619',
              accent: '#E65100',
              orange: '#FF6D00'
            }
          },
          fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            display: ['Oswald', 'sans-serif']
          }
        }
      }
    }
  </script>

  <style>
    body {
      background-color: #0b0b0d;
      color: #f3f4f6;
      font-family: 'Montserrat', sans-serif;
    }
    
    .gold-gradient-text {
      background: linear-gradient(135deg, #FFF3B0 0%, #D4AF37 50%, #AA771C 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .gold-border-glow {
      border: 1px solid rgba(212, 175, 55, 0.35);
      box-shadow: 0 0 25px rgba(212, 175, 55, 0.15);
    }
    
    .gold-button {
      background: linear-gradient(135deg, #E5B842 0%, #D4AF37 50%, #B8860B 100%);
      color: #0d0d0e;
      font-weight: 700;
      transition: all 0.3s ease;
    }
    .gold-button:hover {
      background: linear-gradient(135deg, #F3D274 0%, #E5B842 50%, #C99718 100%);
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
      transform: translateY(-2px);
    }

    /* Watermark protection overlay on preview */
    .watermark-overlay {
      background-image: radial-gradient(rgba(0,0,0,0.1) 1px, transparent 0);
      background-size: 24px 24px;
      position: relative;
    }
    
    .watermark-stamp {
      position: absolute;
      inset: 0;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background: repeating-linear-gradient(
        -45deg,
        rgba(212, 175, 55, 0.08),
        rgba(212, 175, 55, 0.08) 35px,
        rgba(0, 0, 0, 0) 35px,
        rgba(0, 0, 0, 0) 70px
      );
    }

    /* Carousel Custom Scroll */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    /* Modal fade */
    .fade-in {
      animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.97); }
      to { opacity: 1; transform: scale(1); }
    }
  </style>
</head>
<body class="min-h-screen flex flex-col bg-[#0c0c0e]">

  <!-- TOP BAR NOTIFICATION -->
  <header class="bg-gradient-to-r from-amber-950 via-zinc-900 to-amber-950 border-b border-amber-900/40 text-amber-200/90 text-xs py-2 px-4 shadow">
    <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
          <i class="fas fa-certificate text-[9px] mr-1 text-amber-400"></i> OFICIAL
        </span>
        <span>Fotografías y Video Profesional de las <strong>Topaderas, Toros y Bailes de San Pedro Lagunillas</strong></span>
      </div>
      <div class="flex items-center gap-4 text-xs font-semibold">
        <a href="https://wa.me/523118470860" target="_blank" class="hover:text-amber-400 transition flex items-center gap-1.5 text-green-400">
          <i class="fab fa-whatsapp text-sm"></i> WhatsApp: 311 847 0860
        </a>
        <a href="/descargar" class="hover:text-amber-300 transition flex items-center gap-1 text-amber-300">
          <i class="fas fa-key text-xs"></i> Canjear Token de Descarga
        </a>
      </div>
    </div>
  </header>

  <!-- NAVBAR -->
  <nav class="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-4 py-3">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- Brand Logo -->
      <a href="/" class="flex items-center gap-3 group">
        <img src="/static/images/logo-el-tigre.jpg" alt="Logo Fotos y Video El Tigre" class="w-12 h-12 rounded-full object-cover border-2 border-amber-500/60 shadow-lg shadow-amber-500/10 group-hover:border-amber-400 transition">
        <div>
          <span class="text-xs uppercase tracking-widest text-amber-400/90 font-bold block">FOTOS Y VIDEO</span>
          <span class="text-xl font-black font-display tracking-wider gold-gradient-text uppercase">EL TIGRE</span>
        </div>
      </a>

      <!-- Quick Nav Links -->
      <div class="hidden md:flex items-center space-x-6 text-sm font-medium text-zinc-300">
        <a href="#video-section" class="hover:text-amber-400 transition flex items-center gap-1.5">
          <i class="fas fa-play-circle text-amber-500"></i> Video (10s Preview)
        </a>
        <a href="#carrusel-section" class="hover:text-amber-400 transition flex items-center gap-1.5">
          <i class="fas fa-images text-amber-500"></i> Carrusel 10 Fotos
        </a>
        <a href="#catalogo-section" class="hover:text-amber-400 transition flex items-center gap-1.5">
          <i class="fas fa-th-large text-amber-500"></i> Galería de Eventos
        </a>
        <a href="#precios-section" class="hover:text-amber-400 transition flex items-center gap-1.5">
          <i class="fas fa-tags text-amber-500"></i> Precios
        </a>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3">
        <!-- Botón Ver Carrito -->
        <button id="cartBtn" onclick="openCartModal()" class="relative bg-zinc-800 hover:bg-zinc-700 text-amber-300 px-3.5 py-2 rounded-xl text-sm font-semibold border border-amber-500/30 flex items-center gap-2 transition">
          <i class="fas fa-shopping-bag text-base"></i>
          <span class="hidden sm:inline">Mi Pedido</span>
          <span id="cartCountBadge" class="bg-amber-500 text-zinc-950 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
        </button>

        <!-- Botón Canjear Enlace de 1 uso -->
        <a href="/descargar" class="hidden sm:flex gold-button px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase items-center gap-1.5 shadow">
          <i class="fas fa-download"></i> Descarga 1 Uso
        </a>
      </div>
    </div>
  </nav>

  <!-- HERO SECTION -->
  <section class="relative py-12 md:py-20 px-4 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-[#0c0c0e] border-b border-zinc-800/80">
    <!-- Glow background effect -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
      
      <!-- Text Hero -->
      <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide uppercase">
          <i class="fas fa-fire-alt text-amber-400"></i> Tradición y Fiesta Brava en San Pedro Lagunillas
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-none">
          TOPADERAS, TOROS Y BAILES <br>
          <span class="gold-gradient-text uppercase">FOTOS Y VIDEO EL TIGRE</span>
        </h1>

        <p class="text-zinc-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
          Revive cada instante con la máxima calidad. Cobertura cinematográfica de las tradicionales 
          <strong>Topaderas de harina, el jaripeo ranchero de toros</strong> y la alegría de los <strong>bailes de feria</strong>.
        </p>

        <!-- Pricing quick pill cards -->
        <div class="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
          <div class="bg-zinc-900/80 p-3.5 rounded-2xl border border-zinc-800 hover:border-amber-500/40 transition">
            <div class="flex items-center gap-2 text-amber-400 mb-1">
              <i class="fas fa-video text-lg"></i>
              <span class="font-bold text-sm">VIDEO COMPLETO</span>
            </div>
            <div class="text-xs text-zinc-400">
              <span class="text-white font-extrabold text-base">$600</span> Digital &bull; <span class="text-amber-300 font-bold">$700</span> en USB
            </div>
          </div>

          <div class="bg-zinc-900/80 p-3.5 rounded-2xl border border-zinc-800 hover:border-amber-500/40 transition">
            <div class="flex items-center gap-2 text-amber-400 mb-1">
              <i class="fas fa-camera text-lg"></i>
              <span class="font-bold text-sm">FOTOGRAFÍAS</span>
            </div>
            <div class="text-xs text-zinc-400">
              <span class="text-white font-extrabold text-base">$30</span> Digital &bull; <span class="text-amber-300 font-bold">$50</span> Impresa 4x6
            </div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
          <a href="#video-section" class="gold-button px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg">
            <i class="fas fa-play text-zinc-950"></i> Ver Vista Previa (10s)
          </a>
          <a href="https://wa.me/523118470860" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg transition">
            <i class="fab fa-whatsapp text-lg"></i> Pedir por WhatsApp (311 847 0860)
          </a>
        </div>
      </div>

      <!-- Hero Visual Card with Brand Mascot / Emblem -->
      <div class="lg:col-span-5 flex justify-center">
        <div class="relative w-full max-w-md bg-gradient-to-b from-zinc-800/60 to-zinc-900/80 p-5 rounded-3xl gold-border-glow text-center">
          <div class="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 mb-4">
            <img src="/static/images/logo-el-tigre.jpg" alt="Logo El Tigre" class="w-full h-full object-cover rounded-full shadow-2xl border-4 border-amber-500/80">
            <div class="absolute -bottom-2 -right-2 bg-amber-500 text-zinc-950 font-bold text-xs px-3 py-1 rounded-full shadow flex items-center gap-1">
              <i class="fas fa-shield-alt"></i> 100% Original
            </div>
          </div>
          
          <h2 class="text-lg font-bold text-white mb-1">Fotos y Video "El Tigre"</h2>
          <p class="text-xs text-amber-300/80 mb-3 uppercase tracking-wider font-semibold">Capturing Moments &bull; Prof. Video & Photos</p>
          <p class="text-xs text-zinc-400 mb-4 px-2">
            Seguridad garantizada: Tras confirmar tu pago, recibirás un <strong>link de descarga de UN SOLO USO</strong> exclusivo para tu pedido.
          </p>

          <div class="flex items-center justify-center gap-2 bg-zinc-950/70 py-2.5 px-4 rounded-xl border border-zinc-800 text-xs text-zinc-300">
            <i class="fas fa-lock text-amber-400"></i> Descarga protegida de 1 solo uso
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- SECCIÓN 1: VISTA PREVIA DE VIDEO (10 SEGUNDOS) -->
  <section id="video-section" class="py-14 px-4 max-w-7xl mx-auto w-full">
    <div class="text-center max-w-3xl mx-auto mb-10">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase mb-2">
        <i class="fas fa-video"></i> Muestra Oficial de Video
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-wide">
        Vista Previa de Video <span class="gold-gradient-text">(10 Segundos)</span>
      </h2>
      <p class="text-zinc-400 text-sm mt-2">
        Reproductor con temporizador exacto de 10 segundos con marca de agua oficial de "El Tigre". El material completo se entrega en Full HD / 4K.
      </p>
    </div>

    <!-- Video Player Container -->
    <div class="max-w-4xl mx-auto bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative">
      
      <!-- Video Frame with Interactive 10s Clip Simulation / Canvas -->
      <div class="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
        
        <!-- Video Element / Interactive Animation Canvas -->
        <canvas id="videoPreviewCanvas" class="w-full h-full object-cover"></canvas>
        
        <!-- Watermark Overlay Permanente en Vista Previa -->
        <div class="watermark-stamp z-10 flex flex-col items-center justify-center pointer-events-none opacity-60">
          <img src="/static/images/logo-el-tigre.jpg" alt="Watermark" class="w-24 h-24 rounded-full border-2 border-amber-400 mb-2 opacity-75">
          <span class="text-white text-lg font-black tracking-widest uppercase bg-black/60 px-4 py-1 rounded-md border border-amber-400/40">
            FOTOGRAFÍAS Y VIDEO EL TIGRE - VISTA PREVIA (10s)
          </span>
          <span class="text-amber-300 text-xs font-bold mt-1">SAN PEDRO LAGUNILLAS &bull; WHATSAPP 311 847 0860</span>
        </div>

        <!-- 10s Countdown Badge -->
        <div class="absolute top-4 right-4 z-20 bg-zinc-950/80 border border-amber-500/40 backdrop-blur px-3 py-1.5 rounded-xl text-xs font-bold text-amber-300 flex items-center gap-2 shadow">
          <i class="fas fa-stopwatch text-amber-400 animate-pulse"></i>
          <span>Límite Muestra: <span id="videoTimerText">00:10</span></span>
        </div>

        <!-- Event Tag Badge -->
        <div class="absolute top-4 left-4 z-20 bg-black/70 border border-zinc-700 backdrop-blur px-3 py-1.5 rounded-xl text-xs font-semibold text-white flex items-center gap-1.5">
          <span id="currentVideoBadge" class="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
          <span id="currentVideoTitle">Topaderas Tradicionales de San Pedro Lagunillas</span>
        </div>

        <!-- Play Overlay Button -->
        <button id="playBtnOverlay" onclick="togglePlayPreview()" class="absolute z-20 bg-amber-500 hover:bg-amber-400 text-zinc-950 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition transform group-hover:scale-110">
          <i id="playIcon" class="fas fa-play text-2xl ml-1"></i>
        </button>

      </div>

      <!-- Controls & Video Selectors -->
      <div class="p-4 sm:p-6 bg-zinc-950 border-t border-zinc-800">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <!-- Event Selector Pills -->
          <div class="flex flex-wrap gap-2 w-full sm:w-auto">
            <button onclick="switchVideoPreview('topaderas')" id="btnVidTopaderas" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 text-zinc-950 transition">
              <i class="fas fa-fire mr-1"></i> Topaderas de Harina
            </button>
            <button onclick="switchVideoPreview('toros')" id="btnVidToros" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition">
              <i class="fas fa-hat-cowboy mr-1"></i> Jaripeo y Toros
            </button>
            <button onclick="switchVideoPreview('bailes')" id="btnVidBailes" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition">
              <i class="fas fa-music mr-1"></i> Noche de Baile
            </button>
          </div>

          <!-- Quick Buy Video Action -->
          <div class="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div class="text-right">
              <div class="text-xs text-zinc-400">Video Completo:</div>
              <div class="text-sm font-extrabold text-amber-400">$600 Digital &bull; $700 USB</div>
            </div>
            <button onclick="quickAddCurrentVideo()" class="gold-button px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 whitespace-nowrap">
              <i class="fas fa-cart-plus"></i> Comprar Video
            </button>
          </div>

        </div>

        <!-- 10s Progress Bar -->
        <div class="w-full bg-zinc-800 rounded-full h-1.5 mt-4 overflow-hidden">
          <div id="videoProgressBar" class="bg-amber-400 h-1.5 rounded-full w-0 transition-all duration-100"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECCIÓN 2: CARRUSEL DE LAS 10 FOTOGRAFÍAS MÁS DESTACADAS -->
  <section id="carrusel-section" class="py-14 px-4 bg-zinc-950/70 border-y border-zinc-800/80">
    <div class="max-w-7xl mx-auto">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase mb-2">
            <i class="fas fa-star text-amber-400"></i> Selección Especial
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-wide">
            Carrusel: <span class="gold-gradient-text">10 Fotos Destacadas</span>
          </h2>
          <p class="text-zinc-400 text-sm mt-1">
            Desliza para explorar los mejores momentos de las fiestas de San Pedro Lagunillas. Haz clic en cualquier foto para ampliarla y ordenar.
          </p>
        </div>

        <!-- Controles Carrusel -->
        <div class="flex items-center gap-2">
          <button onclick="scrollCarousel('left')" class="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-zinc-700 flex items-center justify-center transition">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button onclick="scrollCarousel('right')" class="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-amber-400 border border-zinc-700 flex items-center justify-center transition">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <!-- Carrusel Horizontal Container -->
      <div id="carruselContainer" class="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4">
        <!-- Rellenado dinámicamente con las 10 fotos -->
      </div>

      <!-- Carousel indicator pills -->
      <div class="flex justify-center items-center gap-1.5 mt-4" id="carouselDots">
        <!-- Puntos generados dinámicamente -->
      </div>

    </div>
  </section>

  <!-- SECCIÓN 3: CATÁLOGO COMPLETO Y FILTRADO POR EVENTO -->
  <section id="catalogo-section" class="py-16 px-4 max-w-7xl mx-auto w-full">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
      <div>
        <h2 class="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-wide">
          Galería Oficial de <span class="gold-gradient-text">Eventos</span>
        </h2>
        <p class="text-zinc-400 text-sm mt-1">
          Filtra por evento: Topaderas tradicionales, jaripeos de toros o bailes populares.
        </p>
      </div>

      <!-- Filtros de Evento -->
      <div class="flex flex-wrap gap-2">
        <button onclick="filterCatalog('all')" id="filter-all" class="filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-zinc-950 transition">
          Todos los Eventos
        </button>
        <button onclick="filterCatalog('topaderas')" id="filter-topaderas" class="filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800 transition">
          <i class="fas fa-fire mr-1 text-amber-400"></i> Topaderas de Harina
        </button>
        <button onclick="filterCatalog('toros')" id="filter-toros" class="filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800 transition">
          <i class="fas fa-hat-cowboy mr-1 text-amber-400"></i> Jaripeo y Toros
        </button>
        <button onclick="filterCatalog('bailes')" id="filter-bailes" class="filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800 transition">
          <i class="fas fa-guitar mr-1 text-amber-400"></i> Noche de Bailes
        </button>
      </div>
    </div>

    <!-- Grid de Fotos y Videos -->
    <div id="catalogGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Rellenado dinámicamente con tarjetas enriquecidas -->
    </div>

  </section>

  <!-- SECCIÓN 4: LISTA DE PRECIOS Y PROCESO DE DESCARGA DE 1 SOLO USO -->
  <section id="precios-section" class="py-16 px-4 bg-gradient-to-b from-zinc-900/60 to-zinc-950 border-t border-zinc-800/80">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center max-w-3xl mx-auto mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase mb-2">
          <i class="fas fa-badge-check"></i> Tarifas Oficiales 2024
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-wide">
          Precios Claros y <span class="gold-gradient-text">Entrega Garantizada</span>
        </h2>
        <p class="text-zinc-400 text-sm mt-2">
          Elige entre versión digital de alta definición o entrega física (Memoria USB / Impresiones 4x6 fotográficas).
        </p>
      </div>

      <!-- Tarjetas de Precios -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <!-- Tarjeta Videos -->
        <div class="bg-zinc-900/90 rounded-3xl p-6 sm:p-8 border border-amber-500/30 relative overflow-hidden gold-border-glow">
          <div class="absolute top-0 right-0 bg-amber-500 text-zinc-950 text-xs font-black uppercase px-4 py-1.5 rounded-bl-2xl">
            Producción Completa
          </div>

          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xl">
              <i class="fas fa-film"></i>
            </div>
            <div>
              <h3 class="text-xl font-extrabold text-white">Video de Evento</h3>
              <p class="text-xs text-zinc-400">Topaderas, Toros o Bailes en Full HD</p>
            </div>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex justify-between items-center p-3.5 bg-zinc-950/80 rounded-2xl border border-zinc-800">
              <div>
                <div class="font-bold text-white text-sm">Formato Digital</div>
                <div class="text-xs text-zinc-400">Descarga directa en máxima resolución</div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-black text-amber-400">$600 <span class="text-xs font-normal text-zinc-400">MXN</span></div>
              </div>
            </div>

            <div class="flex justify-between items-center p-3.5 bg-zinc-950/80 rounded-2xl border border-zinc-800">
              <div>
                <div class="font-bold text-white text-sm">En Memoria USB</div>
                <div class="text-xs text-zinc-400">USB física lista para Smart TV o PC</div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-black text-amber-400">$700 <span class="text-xs font-normal text-zinc-400">MXN</span></div>
              </div>
            </div>
          </div>

          <ul class="text-xs text-zinc-300 space-y-2.5 mb-6">
            <li class="flex items-center gap-2"><i class="fas fa-check text-amber-400"></i> Edición profesional y sonido ambiente</li>
            <li class="flex items-center gap-2"><i class="fas fa-check text-amber-400"></i> Sin marcas de agua en la versión comprada</li>
            <li class="flex items-center gap-2"><i class="fas fa-check text-amber-400"></i> Enlace de descarga seguro de 1 solo uso</li>
          </ul>

          <a href="https://wa.me/523118470860?text=Hola%20Fotos%20y%20Video%20El%20Tigre,%20deseo%20ordenar%20un%20video%20de%20los%20eventos" target="_blank" class="block text-center gold-button py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
            Solicitar Video por WhatsApp
          </a>
        </div>

        <!-- Tarjeta Fotografías -->
        <div class="bg-zinc-900/90 rounded-3xl p-6 sm:p-8 border border-zinc-800 hover:border-amber-500/30 transition">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xl">
              <i class="fas fa-camera-retro"></i>
            </div>
            <div>
              <h3 class="text-xl font-extrabold text-white">Fotografía Individual</h3>
              <p class="text-xs text-zinc-400">Retratos, acción en ruedo y topaderas</p>
            </div>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex justify-between items-center p-3.5 bg-zinc-950/80 rounded-2xl border border-zinc-800">
              <div>
                <div class="font-bold text-white text-sm">Fotografía Digital</div>
                <div class="text-xs text-zinc-400">Archivo original sin marcas de agua</div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-black text-amber-400">$30 <span class="text-xs font-normal text-zinc-400">MXN</span></div>
              </div>
            </div>

            <div class="flex justify-between items-center p-3.5 bg-zinc-950/80 rounded-2xl border border-zinc-800">
              <div>
                <div class="font-bold text-white text-sm">Fotografía Impresa 4x6</div>
                <div class="text-xs text-zinc-400">Papel fotográfico profesional de laboratorio</div>
              </div>
              <div class="text-right">
                <div class="text-2xl font-black text-amber-400">$50 <span class="text-xs font-normal text-zinc-400">MXN</span></div>
              </div>
            </div>
          </div>

          <ul class="text-xs text-zinc-300 space-y-2.5 mb-6">
            <li class="flex items-center gap-2"><i class="fas fa-check text-amber-400"></i> Calidad de estudio y corrección de color</li>
            <li class="flex items-center gap-2"><i class="fas fa-check text-amber-400"></i> Descuento especial en paquetes de más de 10 fotos</li>
            <li class="flex items-center gap-2"><i class="fas fa-check text-amber-400"></i> Impresiones listas para entrega o marco</li>
          </ul>

          <a href="https://wa.me/523118470860?text=Hola%20Fotos%20y%20Video%20El%20Tigre,%20deseo%20ordenar%20fotografias" target="_blank" class="block text-center bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-amber-500/30 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition">
            Solicitar Fotos por WhatsApp
          </a>
        </div>

      </div>

      <!-- Explicación del Link de Descarga de 1 Solo Uso -->
      <div class="mt-12 max-w-4xl mx-auto bg-amber-500/10 border border-amber-500/30 rounded-3xl p-6 sm:p-8">
        <div class="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div class="w-16 h-16 rounded-2xl bg-amber-500 text-zinc-950 flex items-center justify-center text-3xl font-black shrink-0">
            <i class="fas fa-shield-halved"></i>
          </div>
          <div>
            <h4 class="text-lg font-bold text-white mb-1">¿Cómo funciona el Link de Descarga de 1 Solo Uso?</h4>
            <p class="text-xs sm:text-sm text-zinc-300">
              1. Seleccionas tus fotos o videos y envías tu pedido a WhatsApp.<br>
              2. Tras confirmar el pago (transferencia o efectivo), recibirás un <strong>Token único y secreto</strong>.<br>
              3. Al abrir tu enlace y hacer clic en <strong>"Descargar Material"</strong>, se descargarán tus archivos en máxima resolución original y el enlace quedará automáticamente <strong>quemado/inhabilitado</strong> para proteger los derechos de autor.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- MODAL: DETALLE / AMPLIAR FOTO -->
  <div id="imageDetailModal" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md hidden items-center justify-center p-4">
    <div class="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative fade-in">
      <button onclick="closeDetailModal()" class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-zinc-950/80 text-zinc-400 hover:text-white flex items-center justify-center text-lg border border-zinc-800">
        <i class="fas fa-times"></i>
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2">
        <!-- Preview con marca de agua -->
        <div class="relative bg-black flex items-center justify-center min-h-[300px]">
          <img id="modalPreviewImg" src="" alt="Vista previa" class="w-full h-full object-contain max-h-[420px]">
          <div class="watermark-stamp">
            <span class="text-white/60 text-xs font-bold uppercase tracking-widest text-center px-4 bg-black/40 py-1 rounded">
              FOTOS Y VIDEO EL TIGRE &bull; MUESTRA
            </span>
          </div>
        </div>

        <!-- Info y opciones de compra -->
        <div class="p-6 flex flex-col justify-between">
          <div>
            <div id="modalEventBadge" class="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
              Topaderas
            </div>
            <h3 id="modalTitle" class="text-lg font-bold text-white mb-2 leading-tight">Título de la Foto</h3>
            <p id="modalDesc" class="text-xs text-zinc-400 mb-4">Descripción del evento y lugar.</p>
            
            <div class="bg-zinc-950 p-3.5 rounded-2xl border border-zinc-800 mb-4 space-y-2">
              <div class="text-xs font-semibold text-zinc-300">Selecciona el formato deseado:</div>
              <label class="flex items-center justify-between p-2 rounded-xl bg-zinc-900/60 border border-zinc-800 cursor-pointer hover:border-amber-500/40">
                <div class="flex items-center gap-2">
                  <input type="radio" name="modalFormat" value="digital" checked class="text-amber-500 focus:ring-0">
                  <span class="text-xs font-medium text-white">Digital HD (Descarga 1 uso)</span>
                </div>
                <span id="modalPriceDigital" class="text-xs font-bold text-amber-400">$30 MXN</span>
              </label>

              <label class="flex items-center justify-between p-2 rounded-xl bg-zinc-900/60 border border-zinc-800 cursor-pointer hover:border-amber-500/40">
                <div class="flex items-center gap-2">
                  <input type="radio" name="modalFormat" value="printed" class="text-amber-500 focus:ring-0">
                  <span id="modalFormatPhysicalLabel" class="text-xs font-medium text-white">Impresa 4x6 (Papel Foto)</span>
                </div>
                <span id="modalPricePhysical" class="text-xs font-bold text-amber-400">$50 MXN</span>
              </label>
            </div>
          </div>

          <div class="space-y-2 pt-2">
            <button onclick="addModalItemToCart()" class="w-full gold-button py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
              <i class="fas fa-cart-plus"></i> Agregar al Pedido
            </button>
            <button onclick="orderDirectWhatsappModal()" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition">
              <i class="fab fa-whatsapp"></i> Pedir directo por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: CARRITO Y CHECKOUT / GENERACIÓN DE PEDIDO -->
  <div id="cartModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md hidden items-center justify-center p-4">
    <div class="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative fade-in max-h-[90vh] flex flex-col">
      
      <!-- Header Carrito -->
      <div class="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
            <i class="fas fa-shopping-bag"></i>
          </div>
          <h3 class="text-base font-bold text-white">Mi Pedido de Fotos y Video</h3>
        </div>
        <button onclick="closeCartModal()" class="text-zinc-400 hover:text-white text-lg">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- Items List -->
      <div id="cartItemsList" class="p-5 overflow-y-auto space-y-3 flex-1">
        <!-- Render dinámico de items en carrito -->
      </div>

      <!-- Formulario de Contacto y Checkout -->
      <div class="p-5 border-t border-zinc-800 bg-zinc-950 space-y-4">
        <div class="flex justify-between items-center text-sm">
          <span class="text-zinc-400">Total a Pagar:</span>
          <span id="cartTotalText" class="text-xl font-black text-amber-400">$0 MXN</span>
        </div>

        <div class="space-y-2">
          <input type="text" id="custName" placeholder="Tu Nombre Completo *" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500">
          <input type="tel" id="custPhone" placeholder="Tu Teléfono / WhatsApp (ej. 3118470860)" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500">
          <textarea id="custNote" rows="2" placeholder="Notas adicionales (ej. lugar de entrega para impresiones/USB)" class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-500 resize-none"></textarea>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          <button onclick="submitOrder('whatsapp')" class="bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow transition">
            <i class="fab fa-whatsapp text-sm"></i> Confirmar por WhatsApp
          </button>
          <button onclick="submitOrder('token')" class="gold-button py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow">
            <i class="fas fa-key"></i> Generar Token de 1 Uso
          </button>
        </div>

        <p class="text-[11px] text-zinc-500 text-center">
          Al confirmar tu pago, el link de descarga se activará y solo podrá ser utilizado <strong>una sola vez</strong>.
        </p>
      </div>

    </div>
  </div>

  <!-- MODAL: CONFIRMACIÓN Y TOKEN GENERADO -->
  <div id="orderSuccessModal" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md hidden items-center justify-center p-4">
    <div class="bg-zinc-900 border border-amber-500/40 rounded-3xl max-w-lg w-full p-6 text-center shadow-2xl relative fade-in gold-border-glow">
      <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center text-2xl mb-4">
        <i class="fas fa-check"></i>
      </div>

      <h3 class="text-xl font-extrabold text-white mb-1">¡Pedido Registrado con Éxito!</h3>
      <p class="text-xs text-zinc-400 mb-4">Tu token exclusivo de descarga de un solo uso ha sido generado.</p>

      <div class="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 mb-4 text-left space-y-2">
        <div class="flex justify-between text-xs">
          <span class="text-zinc-400">Folio de Pedido:</span>
          <span id="succOrderId" class="font-bold text-white">ORD-0000</span>
        </div>
        <div class="flex justify-between text-xs">
          <span class="text-zinc-400">Total:</span>
          <span id="succTotal" class="font-extrabold text-amber-400">$0 MXN</span>
        </div>
        <div class="pt-2 border-t border-zinc-800">
          <span class="text-[11px] text-zinc-400 block mb-1">Tu Token Seguro (1 Solo Uso):</span>
          <div class="flex items-center gap-2">
            <input type="text" id="succTokenInput" readonly class="bg-zinc-900 border border-amber-500/50 rounded-lg px-2.5 py-1.5 text-xs text-amber-300 font-mono font-bold w-full">
            <button onclick="copyToken()" class="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
              <i class="fas fa-copy"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="space-y-2">
        <a id="succWaBtn" href="#" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition shadow">
          <i class="fab fa-whatsapp text-base"></i> Enviar Comprobante al WhatsApp 311 847 0860
        </a>
        <a id="succDownloadLinkBtn" href="#" class="w-full gold-button py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
          <i class="fas fa-download"></i> Ir a Descargar (Se quemará tras descargar)
        </a>
        <button onclick="closeSuccessModal()" class="text-zinc-500 hover:text-zinc-300 text-xs font-semibold py-1">
          Cerrar ventana
        </button>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="mt-auto bg-zinc-950 border-t border-zinc-800/80 py-10 px-4 text-zinc-400 text-xs">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <div class="space-y-3 md:col-span-2">
        <div class="flex items-center gap-3">
          <img src="/static/images/logo-el-tigre.jpg" alt="Logo El Tigre" class="w-10 h-10 rounded-full border border-amber-500/50">
          <div>
            <span class="font-bold text-white uppercase tracking-wider block">Fotos y Video El Tigre</span>
            <span class="text-[11px] text-amber-400">San Pedro Lagunillas, Nayarit</span>
          </div>
        </div>
        <p class="text-zinc-400 max-w-sm leading-relaxed">
          Especialistas en eventos rancheros, fiestas tradicionales, topaderas, jaripeos de toros y bailes populares. Capturamos tus mejores recuerdos con calidad profesional.
        </p>
      </div>

      <div>
        <h4 class="font-bold text-white uppercase text-xs mb-3 text-amber-400">Precios Oficiales</h4>
        <ul class="space-y-1.5 text-zinc-300">
          <li>&bull; Video Digital: <strong>$600 MXN</strong></li>
          <li>&bull; Video en Memoria USB: <strong>$700 MXN</strong></li>
          <li>&bull; Fotografía Digital HD: <strong>$30 MXN</strong></li>
          <li>&bull; Fotografía Impresa 4x6: <strong>$50 MXN</strong></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-white uppercase text-xs mb-3 text-amber-400">Contacto Directo</h4>
        <p class="mb-2">Informes, pedidos y soporte de descargas:</p>
        <a href="https://wa.me/523118470860" target="_blank" class="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300">
          <i class="fab fa-whatsapp text-base"></i> +52 311 847 0860
        </a>
        <div class="mt-3">
          <a href="/descargar" class="text-amber-400 hover:underline flex items-center gap-1">
            <i class="fas fa-key text-[10px]"></i> Portal de canje de tokens
          </a>
        </div>
      </div>

    </div>

    <div class="max-w-7xl mx-auto border-t border-zinc-900 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-zinc-500 text-[11px] gap-2">
      <div>&copy; 2024 Fotos y Video El Tigre. Todos los derechos reservados. San Pedro Lagunillas, Nayarit.</div>
      <div class="flex items-center gap-3">
        <span>Sistema de descarga de 1 solo uso activado</span>
      </div>
    </div>
  </footer>

  <!-- JAVASCRIPT FRONTEND APP -->
  <script>
    let catalog = [];
    let cart = [];
    let selectedModalMedia = null;
    let currentFilter = 'all';

    // Canvas Video Simulation
    let canvas, ctx;
    let isPlaying = false;
    let videoProgress = 0;
    let currentVideoType = 'topaderas';
    let animFrame = null;
    let videoImages = {};

    // Iniciar aplicación
    document.addEventListener('DOMContentLoaded', async () => {
      initCanvas();
      await loadCatalog();
      loadStoredCart();
      updateCartBadge();
    });

    async function loadCatalog() {
      try {
        const res = await fetch('/api/catalog');
        const data = await res.json();
        if (data.success) {
          catalog = data.catalog;
          renderCarousel();
          renderCatalog(catalog);
          preloadCanvasImages();
        }
      } catch (err) {
        console.error('Error cargando catalogo:', err);
      }
    }

    // Renderizar Carrusel con las 10 Fotos
    function renderCarousel() {
      const container = document.getElementById('carruselContainer');
      const dotsContainer = document.getElementById('carouselDots');
      container.innerHTML = '';
      dotsContainer.innerHTML = '';

      const photos = catalog.filter(it => it.type === 'photo');

      photos.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'min-w-[260px] sm:min-w-[300px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition cursor-pointer shrink-0 group relative shadow-lg';
        card.onclick = () => openDetailModal(item.id);

        card.innerHTML = \`
          <div class="relative aspect-[3/4] bg-black overflow-hidden">
            <img src="\${item.previewUrl}" alt="\${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <div class="watermark-stamp">
              <span class="text-white/60 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-black/40 rounded border border-white/20">
                EL TIGRE • MUESTRA
              </span>
            </div>
            <div class="absolute top-2.5 left-2.5 bg-zinc-950/80 px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-300 border border-zinc-800">
              #\${index + 1} de 10
            </div>
            <div class="absolute bottom-2.5 right-2.5 bg-amber-500 text-zinc-950 px-2.5 py-1 rounded-lg text-xs font-black shadow">
              $30 / $50
            </div>
          </div>
          <div class="p-3.5">
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 block mb-1">\${item.eventLabel}</span>
            <h4 class="text-xs font-bold text-white truncate mb-1">\${item.title}</h4>
            <div class="flex items-center justify-between text-[11px] text-zinc-400 mt-2 pt-2 border-t border-zinc-800/80">
              <span>Digital: $30</span>
              <span class="text-amber-400 font-semibold">Impresa 4x6: $50</span>
            </div>
          </div>
        \`;
        container.appendChild(card);

        // Dot
        const dot = document.createElement('span');
        dot.className = \`w-2 h-2 rounded-full \${index === 0 ? 'bg-amber-400' : 'bg-zinc-700'}\`;
        dotsContainer.appendChild(dot);
      });
    }

    function scrollCarousel(dir) {
      const container = document.getElementById('carruselContainer');
      const amount = dir === 'left' ? -320 : 320;
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }

    // Renderizar Galería Principal
    function renderCatalog(items) {
      const grid = document.getElementById('catalogGrid');
      grid.innerHTML = '';

      if (items.length === 0) {
        grid.innerHTML = '<div class="col-span-3 text-center py-12 text-zinc-500">No hay material en esta categoría.</div>';
        return;
      }

      items.forEach(item => {
        const isVideo = item.type === 'video';
        const card = document.createElement('div');
        card.className = 'bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-amber-500/40 transition group flex flex-col justify-between shadow-xl';

        card.innerHTML = \`
          <div>
            <div class="relative \${isVideo ? 'aspect-video' : 'aspect-[4/3]'} bg-black overflow-hidden cursor-pointer" onclick="openDetailModal('\${item.id}')">
              <img src="\${item.previewUrl}" alt="\${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              
              <div class="watermark-stamp">
                <span class="text-white/60 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-black/50 rounded border border-white/20">
                  FOTOS Y VIDEO EL TIGRE • MUESTRA
                </span>
              </div>

              \${isVideo ? \`
                <div class="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition">
                  <div class="w-12 h-12 rounded-full bg-amber-500/90 text-zinc-950 flex items-center justify-center font-bold text-lg shadow-lg">
                    <i class="fas fa-play ml-0.5"></i>
                  </div>
                </div>
                <div class="absolute top-3 right-3 bg-red-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1 shadow">
                  <i class="fas fa-video"></i> Video HD
                </div>
              \` : \`
                <div class="absolute top-3 right-3 bg-zinc-950/80 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase border border-zinc-800">
                  Foto 4x6 / HD
                </div>
              \`}

              <div class="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 rounded-lg text-[10px] font-bold text-zinc-300 backdrop-blur">
                \${item.location}
              </div>
            </div>

            <div class="p-5">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  \${item.eventLabel}
                </span>
                <span class="text-[11px] text-zinc-400">\${item.date}</span>
              </div>

              <h3 class="text-sm font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition">\${item.title}</h3>
              <p class="text-xs text-zinc-400 line-clamp-2 mb-4">\${item.description}</p>
            </div>
          </div>

          <div class="p-5 pt-0">
            <div class="bg-zinc-950 p-3 rounded-2xl border border-zinc-800/80 mb-4 flex items-center justify-between text-xs">
              <div>
                <span class="text-zinc-400 block text-[10px]">Digital:</span>
                <span class="font-extrabold text-white text-sm">$\${item.priceDigital} MXN</span>
              </div>
              <div class="text-right">
                <span class="text-zinc-400 block text-[10px]">\${isVideo ? 'Memoria USB:' : 'Impresa 4x6:'}</span>
                <span class="font-extrabold text-amber-400 text-sm">$\${item.pricePhysical} MXN</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button onclick="openDetailModal('\${item.id}')" class="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-2 rounded-xl text-xs font-semibold transition">
                Ver Detalles
              </button>
              <button onclick="addToCartDirect('\${item.id}', 'digital')" class="gold-button py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1">
                <i class="fas fa-cart-plus"></i> Ordenar
              </button>
            </div>
          </div>
        \`;
        grid.appendChild(card);
      });
    }

    function filterCatalog(category) {
      currentFilter = category;
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.className = 'filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800 transition';
      });
      const activeBtn = document.getElementById('filter-' + category);
      if (activeBtn) {
        activeBtn.className = 'filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-zinc-950 transition';
      }

      if (category === 'all') {
        renderCatalog(catalog);
      } else {
        const filtered = catalog.filter(item => item.event === category);
        renderCatalog(filtered);
      }
    }

    // Modal de Detalle
    function openDetailModal(id) {
      const item = catalog.find(m => m.id === id);
      if (!item) return;
      selectedModalMedia = item;

      document.getElementById('modalPreviewImg').src = item.previewUrl;
      document.getElementById('modalTitle').innerText = item.title;
      document.getElementById('modalDesc').innerText = item.description + ' (Ubicación: ' + item.location + ')';
      document.getElementById('modalEventBadge').innerText = item.eventLabel;
      
      const isVideo = item.type === 'video';
      document.getElementById('modalPriceDigital').innerText = '$' + item.priceDigital + ' MXN';
      document.getElementById('modalPricePhysical').innerText = '$' + item.pricePhysical + ' MXN';
      document.getElementById('modalFormatPhysicalLabel').innerText = isVideo ? 'En Memoria USB de Regalo ($700)' : 'Impresa en Papel Foto 4x6 ($50)';

      document.getElementById('imageDetailModal').classList.remove('hidden');
      document.getElementById('imageDetailModal').classList.add('flex');
    }

    function closeDetailModal() {
      document.getElementById('imageDetailModal').classList.add('hidden');
      document.getElementById('imageDetailModal').classList.remove('flex');
    }

    function addModalItemToCart() {
      if (!selectedModalMedia) return;
      const format = document.querySelector('input[name="modalFormat"]:checked')?.value || 'digital';
      addToCart(selectedModalMedia.id, format);
      closeDetailModal();
      openCartModal();
    }

    function orderDirectWhatsappModal() {
      if (!selectedModalMedia) return;
      const format = document.querySelector('input[name="modalFormat"]:checked')?.value || 'digital';
      const isVideo = selectedModalMedia.type === 'video';
      const isUsbOrPrint = format === 'printed' || format === 'usb';
      const price = isVideo ? (isUsbOrPrint ? 700 : 600) : (isUsbOrPrint ? 50 : 30);
      const formatText = isVideo ? (isUsbOrPrint ? 'Memoria USB ($700)' : 'Digital HD ($600)') : (isUsbOrPrint ? 'Impresión 4x6 ($50)' : 'Digital HD ($30)');

      let msg = \`Hola Fotos y Video El Tigre, deseo ordenar:\n\n📸 *Material:* \${selectedModalMedia.title}\n📦 *Formato:* \${formatText}\n💰 *Precio:* $\${price} MXN\n\nPor favor indíquenme los datos para realizar mi pago y recibir mi link de descarga de 1 solo uso.\`;
      window.open(\`https://wa.me/523118470860?text=\${encodeURIComponent(msg)}\`, '_blank');
    }

    // Carrito y Estado
    function addToCartDirect(id, format) {
      addToCart(id, format);
      openCartModal();
    }

    function addToCart(id, format) {
      const media = catalog.find(m => m.id === id);
      if (!media) return;
      cart.push({
        id: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        mediaId: id,
        format: format,
        media: media
      });
      saveCart();
      updateCartBadge();
    }

    function removeFromCart(cartItemId) {
      cart = cart.filter(it => it.id !== cartItemId);
      saveCart();
      updateCartBadge();
      renderCartItems();
    }

    function saveCart() {
      try {
        localStorage.setItem('eltigre_cart', JSON.stringify(cart));
      } catch(e) {}
    }

    function loadStoredCart() {
      try {
        const stored = localStorage.getItem('eltigre_cart');
        if (stored) cart = JSON.parse(stored);
      } catch(e) {}
    }

    function updateCartBadge() {
      const count = cart.length;
      document.getElementById('cartCountBadge').innerText = count;
    }

    function openCartModal() {
      renderCartItems();
      document.getElementById('cartModal').classList.remove('hidden');
      document.getElementById('cartModal').classList.add('flex');
    }

    function closeCartModal() {
      document.getElementById('cartModal').classList.add('hidden');
      document.getElementById('cartModal').classList.remove('flex');
    }

    function renderCartItems() {
      const list = document.getElementById('cartItemsList');
      list.innerHTML = '';

      if (cart.length === 0) {
        list.innerHTML = \`
          <div class="text-center py-10">
            <i class="fas fa-shopping-bag text-zinc-700 text-4xl mb-3"></i>
            <p class="text-zinc-400 text-sm font-semibold">Tu pedido está vacío.</p>
            <p class="text-zinc-500 text-xs mt-1">Explora la galería y agrega fotografías o videos.</p>
          </div>
        \`;
        document.getElementById('cartTotalText').innerText = '$0 MXN';
        return;
      }

      let total = 0;

      cart.forEach(item => {
        const isVideo = item.media.type === 'video';
        const isUsbOrPrint = item.format === 'printed' || item.format === 'usb';
        const price = isVideo ? (isUsbOrPrint ? 700 : 600) : (isUsbOrPrint ? 50 : 30);
        total += price;

        const row = document.createElement('div');
        row.className = 'flex items-center justify-between p-3 bg-zinc-950/80 rounded-2xl border border-zinc-800 gap-3';
        row.innerHTML = \`
          <div class="flex items-center gap-3 overflow-hidden">
            <img src="\${item.media.previewUrl}" alt="Thumb" class="w-12 h-12 rounded-xl object-cover border border-zinc-800 shrink-0">
            <div class="overflow-hidden">
              <h4 class="text-xs font-bold text-white truncate">\${item.media.title}</h4>
              <span class="text-[11px] text-amber-400 font-semibold block">
                \${isVideo ? (isUsbOrPrint ? 'Memoria USB ($700)' : 'Digital HD ($600)') : (isUsbOrPrint ? 'Impresa 4x6 ($50)' : 'Digital HD ($30)')}
              </span>
            </div>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <span class="text-sm font-black text-white">$\${price}</span>
            <button onclick="removeFromCart('\${item.id}')" class="text-zinc-500 hover:text-red-400 p-1.5 transition">
              <i class="fas fa-trash-alt text-xs"></i>
            </button>
          </div>
        \`;
        list.appendChild(row);
      });

      document.getElementById('cartTotalText').innerText = '$' + total + ' MXN';
    }

    async function submitOrder(channel) {
      if (cart.length === 0) {
        alert('Por favor agrega al menos una foto o video a tu pedido.');
        return;
      }

      const name = document.getElementById('custName').value.trim() || 'Cliente San Pedro';
      const phone = document.getElementById('custPhone').value.trim() || '3118470860';
      const note = document.getElementById('custNote').value.trim();

      try {
        const payload = {
          customerName: name,
          customerPhone: phone,
          customerNote: note,
          items: cart.map(c => ({
            mediaId: c.mediaId,
            format: c.format
          }))
        };

        const res = await fetch('/api/orders/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (data.success) {
          // Vaciar carrito
          cart = [];
          saveCart();
          updateCartBadge();
          closeCartModal();

          // Mostrar confirmación
          document.getElementById('succOrderId').innerText = data.orderId;
          document.getElementById('succTotal').innerText = '$' + data.totalAmount + ' MXN';
          document.getElementById('succTokenInput').value = data.token;
          document.getElementById('succWaBtn').href = data.whatsappUrl;
          document.getElementById('succDownloadLinkBtn').href = '/descargar?token=' + data.token;

          document.getElementById('orderSuccessModal').classList.remove('hidden');
          document.getElementById('orderSuccessModal').classList.add('flex');

          if (channel === 'whatsapp') {
            window.open(data.whatsappUrl, '_blank');
          }
        } else {
          alert('Error al generar pedido: ' + data.error);
        }
      } catch (err) {
        alert('Error conectando con el servidor.');
      }
    }

    function closeSuccessModal() {
      document.getElementById('orderSuccessModal').classList.add('hidden');
      document.getElementById('orderSuccessModal').classList.remove('flex');
    }

    function copyToken() {
      const inp = document.getElementById('succTokenInput');
      inp.select();
      navigator.clipboard.writeText(inp.value);
      alert('¡Token copiado al portapapeles! Guárdalo para cuando confirmes tu pago.');
    }

    // ANIMACIÓN Y SIMULACIÓN DE VIDEO DE 10 SEGUNDOS CON CANVAS
    function initCanvas() {
      canvas = document.getElementById('videoPreviewCanvas');
      ctx = canvas.getContext('2d');
      canvas.width = 1280;
      canvas.height = 720;
      drawCanvasFrame(0);
    }

    function preloadCanvasImages() {
      const imgUrls = {
        topaderas: ['/static/images/foto-7-topadera-multitud.jpg', '/static/images/foto-5-topadera-harina.jpg', '/static/images/foto-9-topadera-plaza.jpg', '/static/images/foto-8-fiesta-harina-rostro.jpg'],
        toros: ['/static/images/foto-2-caballo-jaripeo.jpg', '/static/images/foto-3-amigos-charros.jpg', '/static/images/foto-4-gradas-jaripeo.jpg'],
        bailes: ['/static/images/foto-6-baile-pareja.jpg', '/static/images/foto-1-vaquero-charro.jpg', '/static/images/foto-3-amigos-charros.jpg']
      };

      videoImages.logo = new Image();
      videoImages.logo.src = '/static/images/logo-el-tigre.jpg';

      videoImages.topaderas = imgUrls.topaderas.map(src => {
        const img = new Image();
        img.src = src;
        return img;
      });
      videoImages.toros = imgUrls.toros.map(src => {
        const img = new Image();
        img.src = src;
        return img;
      });
      videoImages.bailes = imgUrls.bailes.map(src => {
        const img = new Image();
        img.src = src;
        return img;
      });
    }

    function switchVideoPreview(type) {
      currentVideoType = type;
      videoProgress = 0;
      updateProgressBar(0);
      
      const titles = {
        topaderas: 'Topaderas Tradicionales de San Pedro Lagunillas (Harina y Banda)',
        toros: 'Gran Jaripeo Ranchero y Toros de Reparó',
        bailes: 'Noche de Baile Popular y Tamborazo'
      };
      document.getElementById('currentVideoTitle').innerText = titles[type];

      ['topaderas', 'toros', 'bailes'].forEach(t => {
        const btn = document.getElementById('btnVid' + t.charAt(0).toUpperCase() + t.slice(1));
        if (t === type) {
          btn.className = 'px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 text-zinc-950 transition';
        } else {
          btn.className = 'px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition';
        }
      });

      drawCanvasFrame(0);
    }

    function togglePlayPreview() {
      if (isPlaying) {
        pauseVideoPreview();
      } else {
        playVideoPreview();
      }
    }

    function playVideoPreview() {
      isPlaying = true;
      document.getElementById('playIcon').className = 'fas fa-pause text-2xl';
      document.getElementById('playBtnOverlay').style.opacity = '0.4';
      
      let startTime = performance.now() - (videoProgress * 10000);

      function loop(currentTime) {
        const elapsed = (currentTime - startTime) / 1000;
        videoProgress = elapsed / 10;

        if (videoProgress >= 1) {
          videoProgress = 1;
          drawCanvasFrame(videoProgress);
          updateProgressBar(videoProgress);
          pauseVideoPreview();
          videoProgress = 0;
          return;
        }

        drawCanvasFrame(videoProgress);
        updateProgressBar(videoProgress);
        animFrame = requestAnimationFrame(loop);
      }

      animFrame = requestAnimationFrame(loop);
    }

    function pauseVideoPreview() {
      isPlaying = false;
      document.getElementById('playIcon').className = 'fas fa-play text-2xl ml-1';
      document.getElementById('playBtnOverlay').style.opacity = '1';
      if (animFrame) cancelAnimationFrame(animFrame);
    }

    function updateProgressBar(progress) {
      const pct = (progress * 100).toFixed(1);
      document.getElementById('videoProgressBar').style.width = pct + '%';
      
      const remaining = Math.max(0, 10 - (progress * 10)).toFixed(0);
      document.getElementById('videoTimerText').innerText = '00:' + (remaining < 10 ? '0' + remaining : remaining);
    }

    function drawCanvasFrame(progress) {
      if (!ctx) return;
      ctx.fillStyle = '#0a0a0c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const imgs = videoImages[currentVideoType] || [];
      if (imgs.length > 0) {
        const totalSlides = imgs.length;
        const currentSlideIdx = Math.min(totalSlides - 1, Math.floor(progress * totalSlides));
        const currentImg = imgs[currentSlideIdx];

        if (currentImg && currentImg.complete && currentImg.naturalWidth > 0) {
          // Efecto Ken Burns dinámico
          const scale = 1 + ((progress * totalSlides) % 1) * 0.08;
          ctx.save();
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.scale(scale, scale);
          
          const aspect = currentImg.width / currentImg.height;
          let drawW = canvas.width;
          let drawH = canvas.width / aspect;
          if (drawH < canvas.height) {
            drawH = canvas.height;
            drawW = canvas.height * aspect;
          }
          ctx.drawImage(currentImg, -drawW / 2, -drawH / 2, drawW, drawH);
          ctx.restore();
        }
      }

      // Viñeta oscura cinematográfica
      const grad = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 200, canvas.width/2, canvas.height/2, 700);
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.7)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Partículas festivas flotando (simulando harina de topaderas)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      for (let i = 0; i < 30; i++) {
        const x = (Math.sin(i * 99 + progress * 10) * 0.5 + 0.5) * canvas.width;
        const y = ((i * 47 + progress * 500) % canvas.height);
        const r = (i % 3) + 1.5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function quickAddCurrentVideo() {
      const vidIdMap = {
        topaderas: 'vid-topaderas-2024',
        toros: 'vid-toros-jaripeo',
        bailes: 'vid-baile-feria'
      };
      addToCartDirect(vidIdMap[currentVideoType], 'digital');
    }
  </script>
</body>
</html>`
}

// HTML para la Página de Descarga de 1 Solo Uso
function getDownloadPageHtml(token: string): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Descarga Segura (1 Solo Uso) | Fotos y Video El Tigre</title>
  
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
  
  <style>
    body { background-color: #0b0b0d; color: #f3f4f6; font-family: 'Montserrat', sans-serif; }
    .gold-gradient-text {
      background: linear-gradient(135deg, #FFF3B0 0%, #D4AF37 50%, #AA771C 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .gold-button {
      background: linear-gradient(135deg, #E5B842 0%, #D4AF37 50%, #B8860B 100%);
      color: #0d0d0e;
      font-weight: 700;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col justify-between bg-[#0b0b0d] p-4 sm:p-8">

  <div class="max-w-3xl mx-auto w-full my-auto">
    
    <!-- Header con Logo -->
    <div class="text-center mb-8">
      <a href="/" class="inline-flex items-center gap-3 group">
        <img src="/static/images/logo-el-tigre.jpg" alt="Logo El Tigre" class="w-16 h-16 rounded-full border-2 border-amber-500 shadow-xl">
        <div class="text-left">
          <span class="text-xs uppercase tracking-widest text-amber-400 font-bold block">FOTOS Y VIDEO</span>
          <span class="text-2xl font-black font-display tracking-wider gold-gradient-text">EL TIGRE</span>
        </div>
      </a>
      <h1 class="text-2xl sm:text-3xl font-extrabold mt-4 text-white font-display uppercase">
        Centro de Descarga Segura <span class="text-amber-400">(1 Solo Uso)</span>
      </h1>
      <p class="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto mt-1">
        Ingresa el Token de tu pedido confirmado por WhatsApp para descargar tus archivos originales en máxima calidad.
      </p>
    </div>

    <!-- Caja de Validación del Token -->
    <div class="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
      
      <!-- Input Token Form -->
      <div class="flex flex-col sm:flex-row gap-3 mb-6">
        <input type="text" id="tokenInput" value="${token}" placeholder="Ej. TIGRE-DEMO-DIGITAL-2024" class="flex-1 bg-zinc-950 border border-zinc-700 rounded-2xl px-4 py-3.5 text-sm font-mono text-amber-300 font-bold uppercase tracking-wider focus:outline-none focus:border-amber-500">
        <button onclick="checkToken()" class="gold-button px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider shadow flex items-center justify-center gap-2">
          <i class="fas fa-search"></i> Verificar Token
        </button>
      </div>

      <!-- Demo token rápido para pruebas -->
      <div class="mb-6 bg-zinc-950 p-3 rounded-xl border border-zinc-800/80 flex items-center justify-between text-xs">
        <span class="text-zinc-400">¿Deseas probar una descarga demo?</span>
        <button onclick="useDemoToken()" class="text-amber-400 font-bold hover:underline">
          Cargar Token Demo
        </button>
      </div>

      <!-- Estado: Cargando -->
      <div id="loadingBox" class="hidden text-center py-8">
        <i class="fas fa-circle-notch fa-spin text-amber-400 text-3xl mb-3"></i>
        <p class="text-xs text-zinc-400">Validando autenticidad del token...</p>
      </div>

      <!-- Estado: Token Válido y Activo -->
      <div id="validBox" class="hidden space-y-6">
        <div class="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-2xl flex items-center gap-3">
          <i class="fas fa-shield-check text-emerald-400 text-2xl"></i>
          <div>
            <h4 class="text-sm font-bold text-emerald-300">¡Token Válido y Activo!</h4>
            <p class="text-xs text-zinc-300">Este enlace está listo para descargarse. Recuerda que al descargar quedará consumido de inmediato.</p>
          </div>
        </div>

        <div class="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 space-y-2 text-xs">
          <div class="flex justify-between">
            <span class="text-zinc-400">Folio:</span>
            <span id="resOrderId" class="font-bold text-white"></span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-400">Cliente:</span>
            <span id="resCustomer" class="font-bold text-white"></span>
          </div>
          <div class="flex justify-between">
            <span class="text-zinc-400">Material Comprado:</span>
            <span id="resItemsCount" class="font-bold text-amber-400"></span>
          </div>
        </div>

        <!-- Lista de Archivos -->
        <div>
          <h4 class="text-xs font-bold uppercase text-zinc-400 tracking-wider mb-2">Archivos Disponibles:</h4>
          <div id="filesList" class="space-y-2"></div>
        </div>

        <!-- Botón de Descarga / Consumo de 1 Solo Uso -->
        <div class="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-center space-y-3">
          <p class="text-xs text-amber-200">
            <i class="fas fa-exclamation-triangle text-amber-400 mr-1"></i>
            <strong>AVISO IMPORTANTE:</strong> Al presionar el botón de abajo, se iniciará la descarga y tu enlace quedará <strong>quemado permanentemente</strong>.
          </p>

          <button onclick="consumeAndDownload()" id="downloadActionBtn" class="w-full gold-button py-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition">
            <i class="fas fa-cloud-arrow-down text-base"></i> DESCARGAR AHORA (CONSUMIR LINK DE 1 USO)
          </button>
        </div>
      </div>

      <!-- Estado: Error / Token Usado / Inválido -->
      <div id="errorBox" class="hidden bg-red-950/40 border border-red-500/40 p-6 rounded-2xl text-center space-y-3">
        <i class="fas fa-circle-exclamation text-red-400 text-3xl"></i>
        <h4 id="errorTitle" class="text-base font-bold text-red-300">Enlace No Disponible</h4>
        <p id="errorMsg" class="text-xs text-zinc-300 max-w-md mx-auto"></p>
        
        <div class="pt-2">
          <a href="https://wa.me/523118470860" target="_blank" class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold">
            <i class="fab fa-whatsapp"></i> Contactar Soporte al 311 847 0860
          </a>
        </div>
      </div>

    </div>

    <!-- Regresar al Inicio -->
    <div class="text-center mt-6">
      <a href="/" class="text-xs text-zinc-400 hover:text-amber-400 transition inline-flex items-center gap-1.5">
        <i class="fas fa-arrow-left"></i> Volver a la Galería Principal de Fotos y Video El Tigre
      </a>
    </div>

  </div>

  <script>
    let currentTokenData = null;

    document.addEventListener('DOMContentLoaded', () => {
      const initialToken = document.getElementById('tokenInput').value.trim();
      if (initialToken) {
        checkToken();
      }
    });

    function useDemoToken() {
      document.getElementById('tokenInput').value = 'TIGRE-DEMO-DIGITAL-2024';
      checkToken();
    }

    async function checkToken() {
      const token = document.getElementById('tokenInput').value.trim();
      if (!token) {
        alert('Por favor ingresa un token válido.');
        return;
      }

      document.getElementById('loadingBox').classList.remove('hidden');
      document.getElementById('validBox').classList.add('hidden');
      document.getElementById('errorBox').classList.add('hidden');

      try {
        const res = await fetch('/api/tokens/check/' + encodeURIComponent(token));
        const data = await res.json();
        document.getElementById('loadingBox').classList.add('hidden');

        if (data.valid) {
          currentTokenData = data;
          document.getElementById('resOrderId').innerText = data.orderId;
          document.getElementById('resCustomer').innerText = data.customerName;
          document.getElementById('resItemsCount').innerText = data.items.length + ' archivo(s)';

          const filesList = document.getElementById('filesList');
          filesList.innerHTML = '';
          data.items.forEach((it, idx) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'flex items-center justify-between p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-xs';
            itemDiv.innerHTML = \`
              <div class="flex items-center gap-2 overflow-hidden">
                <i class="fas \${it.type === 'video' ? 'fa-video text-amber-400' : 'fa-image text-amber-400'}"></i>
                <span class="text-white font-medium truncate">\${it.title}</span>
              </div>
              <span class="text-[10px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded font-mono shrink-0">
                \${it.filename}
              </span>
            \`;
            filesList.appendChild(itemDiv);
          });

          document.getElementById('validBox').classList.remove('hidden');
        } else {
          document.getElementById('errorTitle').innerText = data.status === 'used' ? '⚠️ Token Ya Utilizado' : 'Token Inválido o Expirado';
          document.getElementById('errorMsg').innerText = data.error || 'No se pudo validar el token.';
          document.getElementById('errorBox').classList.remove('hidden');
        }
      } catch (err) {
        document.getElementById('loadingBox').classList.add('hidden');
        document.getElementById('errorTitle').innerText = 'Error de Conexión';
        document.getElementById('errorMsg').innerText = 'No se pudo contactar con el servidor. Verifica tu conexión.';
        document.getElementById('errorBox').classList.remove('hidden');
      }
    }

    async function consumeAndDownload() {
      const token = document.getElementById('tokenInput').value.trim();
      if (!token) return;

      const btn = document.getElementById('downloadActionBtn');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> PROCESANDO DESCARGA Y QUEMANDO TOKEN...';

      try {
        const res = await fetch('/api/tokens/consume/' + encodeURIComponent(token), {
          method: 'POST'
        });
        const data = await res.json();

        if (data.success) {
          // Descargar cada archivo
          data.files.forEach((file, index) => {
            setTimeout(() => {
              const link = document.createElement('a');
              link.href = file.url;
              link.download = file.filename;
              link.target = '_blank';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }, index * 800);
          });

          // Actualizar UI a usado
          setTimeout(() => {
            document.getElementById('validBox').classList.add('hidden');
            document.getElementById('errorTitle').innerText = '✅ Descarga Realizada con Éxito';
            document.getElementById('errorMsg').innerText = 'Los archivos se han descargado en tu dispositivo. Tal como se especificó, este enlace ha quedado quemado e inhabilitado (1 solo uso). Si necesitas soporte adicional, comunícate al WhatsApp 311 847 0860.';
            document.getElementById('errorBox').classList.remove('hidden');
            document.getElementById('errorBox').className = 'bg-emerald-950/40 border border-emerald-500/40 p-6 rounded-2xl text-center space-y-3';
          }, 1500);

        } else {
          alert('Error: ' + data.error);
          btn.disabled = false;
          btn.innerHTML = '<i class="fas fa-cloud-arrow-down"></i> DESCARGAR AHORA (CONSUMIR LINK DE 1 USO)';
        }
      } catch (err) {
        alert('Error ejecutando la descarga.');
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-cloud-arrow-down"></i> DESCARGAR AHORA (CONSUMIR LINK DE 1 USO)';
      }
    }
  </script>
</body>
</html>`
}

export default app
