docker run --rm --link=sep-stat -v $(pwd):/data skandyla/wrk -s stress.lua -t5 -c30 -d10 http://sep-stat:10011/api/v1/person/videos
