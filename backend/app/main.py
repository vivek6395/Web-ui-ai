from app.routes import chat
from app.routes import auth  # ✅ add this
import app

app.include_router(chat.router)
app.include_router(auth.router)  # ✅ register auth routes
