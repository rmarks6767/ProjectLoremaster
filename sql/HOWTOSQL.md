# How to Install mySQL

Commands: 
```
$ sudo apt update
$ sudo apt install mysql-server -y
$ sudo systemctl enable mysql
$ sudo systemctl start mysql
$ sudo mysql_secure_installation
$ sudo mysql
```
Now after logging into the mysql server and setting the password for root:
```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'very_strong_password';
mysql> FLUSH PRIVILEGES;
```

# Creating the Database
```
mysql> CREATE DATABASE loremaster;
mysql> exit;
```

# Adding the tables to the db

Now go to the /sql folder and run the following:
```
$ mysql -u root -p loremaster > loremaster.sql
password: {Enter the password that was set above for the root here}
```

Now all of the tables are set up!

 
