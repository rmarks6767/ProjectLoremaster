# Project Loremaster
A complete DND campaign management system designed to be put into a table and be used with a monitor.

# To Do:

## Frontend

## Backend
The backend consists of several parts, a C# GraphQL campaign management system and a NodeJS GraphQL map and account creaton system.  All will be connected through a centralized GraphQL layer that orcestrates queries and mutations to a frontend web application.

### NodeJS to do:
- [x] Create generation for unique uuids for every element in the db
- [ ] Redesign SQL to be more coherent and actually relate to eachother
- [ ] Add command line args 
    - [ ] ```--verbose / -v```
    - [ ] ```-dev / -prod``` 
- [ ] Add ordering and pagination to the Where clause
- [ ] Map functions
    - [x] Query  Map successfully
    - [x] Create Map successfully
    - [ ] Update Map successfully
    - [ ] Delete Map successfully
    - [ ] Subscription for map updates
- [ ] Account functions
    - [x] Query  Account successfully
    - [x] Create Account successfully
    - [ ] Update Account successfully
    - [ ] Delete Account successfully
    - [ ] Friending people in Account
	- [ ] Add friends
 	    - [ ] Friend Requests ( w/ denial + acceptance ) 
	- [ ] Remove friends
	- [ ] 
### C# to do: 
