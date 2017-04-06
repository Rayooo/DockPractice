### Docker基本操作

部署一个tomcat作为例子

网易镜像中心，推荐使用这个镜像https://c.163.com/hub#/m/home/

1.拉取镜像   $ docker pull hub.c.163.com/library/tomcat:latest   或者   docker pull hub.c.163.com/library/tomcat:8.0.42-jre8

2.然后输入$ docker images 查看本地镜像（我拉了tomcat:8.0.42-jre8）可以运行docker run -it <容器id> /bin/bash 进入交互式终端查看镜像内部信息

3.将本地镜像跑起来  $ docker run -d -p 80:8080 hub.c.163.com/library/tomcat:8.0.42-jre8   （-d代表的是后台（daemon）运行， -p代表端口映射，将docker容器中的8080端口映射到本机80端口）

4.查看容器id   $ docker ps 

| CONTAINER ID | IMAGE                                    | COMMAND           | CREATED       | STATUS       | PORTS    | NAMES           |
| ------------ | ---------------------------------------- | ----------------- | ------------- | ------------ | -------- | --------------- |
| 7bb129c2d687 | hub.c.163.com/library/tomcat:8.0.42-jre8 | "catalina.sh run" | 5 seconds ago | Up 2 seconds | 8080/tcp | hopeful_murdock |

5.进入容器，查看这个镜像的一些状态 $ docker exec -it 7bb129 /bin/bash   (格式是 docker exec -ti <container name> /bin/bash   -i代表interactive   -t代表tty)

6.查看Linux版本 $ cat /etc/*-release

7.此镜像tomcat位于/usr/local/tomcat

8.退出Ctrl + D

9.停止容器，删除容器 $docker stop <容器id>，$ docker rm <容器id>

10.删除镜像 $docker rmi <镜像id>

11.换源

```shell
RUN cp /etc/apt/sources.list /etc/apt/sources.list.bac && \
    echo "deb http://mirrors.163.com/debian/ jessie main non-free contrib" > /etc/apt/sources.list && \
    echo "deb http://mirrors.163.com/debian/ jessie-updates main non-free contrib" >> /etc/apt/sources.list && \
    echo "deb http://mirrors.163.com/debian/ jessie-backports main non-free contrib" >> /etc/apt/sources.list && \
    echo "deb-src http://mirrors.163.com/debian/ jessie main non-free contrib" >> /etc/apt/sources.list && \
    echo "deb-src http://mirrors.163.com/debian/ jessie-updates main non-free contrib" >> /etc/apt/sources.list && \
    echo "deb-src http://mirrors.163.com/debian/ jessie-backports main non-free contrib" >> /etc/apt/sources.list && \
    echo "deb http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib" >> /etc/apt/sources.list && \
    echo "deb-src http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib" >> /etc/apt/sources.list

```

12.装Maven

```shell
RUN apt-get update && \  
	apt-get install -y maven
```

13.编写Dockerfile

14.build镜像 $ docker build -t appserver .  (注意这个.  代表单当前目录，-t 代表镜像名称，appserver需要全部小写)

15.然后就可以通过docker ps，然后docker run 映射80端口可以跑应用了