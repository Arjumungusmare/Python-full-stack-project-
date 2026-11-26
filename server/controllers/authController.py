
def signup_controller(data):
    name = data.name
    email = data.email
    password = data.password
    confirm_password = data.confirm_password

    if password != confirm_password:
        return {
            "message": "Passwords do not match"
        }

    return {
        "message": "Signup data received successfully",
        "name": name,
        "email": email
    }


def login_controller(data):
    email = data.email
    password = data.password

    return {
        "message": "Login data received successfully",
        "email": email
    }
