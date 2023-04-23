from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.db import db
from api.models.user import User

class UserStructure:
    def add_user(name, email, password):
        user = User(name = name, email = email, password = password)
        db.session.add(user)
        db.session.commit()
        return user
        
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

    def modify_user(id):
        try:
            current_user_id = get_jwt_identity()
            user = User.filter.get(current_user_id)

            if current_user_id!=id:
                return jsonify({"message": "Acceso no permitido"}), 401

        except:
            return jsonify({"error": e}), 404

        user_actualizado = User.query.filter_by(id = id).first()

        user_actualizado.name =request.json.get('name', user.name)
        user_actualizado.email = request.json.get('email', user.email)
        user_actualizado.password = request.json.get('password', user.password)

        db.session.commit()
        response_body = {
            "message": "Cambios realizados correctamente"
        }
        return jsonify(user_actualizado, response_body), 200

    def delete_user(id):
        user = User.query.filter_by(id = id).first()
        db.session.delete(user)
        db.session.commit()
        response_body = {
            "message": "Usuario eliminado"
        }
        return jsonify(response_body), 200

    def get_all_users():
        return jsonify([user.serialize() for user in User.query.all()]), 200