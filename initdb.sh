#!/bin/bash

mysql -u root -e "CREATE DATABASE IF NOT EXISTS staging"

mysql -u root -e "CREATE USER 'staging_user'@'%' IDENTIFIED BY 'staging_password'"

mysql -u root -e "GRANT ALL PRIVILEGES ON staging.* TO 'staging_user'@'%'"
