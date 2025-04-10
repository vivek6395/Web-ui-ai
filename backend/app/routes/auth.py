from fastapi import APIRouter, HTTPException, Depends
from sqlmodel import Session, select
from app.models.user import User
from app.database import get_session
from app.auth.auth import hash_password, authenticate_user

router = APIRouter()

@router.post("/signup")
def signup(payload: dict, db: Session = Depends(get_session)):
    if db.exec(select(User).where(User.username == payload["username"])).first():
        raise HTTPException(status_code=400, detail="User already exists")
    
    new_user = User(username=payload["username"], password=hash_password(payload["password"]))
    db.add(new_user)
    db.commit()
    return {"message": "Signup successful"}

@router.post("/login")
def login(payload: dict, db: Session = Depends(get_session)):
    user = authenticate_user(db, payload["username"], payload["password"])
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful", "username": user.username}
