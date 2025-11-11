FROM caddy:latest

# Installer PHP et extensions nécessaires
RUN apk add --no-cache php81 php81-fpm php81-opcache php81-mbstring php81-pdo php81-pdo_sqlite

# Crée le dossier où ton site sera monté
RUN mkdir -p /srv

# Copie ton Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Déclare les volumes
VOLUME ["/srv", "/config"]

# Expose le port 2025
EXPOSE 2025

# Lancement de PHP-FPM et Caddy
CMD php-fpm81 -F & caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
