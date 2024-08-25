#!/bin/sh

# Espera até o PostgreSQL estar disponível
until pg_isready -h postgres -p 5432 -U myuser; do
  echo "Aguardando o banco de dados..."
  sleep 2
done

# Rodar as migrações
npx prisma generate
# dotenv -e ./config/env/development.env npx prisma migrate dev
npx prisma migrate deploy

# Iniciar a aplicação em produção
exec npm run start:prod

