-- =============================================
-- 0kbot — Migración inicial
-- Tabla: leads
-- Ejecutar en: Supabase Dashboard > SQL Editor
-- =============================================

create table if not exists leads (
  id          uuid        primary key default gen_random_uuid(),
  nombre      text        not null,
  email       text        not null,
  empresa     text        not null,
  cargo       text,
  empleados   text,        -- rango: "50-100", "100-200", "200+"
  mensaje     text,
  source      text        default 'landing',
  created_at  timestamptz default now()
);

-- Habilitar Row Level Security
alter table leads enable row level security;

-- Solo el service_role puede leer/escribir
-- (Las API routes del servidor usan el cliente admin con service_role key)
create policy "service_role_full_access" on leads
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

-- Índice para búsquedas por email
create index if not exists leads_email_idx on leads (email);

-- Índice para ordenar por fecha
create index if not exists leads_created_at_idx on leads (created_at desc);

-- =============================================
-- Verificación: insertar registro de prueba
-- (Ejecutar solo en desarrollo para verificar conexión)
-- =============================================
-- insert into leads (nombre, email, empresa, cargo, empleados, mensaje, source)
-- values (
--   'Test Usuario',
--   'test@0kbot.com',
--   'Empresa de Prueba',
--   'CEO',
--   '50-100',
--   'Registro de prueba - verificación de setup',
--   'verify-setup'
-- );
