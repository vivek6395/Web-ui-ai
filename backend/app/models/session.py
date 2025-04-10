from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

class ChatSession(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    session_id: str = Field(index=True, unique=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ChatMessage(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    session_id: str = Field(index=True)
    sender: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
