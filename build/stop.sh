kill -9 $(ps aux | grep [n]odemon | awk '{print $2}')
