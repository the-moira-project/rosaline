from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"


engine = create_engine(
    # connect_args={"check_same_thread": False} is only for sqlite
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# instance of SessionLocal is a database session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# orm models or classes inherit from Base class
Base = declarative_base()