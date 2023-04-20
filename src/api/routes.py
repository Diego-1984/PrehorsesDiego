"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)

@api.route('/user', methods=['POST'])
def add_user():
    name = request.json.get('name', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    user=User(name= name, email=email, password=password)
    db.session.add(user)
    db.session.commit()
    response_body={
        "message": "Usuario agregado"
    }
    return jsonify(response_body), 200


@api.route('/user/login', methods=['POST'])
def login_user():
    try:
        email = request.json.get("email")
        password = request.json.get("password")
        # Consulta la base de datos por el nombre de usuario y la contraseña
        user = User.query.filter_by(email=email, password=password).first()
        if User is None:
            # el usuario no se encontró en la base de datos
            return jsonify({"msg": "Email o contraseña incorrectos"}), 401

        # crea un nuevo token con el id de usuario dentro
        access_token = create_access_token(identity=user.id)
        return jsonify({ "token": access_token}), 200
    except Exception as e:
        return jsonify({"error": e}), 400


@api.route('/horse', methods=['GET'])
def get_all_horses():
    return jsonify([horse.serialize() for horse in Horse.query.all()]), 200

@api.route('/user', methods=['GET'])
def get_all_userss():
    return jsonify([user.serialize() for user in User.query.all()]), 200


@api.route('/user/<int:id>', methods=['PUT'])
@jwt_required()
def modify_user(id):
    try:
        current_user_id = get_jwt_identity()
        user = User.filter.get(current_user_id)

        if current_user_id!=id:
            return jsonify({"message": "Acceso no permitido"}), 401

    except:
        return jsonify({"error": e}), 404

    user_actualizado= User.query.filter_by(id=id).first()

    user_actualizado.name=request.json.get('name', user.name)
    user_actualizado.email= request.json.get('email', user.email)
    user_actualizado.password= request.json.get('password', user.password)

    db.session.commit()
    response_body={
        "message": "Cambios realizados correctamente"
    }
    return jsonify(user_actualizado, response_body), 200


@api.route('/horse', methods=['POST'])
@jwt_required()
def add_horse():
    current_user_id = get_jwt_identity()
    user = User.filter.get(current_user_id)

    nombre = request.json.get('nombre', None)
    fecha_nacimiento = request.json.get('fecha_nacimiento', None)
    ganaderia = request.json.get('ganaderia', None)
    sexo= request.json.get('sexo', None)
    precio= request.json.get('precio', None)
    capa= request.json.get('capa', None)
    alzada= request.json.get('alzada', None)
    provincia= request.json.get('provincia', None)
    nivel__doma= request.json.get('nivel_doma', None)
    descripcion= request.json.get('descripcion', None)
    imagenes= request.json.get('imagenes', None)
    dueño = current_user_id

    horse=Horse(nombre= nombre,
        fecha_nacimiento=fecha_nacimiento,
        ganaderia=ganaderia,
        sexo=sexo,
        precio=precio,
        capa=capa,
        alzada=alzada,
        provincia=provincia,
        nivel_doma=nivel_doma,
        descripcion=descripcion,
        imagenes=imagenes,
        dueño= dueño)

    db.session.add(horse)
    db.session.commit()
    response_body={
        "message": "Caballo agregado"
    }
    return jsonify(response_body), 200


@api.route('/horse/<int:id>', methods=['PUT'])
@jwt_required()
def modify_horse(id, user_id):
    try:
        current_user_id = get_jwt_identity()
        user = User.filter.get(current_user_id)

        if current_user_id!=user_id:
            return jsonify({"message": "Acceso no permitido"}), 401

    except:
        return jsonify({"error": e}), 404


    horse_actualizado= Horse.query.filter_by(id=id).first()

    horse_actualizado.nombre = request.json.get('nombre', horse.nombre)
    horse_actualizado.fecha_nacimiento = request.json.get('fecha_nacimiento', horse.fecha_nacimiento)
    horse_actualizado.ganaderia = request.json.get('ganaderia', horse.ganaderia)
    horse_actualizado.sexo= request.json.get('sexo', horse.sexo)
    horse_actualizado.precio= request.json.get('precio', horse.precio)
    horse_actualizado.capa= request.json.get('capa', horse.capa)
    horse_actualizado.alzada= request.json.get('alzada', horse.alzada)
    horse_actualizado.provincia= request.json.get('provincia', horse.provincia)
    horse_actualizado.nivel__doma= request.json.get('nivel_doma', horse.nivel__doma)
    horse_actualizado.descripcion= request.json.get('descripcion', horse.descripcion)
    horse_actualizado.imagenes= request.json.get('imagenes', horse.imagenes)
    horse_actualizado.dueño= horse.dueño

    db.session.commit()
    response_body={
        "message": "Caballo modificado correctamente"
    }
    return jsonify(horse_actualizado, response_body), 200


@api.route('/horse/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_horse(id):
    try:
        current_user_id = get_jwt_identity()
        user = User.filter.get(current_user_id)
    except:
        return jsonify({"error": e}), 404

    horse= Horse.query.filter_by(id=id).first()
    db.session.delete(horse)
    db.session.commit()
    response_body={
        "message": "Caballo eliminado"
    }
    return jsonify(response_body), 200


@api.route('/horse/<int:id>', methods=['GET'])
@jwt_required()
def get_horse(id):
    horse= Horse.query.filter_by(id=id).first()
    return jsonify(horse), 200