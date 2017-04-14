kill -9 $(ps aux | grep [n]odemon | awk '{print $2}')
kill -9 $(ps aux | grep "[n]ode ./dist" | awk '{print $2}')
