import { NextRequest, NextResponse } from "next/server";
import { onboardingSchema } from "@/lib/validations";
import { createClient } from "@supabase/supabase-js";
import {
  sendOnboardingConfirmationEmail,
  sendOnboardingNotificationEmail,
} from "@/lib/email";

const TAMANO_MAP: Record<string, string> = {
  "1-5": "<20",
  "6-20": "<20",
  "21-50": "20-50",
  "51-100": "50-100",
  "100+": ">200",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = onboardingSchema.parse(body);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error: dbError } = await supabase.from("leads").insert({
      nombre: data.nombre,
      email: data.email,
      empresa: data.empresa,
      tamano_empresa: TAMANO_MAP[data.tamano] ?? "<20",
      fuente: "onboarding_form",
      estado: "nuevo",
      diagnostico_data: {
        telefono: data.telefono,
        rubro: data.rubro,
        tamano: data.tamano,
        proceso_principal: data.proceso_principal,
        intentado_antes: data.intentado_antes,
        resultado_ideal: data.resultado_ideal,
        plazo: data.plazo,
        presupuesto: data.presupuesto,
      },
    });

    if (dbError) {
      console.error("Supabase error:", dbError);
    }

    await Promise.allSettled([
      sendOnboardingConfirmationEmail(data),
      sendOnboardingNotificationEmail(data),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Onboarding API error:", error);
    return NextResponse.json(
      { error: "Error procesando el formulario" },
      { status: 400 }
    );
  }
}
