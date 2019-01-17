# Start from official MySQL image
From mysql:5.7.21

# Add typorm test user
ENV MYSQL_ALLOW_EMPTY_PASSWORD=true \
    MYSQL_DATABASE=test \
    MYSQL_USER=test \
    MYSQL_PASSWORD=test

ADD initdb.sh /docker-entrypoint-initdb.d/
ADD mysql.cnf /etc/mysql/conf.d/

EXPOSE 3306
