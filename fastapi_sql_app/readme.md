# file structure
```
└── fastapi_sql_app
    ├── __init__.py
    ├── crud.py
    ├── database.py
    ├── main.py
    ├── models.py
    └── schemas.py
```  
# __init__.py

this is just an empty file that tells python ```fastapi_sql_app``` and all contained modules are a single package

# crud.py

# database.py

define the specific configurations for the database engine / type. this example uses sqlite as the engine, but can easily be modified for use with mariadb, postgresql, mysql, etc.

# main.py

# models.py and schemas.py

the file models.py contains the SQLAlchemy models used to construct the database tables. the file schemas.py with the Pydantic models is used to define common attributes while creating or reading data.  

some things can be omitted from the pydantic models, such as passwords or other sensitive info.




### alembic

[alembic](https://alembic.sqlalchemy.org/en/latest/) is commonly used to init a db and for migrations