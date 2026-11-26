
from sqlalchemy.orm import Session
from models.User import User
from security import hash_password, verify_password


def signup_controller(data, db: Session):
    if data.password != data.confirm_password:
        return {"message": "Passwords do not match"}

    existing_user = db.query(User).filter(User.email == data.email).first()

    if existing_user:
        return {"message": "Email already registered"}

    hashed_password = hash_password(data.password)

    new_user = User(
        name=data.name,
        email=data.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "Signup successful",
        "user_id": new_user.id,
        "name": new_user.name,
        "email": new_user.email
    }


def login_controller(data, db: Session):
    user = db.query(User).filter(User.email == data.email).first()

    if not user:
        return {"message": "Invalid email or password"}

    if not verify_password(data.password, user.password):
        return {"message": "Invalid email or password"}

    return {
        "message": "Login successful",
        "user_id": user.id,
        "name": user.name,
        "email": user.email
    }
