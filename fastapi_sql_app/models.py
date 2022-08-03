from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

# models inherit from db Base class
class User(Base):
    # __tablename__ is sqlalchemy attribute for assigning the table name
    __tablename__ = "users"

    # model attributes, Column(...) represents a single column
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

    # sqlalchemy.orm provides relationship mapping
    # items = list of "Item" sqlalchemy models with a fk pointing to this user aka "owner"
    items = relationship("Item", back_populates="owner")


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")