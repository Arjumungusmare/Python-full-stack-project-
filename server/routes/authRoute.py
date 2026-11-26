
from fastapi import APIRouter
from schemas.authSchema import SignupRequest, LoginRequest
from controllers.authController import signup_controller, login_controller

router = APIRouter()


@router.post("/signup")
def signup(data: SignupRequest):
    return signup_controller(data)


@router.post("/login")
def login(data: LoginRequest):
    return login_controller(data)
