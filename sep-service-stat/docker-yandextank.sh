docker run --rm  --link sep-stat:targethost -v $(pwd):/var/loadtest -v $SSH_AUTH_SOCK:/ssh-agent -e SSH_AUTH_SOCK=/ssh-agent -v $HOME/.ssh:/root/.ssh --net app-tier -it direvius/yandex-tank

