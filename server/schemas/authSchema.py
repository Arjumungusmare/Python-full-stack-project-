
from pydantic import BaseModel, EmailStr, Field


class SignupRequest(BaseModel):
    name: str = Field(min_length=2)
    email: EmailStr
    password: str = Field(min_length=8)
    confirm_password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str
