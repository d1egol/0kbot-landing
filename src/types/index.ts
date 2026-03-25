export interface Lead {
  id?: string;
  nombre: string;
  email: string;
  empresa: string;
  cargo?: string;
  tamano_empresa: "<20" | "20-50" | "50-100" | "100-200" | ">200";
  problema?: string;
  fuente: "landing_diagnostico";
  estado: "nuevo" | "contactado" | "calificado" | "descartado";
  created_at?: string;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  empresa: string;
  cargo?: string;
  tamano_empresa: "<20" | "20-50" | "50-100" | "100-200" | ">200" | "";
  problema?: string;
}

export interface CaseStudy {
  industria: string;
  tamano: string;
  problema: string;
  solucion: string;
  resultado: string;
  metrica: string;
}

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export type SubmitStatus = "idle" | "submitting" | "success" | "error";
