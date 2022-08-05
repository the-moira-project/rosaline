from sqlmodel import Session, select, or_
from db import engine
from models import *


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def create_heroes():
    hero_1 = Hero(name="Deadpond", secret_name="Dive Wilson")
    hero_2 = Hero(name="Spider-Boy", secret_name="Pedro Parqueador")
    hero_3 = Hero(name="Rusty-Man", secret_name="Tommy Sharp", age=48)
    hero_4 = Hero(name="Tarantula", secret_name="Natalia Roman-on", age=32)
    hero_5 = Hero(name="Black Lion", secret_name="Trevor Challa", age=35)
    hero_6 = Hero(name="Dr. Weird", secret_name="Steve Weird", age=36)
    hero_7 = Hero(name="Captain North America", secret_name="Esteban Rogelios", age=93)

    with Session(engine) as session:
        session.add(hero_1)
        session.add(hero_2)
        session.add(hero_3)
        session.add(hero_4)
        session.add(hero_5)
        session.add(hero_6)
        session.add(hero_7)

        session.commit()


def select_heroes():
    with Session(engine) as session:
        #           = SELECT * FROM Hero
        # statement = select(Hero)
        # results = session.exec(statement)
        # get a list of hero objects
        # heroes = results.all()

        heroes = session.exec(select(Hero)).all()
        print(heroes)


def select_older_heroes():
    with Session(engine) as session:
        older_heroes = session.exec(select(Hero).where(Hero.age > 35))
        for hero in older_heroes:
            print(hero)


def select_heroes_in_30s():
    with Session(engine) as session:
        specific_heroes = session.exec(select(Hero).where(Hero.age >= 30).where(Hero.age <= 40))
        # specific_heroes_alt = session.exec(select(Hero).where(Hero.age >= 30, Hero.age <= 40))
        for hero in specific_heroes:
            print(hero)


def select_youngest_or_oldest_heroes():
    with Session(engine) as session:
        specific_heroes = session.exec(select(Hero).where(or_(Hero.age >= 90, Hero.age <= 35)))
        for hero in specific_heroes:
            print(hero)


def main():
    create_db_and_tables()
    create_heroes()
    select_heroes()
    select_older_heroes()
    select_heroes_in_30s()
    select_youngest_or_oldest_heroes()


if __name__ == "__main__":
    main()
