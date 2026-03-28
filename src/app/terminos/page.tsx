import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio · 0kbot",
  description: "Términos y condiciones de uso del sitio web y servicios de 0kbot.",
  robots: { index: false },
};

export default function TerminosPage() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="container-narrow">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">Legal</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Términos de Servicio
          </h1>
          <p className="text-primary-foreground/70 mt-3 font-body">
            Última actualización: marzo de 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-slate max-w-none font-body">

            <h2>1. Aceptación de los términos</h2>
            <p>
              Al acceder y usar el sitio web de 0kbot (<a href="https://0kbot.com">0kbot.com</a>), aceptas estos términos de servicio. Si no estás de acuerdo con alguno de ellos, te pedimos que no uses el sitio.
            </p>

            <h2>2. Descripción del servicio</h2>
            <p>
              0kbot ofrece servicios de consultoría en mejora y automatización de procesos operativos para pequeñas y medianas empresas en Chile. Los servicios específicos, alcance y condiciones se definen en una propuesta comercial separada acordada entre las partes.
            </p>
            <p>
              El sitio web tiene como propósito presentar información sobre nuestros servicios y facilitar el contacto con potenciales clientes.
            </p>

            <h2>3. Uso del sitio</h2>
            <p>Te comprometes a usar este sitio web de manera lícita y a no:</p>
            <ul>
              <li>Usar el sitio de forma que viole leyes o regulaciones aplicables en Chile.</li>
              <li>Transmitir contenido falso, engañoso o perjudicial.</li>
              <li>Intentar acceder a sistemas o datos no autorizados.</li>
              <li>Usar el sitio con fines de spam o prospección masiva no autorizada.</li>
            </ul>

            <h2>4. Propiedad intelectual</h2>
            <p>
              Todos los contenidos del sitio (textos, imágenes, código, logotipo, diseño) son propiedad de 0kbot o sus respectivos titulares, y están protegidos por la legislación chilena e internacional sobre propiedad intelectual.
            </p>
            <p>
              No se permite reproducir, distribuir, modificar o usar con fines comerciales ningún contenido del sitio sin autorización escrita previa.
            </p>

            <h2>5. Formularios y datos de contacto</h2>
            <p>
              Al completar cualquier formulario del sitio, declaras que la información proporcionada es veraz y que tienes autorización para usar el correo electrónico indicado. El uso de estos datos está regido por nuestra <a href="/privacidad">Política de Privacidad</a>.
            </p>

            <h2>6. Limitación de responsabilidad</h2>
            <p>
              El sitio web y su contenido se proveen &ldquo;tal cual&rdquo;. 0kbot no garantiza que el sitio esté libre de errores, interrupciones o que la información sea siempre exacta y actualizada.
            </p>
            <p>
              En ningún caso 0kbot será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso del sitio.
            </p>
            <p>
              Las estimaciones de impacto y benchmarks de industria presentados en el sitio son referencias informativas, no garantías de resultado para ningún proyecto específico.
            </p>

            <h2>7. Links a terceros</h2>
            <p>
              El sitio puede contener links a sitios externos (Calendly, LinkedIn, etc.). 0kbot no es responsable del contenido ni las prácticas de privacidad de esos sitios.
            </p>

            <h2>8. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa será sometida a los tribunales competentes de la ciudad de Santiago.
            </p>

            <h2>9. Modificaciones</h2>
            <p>
              0kbot puede modificar estos términos en cualquier momento. La versión vigente siempre estará disponible en <a href="/terminos">0kbot.com/terminos</a>. El uso continuado del sitio tras una modificación implica la aceptación de los nuevos términos.
            </p>

            <h2>10. Contacto</h2>
            <p>
              Para consultas sobre estos términos: <a href="mailto:hola@0kbot.com">hola@0kbot.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
