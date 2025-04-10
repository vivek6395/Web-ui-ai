from fastapi import APIRouter, Request, Depends
from sqlmodel import select
from uuid import uuid4
from app.models.session import ChatMessage, ChatSession
from app.database import get_session
from sqlmodel import Session as DBSession

router = APIRouter()

@router.post("/chat")
def chat_endpoint(request: Request, payload: dict, db: DBSession = Depends(get_session)):
    user_message = payload.get("message")
    session_id = payload.get("session_id")

    if not session_id:
        session_id = str(uuid4())
        db.add(ChatSession(session_id=session_id))
        db.commit()

    db.add(ChatMessage(session_id=session_id, sender="user", message=user_message))
    db.add(ChatMessage(session_id=session_id, sender="bot", message=f"Echo: {user_message}"))
    db.commit()

    return {"response": f"Echo: {user_message}", "session_id": session_id}
