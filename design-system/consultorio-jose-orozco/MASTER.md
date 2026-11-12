# Master Design System & Brand Identity Guide
## Clínica Odontológica Dr. José Orozco (Odontología & Estomatología Especializada)

---

**Proyecto:** Consultorio Dr. José de Jesús Orozco Ariza  
**Sede:** Centro Médico Los Ejecutivos, Consultorio 115, Cartagena de Indias, Colombia  
**Especialidades Clave:** Estomatología y Patología Bucal, Cirugía Oral de Cordales, Diseño de Sonrisa y Estética Conservadora, Rehabilitación Oral y Prótesis  
**Público Objetivo:** Adultos jóvenes y familias que buscan odontología moderna, estética, predecible y con un trato humano de excelencia.  
**Personalidad de Marca:** Confiable, moderna, cálida, premium pero accesible, limpia y tecnológica.

---

## 1. Concepto y Estrategia de Marca

### Propuesta de Posicionamiento
* **Tagline Principal:** *"Ciencia que cuida, precisión que transforma tu sonrisa."*
* **Tagline Secundario (Estética & Modernidad):** *"La evolución de la odontología: donde el arte y la salud convergen."*
* **Tagline Secundario (Confianza & Bienestar):** *"Tratamientos predecibles, tecnología sin dolor y el trato humano que mereces."*

### Arquetipo de Marca
* **El Sabio + El Cuidador (The Sage & The Caregiver):**
  * *El Sabio:* Respaldo docente universitario (Universidad de Cartagena), rigor en el diagnóstico diferencial, transparencia y base científica.
  * *El Cuidador:* Hospitalidad médica cálida, eliminación de la odontofobia (miedo al dentista), protocolos sin dolor y empatía constante.

### Pilares de Marca
1. **Confiable & Científica:** Diagnósticos basados en evidencia con proyección en monitor digital.
2. **Cálida & Empática:** Cero masificación. Consultas individuales de 45 a 60 minutos sin prisas ni salas saturadas.
3. **Moderna & Vanguardista:** Técnicas mínimamente invasivas, bio-materiales y cirugía guiada.
4. **Premium Accesible:** Sofisticación y asepsia hospitalaria con políticas de pago transparentes y directas sin EPS.

---

## 2. Identidad Visual

### Paleta Cromática y Tokens Semánticos

| Rol Semántico | Nombre del Tono | HEX | Variable CSS | Justificación Psicológica |
| :--- | :--- | :--- | :--- | :--- |
| **Primario Profundo** | Deep Slate Navy | `#0F172A` | `--color-navy-slate` | Autoridad médica, sobriedad, alto contraste y elegancia atemporal. |
| **Secundario Tecnológico**| Pure Medical Cyan | `#0EA5E9` | `--color-primary` | Frescura, esterilidad, tecnología digital y dinamismo de acción. |
| **Acento Cálido** | Warm Champagne | `#E2D4B7` | `--color-champagne` | Calidez humana, bienestar boutique y neutralización de la frialdad hospitalaria. |
| **Superficie / Fondo** | Soft Mist White | `#F8FAFC` | `--color-bg-page` | Limpieza absoluta, descanso visual y elegancia moderna sin encandilar. |
| **Texto de Lectura** | Slate Contrast | `#1E293B` | `--color-text-main` | Ratio de contraste superior a 10:1 (Accesibilidad WCAG AAA). |
| **Acento de Conversión** | Emerald WhatsApp | `#10B981` | `--color-whatsapp` | Familiaridad, inmediatez y agendamiento sin fricción. |

### Tipografía

* **Titulares y Citas:** `Playfair Display` (SemiBold 600 / Italic)  
  *Aporta distinción editorial, calidez y prestigio académico.*
* **Cuerpo de Texto y UI:** `Inter` (Regular 400 / Medium 500 / SemiBold 600)  
  *Claridad meridiana en pantallas de cualquier resolución y lectura sin fatiga.*

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&display=swap');
```

---

## 3. Arquitectura y Experiencia Web (UX/UI)

1. **Header Flotante Tipo Dock:** Logotipo institucional en SVG, navegación contextual, baliza de estado en vivo (*"Cons. 115 Abierto"*) y botón de agendamiento rápido.
2. **Hero Section con Triage de Pacientes:** Permite elegir motivo de consulta (Cordales, Estomatología, Diseño de Sonrisa, Urgencia) y preferencia horaria, generando un mensaje instantáneo de WhatsApp pre-escrito.
3. **Trust Ribbon (Prueba Social & Autoridad):** Métricas tangibles (+20 años de experiencia, cátedra universitaria, 4.9/5 estrellas en Google Reviews).
4. **Bento Grid de Servicios:** Tarjetas asimétricas jerárquicas con micro-interacciones suaves y descripciones pedagógicas.
5. **Casos de Éxito & Visualizador Antes/Después:** Comparador interactivo de resultados clínicos para validar la estética natural sin falsedad.
6. **Tour de Instalaciones Reales:** Visor por pestañas que exhibe la tecnología, la doble unidad clínica y la estricta asepsia.
7. **Perfil Académico del Especialista:** Respaldo de cátedra en la Universidad de Cartagena frente al sistema masivo de salud.
8. **Testimonios Verificados:** Opiniones directas de pacientes que superaron el miedo dental.
9. **FAQ con Filtros por Categoría:** Despeje inmediato de objeciones sobre EPS, dolor, tiempos y métodos de pago.
10. **Barra Móvil Flotante (Bottom Action Bar):** Acceso permanente en 1 tap a WhatsApp, llamada directa y ruta en Google Maps.

---

## 4. Voz y Lineamientos de Copywriting

* **Regla 1:** No usar jerga incomprensible sin explicar su beneficio concreto de salud o estética.
* **Regla 2:** Validar siempre que la consulta es médica particular directa (sin demoras ni requisitos de EPS).
* **Regla 3:** Cero fotos de stock cliché; priorizar imágenes reales del consultorio y del especialista.
* **Regla 4:** Toda llamada a la acción (CTA) debe conectar con el canal de atención personalizada: WhatsApp `+57 314 502 6911`.
