-- Migration 002: Actualizar esquema de tabla leads para Fase 1
-- Renombrar columnas y agregar campo estado
-- Aplicar en Supabase Dashboard > SQL Editor

-- Renombrar empleados → tamano_empresa
ALTER TABLE leads RENAME COLUMN empleados TO tamano_empresa;

-- Renombrar mensaje → problema
ALTER TABLE leads RENAME COLUMN mensaje TO problema;

-- Renombrar source → fuente
ALTER TABLE leads RENAME COLUMN source TO fuente;

-- Agregar columna estado con valor por defecto
ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS estado TEXT NOT NULL DEFAULT 'nuevo'
  CHECK (estado IN ('nuevo', 'contactado', 'calificado', 'descartado'));

-- Actualizar el rango de tamano_empresa (ampliar opciones respecto a Fase 0)
-- Los valores existentes (<20, 20-50, 50-100, 100-200, >200) se mantienen como texto libre.
-- Agregar índice para consultas por estado
CREATE INDEX IF NOT EXISTS idx_leads_estado ON leads (estado);

-- Comentarios de columnas para documentación
COMMENT ON COLUMN leads.tamano_empresa IS 'Rango de empleados: <20, 20-50, 50-100, 100-200, >200';
COMMENT ON COLUMN leads.problema IS 'Descripción del principal problema operacional del lead';
COMMENT ON COLUMN leads.fuente IS 'Origen del lead: landing_diagnostico, etc.';
COMMENT ON COLUMN leads.estado IS 'Estado del lead: nuevo, contactado, calificado, descartado';
