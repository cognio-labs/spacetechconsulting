create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  service text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_leads enable row level security;

create policy "Server service role can manage contact leads"
  on public.contact_leads
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
