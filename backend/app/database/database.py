from sqlmodel import SQLModel, create_engine, Session

DATABASE_URL = "sqlite:///./chat.db"
engine = create_engine(DATABASE_URL, echo=True)

def get_session():
    with Session(engine) as session:
        yield session

def init_db():
    from app.models.session import ChatSession
    SQLModel.metadata.create_all(engine)
