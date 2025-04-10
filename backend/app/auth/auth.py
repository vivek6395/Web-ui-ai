from passlib.context import CryptContext
from sqlmodel import Session, select
from app.models.user import User

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(password: str, hashed: str):
    return pwd_context.verify(password, hashed)

def authenticate_user(db: Session, username: str, password: str):
    user = db.exec(select(User).where(User.username == username)).first()
    if user and verify_password(password, user.password):
        return user
    return None
