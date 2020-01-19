#/bin/bash
MY_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

# "username": "root",
# "password": "JS123$$$",
# "database": "asianfoodlegit2",
# "host": "127.0.0.1",
# "port": 3306,
# "dialect": "mysql"

docker stop asianfoodlegitdb | true
docker rm -f asianfoodlegitdb | true

docker run --name asianfoodlegitdb \
           -p 3306:3306 \
           -e MYSQL_ROOT_PASSWORD='JS123$$$' \
           -e MYSQL_DATABASE='asianfoodlegit2' \
           -d \
           mysql:8
#            bitflipsoftware/blazetest:v001

# MYSQL_ROOT_PASSWORD
# MYSQL_DATABASE
# MYSQL_USER
# MYSQL_PASSWORD

# Do note that there is no need to use this mechanism to create the root superuser, that user gets created by default with the password specified by the MYSQL_ROOT_PASSWORD variable.