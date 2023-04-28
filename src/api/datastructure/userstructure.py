from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.db import db
from api.models.user import User
from flask_jwt_extended import get_jwt_identity, jwt_required, JWTManager, create_access_token

class UserStructure:
    def verify_user_email(email):
            user_duplicated = User.query.filter_by(email = email).first()
            return user_duplicated

    def add_user(name, email, password):
        user = User(name = name, email = email, password = password)
        db.session.add(user)
        db.session.commit()
        response_body = { 
            "message": "Usuario agregado" }
        return jsonify(response_body)  
        
    def login_user(email, password):
        try:
            # Consulta la base de datos por el nombre de usuario y la contraseña
            user = User.query.filter_by(email = email, password = password).first()
            if User is None:
                # el usuario no se encontró en la base de datos
                return jsonify({"msg": "Email o contraseña incorrectos"}), 401

            # crea un nuevo token con el id de usuario dentro
            access_token = create_access_token(identity = user.id)
            return jsonify({ "token": access_token}), 200
        except Exception as e:
            return jsonify({"error": "Petición incorrecta"}), 400

    def modify_user(id, name, password): 
        user_actualizado = User.query.filter_by(id = id).first()
       
        user_actualizado.name =  name if name is not None else user_actualizado.name 
        user_actualizado.password =  password if password is not None else user_actualizado.password 

        db.session.commit()
        return user_actualizado

    def delete_user(id):
        user = User.query.filter_by(id = id).first()
        db.session.delete(user)
        db.session.commit()
        response_body = {
            "message": "Usuario eliminado"
        }
        return response_body

    def get_all_users():
        return jsonify([user.serialize() for user in User.query.all()]), 200
