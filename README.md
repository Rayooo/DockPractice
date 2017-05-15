# DockerPractice

[Docker基本操作](Docker基本操作)

[docker-compose操作](compose/compose基本命令)

### 坑点

1.mysql 的dockerfile build 后 run 之后手动修改其root登陆权限

```shell
$ docker exec -it <容器id> mysql -u root -p
或
$ docker exec -it <容器id> /bin/bash
$ mysql -u root -p 
$ <password>

然后

mysql> update user set host=’%’ where user=’root’ and host=’localhost’
mysql> flush privileges;
```

如果还是有问题，检查/etc/mysql/my.cnf 文件，这里可能会存在一个bind-ip，把它注释掉

```shell
#skip-networking
#bind-address                   = 127.0.0.1
```

2.nginx需要代理宿主机的端口而不是localhost，nginx容器的localhost指自己，所以得用docker inspect <容器id> 来查看一下宿主机ip，可以在Gateway中看到宿主机ip