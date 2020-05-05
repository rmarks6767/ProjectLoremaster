# Installing the npm packages

```
$ npm install
```
This will install all of the packages from the package.json file

# Launching the server

```
$ npm start
```
This calls the start script, which is defined as: ```node src/index.js```. The server will then be specified on the given port.

# General "Making a query"
To make a query to this api, simply make a post request to 
```
http://localhost:4000/
```
That post request body will look something like this:
```json
{
    "query":"
        query { 
            account(userName: \"username\", password: \"pa$$word\"){
                name
                userName
                email
            }",
    "variables": null
}
```
The query and variables portion will be replaced with the following spec
# GraphQL Scema Spec
## Account

### ```createAccount```
The query:
```json
{
    "query":"
        mutation($account: accountInput!) {
            createAccount(account:$account) {
                code
                message
            }
        }",
    "variables": {
        "account": {
            "name": "Bob Smith",
            "userName": "bsmith45",
            "email": "example@example.com",
            "password": "pa$$word45",
            "friends": []
        }
    }
}

```
The response:
```json
{
  "data": {
    "createAccount": {
      "code": "200",
      "message": "Successfully inserted data!"
    }
  }
}
```

### ```account```

The query:
```json
{
    "query":"
        query { 
            account(userName: \"bsmith45\", password: \"pa$$word45\"){
                name
                userName
                email
            }
        }",
    "variables": null
}
```
The response:
```json
{
    "data": {
        "account": [
            {
                "name": "Bob Smith",
                "userName": "bsmith45",
                "email": "example@example.com"
            }
        ]
    }
}
```

## Map

### ```createMap```
The query:
```json
{
    "query":"
        mutation($map: mapInput!) {
            createMap(map:$map) {
                code
                message
            }
        }",
    "variables": {
        "map": {
            "name": "map1",
            "imageLink": "map1.png",
            "tiles": [{
                "height": 1,
                "width": 1,
                "x": 0,
                "y": 0,
                "type": "PASSABLE"
            }]
        }
    }
}

```
The response:
```json
{
  "data": {
    "createMap": {
      "code": "200",
      "message": "Successfully inserted data!"
    }
  }
}
```

### ```map```

The query:
```json
{
    "query":"
        query {
            map (id: \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\") {
                name
                imageLink
                tiles {
                    height
                    width
                    x
                    y
                    type
                }
            }
        }",
    "variables": null
}
```
The response:
```json
{
  "data": {
    "map": [
      {
        "name": "map1",
        "imageLink": "/map1.png",
        "tiles": [
          {
            "height": 1,
            "width": 1,
            "x": 0,
            "y": 0,
            "type": "PASSABLE"
          }
        ]
      }
    ]
  }
}
```

# Querying with a "Where" clause
To make querying easier, the where clause is avaiable in the following queries: 
- ```map```
## Where Structure
The structure that the following would interpret would look something like this:
```json
{
    "where": {
        "and": [{
            "or": [{                                    _
                "operator": "EQUALS",   <-- id="42"      | This section
                "property": "id",                        | is the first
                "value": "42"                            | or section that
            },                                           | will be ored
            {                                            | together
                "operator": "EQUALS",   <-- id="44"     _|
                "property": "id",
                "value": "44"
            }]
        },
        {
            "or": [{                                         _
                "operator": "CONTAINS", <-- name LIKE "%map%"_| This will 
                "property": "name",                             be anded
                "value": "map"                                  with the 
            }]                                                  above
        }]                                                      statement
    }
}
```
This translates to 
```SQL
SELECT * FROM maps WHERE ( ( id="42" OR id="44" ) AND name LIKE "%map%" )
```

## Using in a query
The query:
```json
{
    "query":"
        query ($where: AND!) {
            map(where: $where) {
                name
                imageLink
                tiles {
                    height
                    width
                    x
                    y
                    type
                }
            }
        }",
    "variables": {
        "where": {
            "and": [{
                "or": [{
                    "operation": "EQUALS",
                    "value": "map1",
                    "property": "name"
                }]
            }]
        }
    }
}
```
The response:
```json
{
  "data": {
    "map": [
      {
        "name": "map1",
        "imageLink": "/map1.png",
        "tiles": []
      },
      {
        "name": "map1",
        "imageLink": "/map1.png",
        "tiles": [
          {
            "height": 1,
            "width": 1,
            "x": 0,
            "y": 0,
            "type": "PASSABLE"
          }
        ]
      },
      {
        "name": "map1",
        "imageLink": "/map1.png",
        "tiles": []
      },
      ... more results in array
  }
}
```

# Current Roadmap to MVP
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

