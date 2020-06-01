docker run --rm --link=sep-nginx -v $(pwd):/data skandyla/wrk -s stress.lua -t5 -c10 -d30 http://sep-nginx:80/plain.html
