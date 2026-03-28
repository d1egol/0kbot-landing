import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · 0kbot",
  description: "Política de privacidad de 0kbot. Cómo recopilamos, usamos y protegemos tus datos personales conforme a la ley chilena.",
  robots: { index: false },
};

export default function PrivacidadPage() {
  return (
    <>
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="container-narrow">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">Legal</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Política de Privacidad
          </h1>
          <p className="text-primary-foreground/70 mt-3 font-body">
            Última actualización: marzo de 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-slate max-w-none font-body">

            <h2>1. Quién somos</h2>
            <p>
              0kbot es una consultora de mejora y automatización de procesos para pymes chilenas, operada por Diego López, con sede en Santiago, Chile. Contacto: <a href="mailto:hola@0kbot.com">hola@0kbot.com</a>.
            </p>

            <h2>2. Qué datos recopilamos</h2>
            <p>Recopilamos datos personales cuando:</p>
            <ul>
              <li><strong>Completas el formulario de contacto:</strong> nombre y correo electrónico.</li>
              <li><strong>Completas el formulario de diagnóstico:</strong> nombre, email, tamaño de empresa, industria y descripción del problema.</li>
              <li><strong>Agendas en Calendly:</strong> nombre, email y otros datos que ingreses en la plataforma de Calendly (sujeto a su propia política de privacidad).</li>
              <li><strong>Visitas el sitio:</strong> datos de navegación anonimizados a través de Google Analytics y Meta Pixel (si están activos).</li>
            </ul>

            <h2>3. Para qué usamos tus datos</h2>
            <ul>
              <li>Responder a tu consulta o diagnóstico solicitado.</li>
              <li>Agendar y coordinar reuniones.</li>
              <li>Enviarte información relacionada con nuestros servicios (solo si lo solicitaste).</li>
              <li>Mejorar el sitio web mediante análisis de uso anonimizado.</li>
            </ul>
            <p>No vendemos, cedemos ni compartimos tus datos personales con terceros con fines comerciales.</p>

            <h2>4. Servicios de terceros</h2>
            <p>Utilizamos los siguientes servicios externos que pueden tener acceso a tus datos:</p>
            <ul>
              <li><strong>Supabase:</strong> almacenamiento de datos del formulario de contacto. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad de Supabase</a>.</li>
              <li><strong>Resend:</strong> envío de correos transaccionales. <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad de Resend</a>.</li>
              <li><strong>Calendly:</strong> agendamiento de reuniones. <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad de Calendly</a>.</li>
              <li><strong>Google Analytics:</strong> análisis de tráfico web (si está activo). Los datos son anonimizados. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad de Google</a>.</li>
              <li><strong>Meta Pixel:</strong> seguimiento de conversiones (si está activo). <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Política de privacidad de Meta</a>.</li>
            </ul>

            <h2>5. Retención de datos</h2>
            <p>
              Conservamos tus datos mientras sea necesario para el propósito por el que fueron recopilados o mientras la relación comercial esté activa. Puedes solicitar la eliminación de tus datos en cualquier momento.
            </p>

            <h2>6. Tus derechos</h2>
            <p>Conforme a la <strong>Ley 19.628 sobre Protección de la Vida Privada</strong> de Chile, tienes derecho a:</p>
            <ul>
              <li>Acceder a los datos personales que tenemos sobre ti.</li>
              <li>Rectificar datos incorrectos o desactualizados.</li>
              <li>Solicitar la eliminación de tus datos.</li>
              <li>Oponerte al tratamiento de tus datos.</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, escríbenos a <a href="mailto:hola@0kbot.com">hola@0kbot.com</a>. Responderemos en un plazo máximo de 10 días hábiles.
            </p>

            <h2>7. Seguridad</h2>
            <p>
              Implementamos medidas técnicas razonables para proteger tus datos personales contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún sistema de transmisión de datos por internet es 100% seguro.
            </p>

            <h2>8. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política en cualquier momento. La versión vigente siempre estará disponible en <a href="/privacidad">0kbot.com/privacidad</a>. Te notificaremos sobre cambios significativos por correo si tienes una relación activa con nosotros.
            </p>

            <h2>9. Contacto</h2>
            <p>
              Para consultas sobre esta política de privacidad, escríbenos a: <a href="mailto:hola@0kbot.com">hola@0kbot.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
