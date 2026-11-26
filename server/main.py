
from fastapi import FastAPI
from routes.authRoute import router as auth_router

app = FastAPI()

app.include_router(auth_router, prefix="/api/auth")


@app.get("/")
def home():
    return {"message": "Welcome to Blogify API"}
