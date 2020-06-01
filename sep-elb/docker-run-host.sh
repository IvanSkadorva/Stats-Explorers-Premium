docker run -d --name=sep-elb --rm  -p 8080:8080 -p 8000:8000 \
    -v $PWD/traefik/traefik.toml:/etc/traefik/traefik.toml -v $PWD/traefik/conf:/toml -v /var/run/docker.sock:/var/run/docker.sock traefik:v2.2

