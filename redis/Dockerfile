FROM hub.c.163.com/library/redis:latest
ENV REDIS_PASSWORD=defaultPassword
CMD ["sh", "-c", "exec redis-server --requirepass \"$REDIS_PASSWORD\" "]
