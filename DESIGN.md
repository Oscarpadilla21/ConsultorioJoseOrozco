---
name: Consultorio Dr. José Orozco
description: Clínica de Odontología, Cirugía Oral & Estomatología Especializada
colors:
  primary-teal: "#0f766e"
  primary-hover: "#0d655e"
  primary-light: "#f0fdfa"
  primary-border: "#ccfbf1"
  accent-coral: "#c2410c"
  accent-hover: "#9a3412"
  accent-light: "#fff7ed"
  accent-border: "#ffedd5"
  whatsapp-green: "#047857"
  whatsapp-hover: "#065f46"
  cyan-tint: "#a5f3fc"
  cyan-bright: "#2dd4bf"
  gold: "#b45309"
  gold-bg: "#fef3c7"
  slate-50: "#f8fafc"
  slate-100: "#f1f5f9"
  slate-200: "#e2e8f0"
  slate-300: "#cbd5e1"
  slate-400: "#94a3b8"
  slate-500: "#64748b"
  slate-600: "#475569"
  slate-700: "#334155"
  slate-800: "#1e293b"
  slate-900: "#0f172a"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "3.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "2.75rem"
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "-0.015em"
  h2:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
  h3:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  h4:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  sm:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
  xs:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  card: "16px"
  lg: "20px"
  xl: "24px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary-teal}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-accent:
    backgroundColor: "{colors.accent-coral}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
---

## Overview

El sistema de diseño del **Consultorio Dr. José de Jesús Orozco Ariza** (Cons. 115, Centro Médico Los Ejecutivos, Cartagena) encarna el arquetipo de *El Sabio y El Cuidador*. Combina el rigor de la cátedra académica odontológica (Universidad de Cartagena) y la cirugía oral guiada sin dolor con la calidez humana y la calma necesaria para eliminar la odontofobia.

La dirección de arte se fundamenta en un equilibrio de alta autoridad médica: encabezados en tipografía serif editorial de gran personalidad y cuerpo de texto limpio en sans-serif contemporáneo.

## Colors

- **Deep Slate Navy (`#0F172A` / `--color-slate-900`):** Tono de máxima sobriedad y contraste (16.5:1 ratio vs blanco). Se emplea en encabezados, pie de página y fondos con alta carga de autoridad.
- **Teal Quirúrgico Calibrado (`#0F766E` / `--color-primary`):** Tono clínico principal (5.47:1 ratio vs blanco, pase WCAG AA). Evoca esterilidad moderna, bio-compatibilidad y rigor científico.
- **Warm Terracotta / Coral (`#C2410C` / `--color-accent`):** Tono cálido de acción y conversión (5.18:1 ratio vs blanco). Humaniza la interfaz, aporta calidez al ambiente clínico e impulsa los botones de agendamiento.
- **Emerald WhatsApp (`#047857` / `--color-whatsapp`):** Tono reservado para el canal de atención rápida y confirmación de citas (5.48:1 ratio vs blanco).
- **Cyan de Diagnóstico (`#A5F3FC` / `#2DD4BF`):** Acento luminoso para monitores y enlaces en fondos oscuros (contrastes superiores a 9:1 contra Slate 900).
- **Soft Mist White (`#F8FAFC` / `--color-slate-50`):** Superficie luminosa de descanso visual que otorga pureza y amplitud.

## Typography

- **Títulos y Display:** `Playfair Display` (serif editorial, pesos 600 y 700, estilo romano o itálico sutil). Aporta prestigio universitario, distinción editorial y solidez académica.
- **Cuerpo de texto y Controles UI:** `Plus Jakarta Sans` (sans-serif geométrico humanista, pesos 400, 500, 600 y 700). Proporciona claridad técnica absoluta en pantallas móviles y monitores clínicos.
- **Escala de Tamaños:**
  - `0.75rem` (12px): Etiquetas y micro-copy.
  - `0.8125rem` (13px): Overlines y notas de ubicación.
  - `0.875rem` (14px): Metadatos y badges.
  - `1rem` (16px): Lectura base y párrafos principales.
  - `1.0625rem` (17px): Subtítulos de especialidad.
  - `1.125rem` - `1.25rem` (18px - 20px): Títulos de tarjetas y citas.
  - `1.5rem` - `1.75rem` (24px - 28px): Subtítulos de sección.
  - `2rem` - `2.75rem` (32px - 44px): Títulos de sección (H2).
  - `2.35rem` - `3.5rem` (38px - 56px): Hero Headline (H1).

## Layout

- Contenedor principal centrado con ancho máximo de `1200px` y padding lateral responsivo (`1.5rem` en móvil, `2rem` en desktop).
- Estructura rítmica basada en múltiplos de 8px (espaciados de 8px, 16px, 24px, 32px, 48px, 64px y 96px entre secciones mayores).
- Disposición en Bento Grids asimétricos con proporciones armónicas para presentar especialidades y credenciales.
- Secciones divididas con descansos visuales amplios para evitar fatiga cognitiva en el paciente.

## Elevation & Depth

- **Sombras con offset natural y dispersión suave:** No se utilizan halos planos sin desplazamiento ni bordes duros artificiales.
  - Sombra sutil de tarjeta: `box-shadow: 0 4px 20px -4px rgba(15, 23, 42, 0.06), 0 2px 6px -2px rgba(15, 23, 42, 0.04);`
  - Sombra flotante de elevación: `box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.12);`
- Bordes ultra-delgados (`1px solid var(--color-border)`) para definir tarjetas y paneles sobre el fondo Mist White.

## Shapes

- Radios orgánicos y consistentes:
  - Botones principales: `12px` (`--radius-btn`).
  - Tarjetas y contenedores de contenido: `16px` (`--radius-card`) a `24px` (`--radius-xl`).
  - Píldoras de acción y tags de estado: `9999px` (`--radius-pill`).

## Components

- **Sticky Navigation Dock:** Barra superior compacta con logotipo vectorial oficial a la izquierda, enlaces ancla de navegación rápida, badge de estado en vivo y botón de agendamiento directo a la derecha.
- **Bento Cards de Especialidades:** Bloques temáticos para Cirugía de Cordales, Estomatología / Patología Bucal, Diseño de Sonrisa y Rehabilitación. Cada uno con diagnóstico preliminar y botón de consulta.
- **Tour de Instalaciones Reales:** Visor por pestañas que exhibe la tecnología, la doble unidad clínica y la estricta asepsia con fotos reales del Consultorio 115.
- **Ficha Médica del Especialista:** Sección con credenciales, docencia universitaria en Unicartagena y fotografía real.
- **Testimonios de Pacientes Reales:** Tarjetas con nombre, tratamiento recibido y valoración verificada.
- **Acordeón FAQ Accesible:** Preguntas frecuentes con semántica nativa y accesibilidad ARIA para resolución rápida de dudas de precios, dolor y horarios.
- **Barra de Acción Móvil Inferior (Bottom Dock):** Acceso permanente en 1 toque a WhatsApp, llamada directa y ruta en Google Maps.

## Do's and Don'ts

### Do's
- Mantener siempre ratios de contraste de al menos 4.5:1 para todo texto de cuerpo y 3:1 para encabezados (WCAG AA).
- Respetar la jerarquía continua de encabezados H1 -> H2 -> H3 -> H4 sin saltarse niveles.
- Usar fotos reales del consultorio y del Dr. José Orozco; mostrar el equipo real y las instalaciones.
- Personalizar los mensajes de WhatsApp según el botón o sección donde haga clic el paciente.

### Don'ts
- **No** usar chips genéricos tipo "eyebrow / kicker" en el Hero que imiten landings de SaaS AI.
- **No** usar textos con gradientes de color que degraden la legibilidad.
- **No** colocar textos oscuros sobre fondos oscuros o colores de baja visibilidad (#0f766e sobre #0f172a).
- **No** usar imágenes de stock artificiales con modelos genéricos que resten credibilidad a la clínica real.
