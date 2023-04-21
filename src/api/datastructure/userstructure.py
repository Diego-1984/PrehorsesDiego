
class UserStructure:
    def add_user():
        name = request.json.get('name', None)
        email = request.json.get('email', None)
        password = request.json.get('password', None)

        user = User(name = name, email = email, password = password)
        db.session.add(user)
        db.session.commit()
        response_body={
            "message": "Usuario agregado"
        }
        return jsonify(response_body), 200
        
    def login_user():
        try:
            email = request.json.get("email")
            password = request.json.get("password")
            # Consulta la base de datos por el nombre de usuario y la contraseña
            user = User.query.filter_by(email = email, password = password).first()
            if User is None:
                # el usuario no se encontró en la base de datos
                return jsonify({"msg": "Email o contraseña incorrectos"}), 401

            # crea un nuevo token con el id de usuario dentro
            access_token = create_access_token(identity = user.id)
            return jsonify({ "token": access_token}), 200
        except Exception as e:
            return jsonify({"error": e}), 400
