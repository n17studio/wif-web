LOGO OFICIAL WIF — INSTRUCCIONES DE SUSTITUCIÓN
================================================

Actualmente el sitio usa un LOGOTIPO PROVISIONAL construido con SVG + texto
(interpretación tipográfica del isotipo "mano sosteniendo a tres personas").

Cuando dispongas del logo oficial:

1. Guarda aquí los dos archivos (preferible SVG; si no, PNG con fondo transparente):
     assets/img/wif-logo.svg         -> versión a color, para fondos claros
     assets/img/wif-logo-white.svg   -> versión blanca, para fondos oscuros (footer, hero)

2. En CADA página HTML, busca el bloque marcado con el comentario:
     <!-- ===== LOGO PROVISIONAL ===== -->
   Sustituye el contenido del enlace <a class="lockup"> por:
     <img src="assets/img/wif-logo.svg" alt="Workplace Integrity Forum" height="42">

   En el footer (fondo oscuro) usa la versión blanca:
     <img src="assets/img/wif-logo-white.svg" alt="Workplace Integrity Forum" height="40">

3. Sustituye también el favicon:
     assets/img/favicon.svg  (y opcionalmente favicon.ico / apple-touch-icon.png)

4. Para Open Graph / compartir en redes, añade una imagen social 1200x630px:
     assets/img/og-image.jpg
   (ya referenciada en las meta etiquetas de cada página)

Paleta oficial para regenerar el logo si hace falta:
  Navy   #163A57   ·   Ink #0C2031   ·   Teal #15756B   ·   Latón #B0823F
