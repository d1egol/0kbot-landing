-- Migración 003: agregar columna diagnostico_data a la tabla leads
-- Permite almacenar las respuestas del wizard de diagnóstico como JSON
-- Aplicar en Supabase Dashboard → SQL Editor
ALTER TABLE leads ADD COLUMN IF NOT EXISTS diagnostico_data JSONB;
