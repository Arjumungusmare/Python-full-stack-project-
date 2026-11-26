
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from schemas.authSchema import SignupRequest, LoginRequest
from controllers.authController import signup_controller, login_controller
from config.db import get_db

router = APIRouter()


@router.post("/signup")
def signup(data: SignupRequest, db: Session = Depends(get_db)):
    return signup_controller(data, db)


@router.post("/login")
def login(data: LoginRequest, db: Session = Depends(get_db)):
    return login_controller(data, db)
