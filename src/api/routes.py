"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity, jwt_required, JWTManager
from api.datastructure.userstructure import UserStructure
from api.datastructure.horsestructure import HorseStructure


api = Blueprint('api', __name__)


@api.route('/user', methods=['POST'])
def new_user():
    """Agregar un nuevo usuario
    ---
    description: Agregar un nuevo usuario
    "parameters": [
        {
            "name": "body",
            "in": "body",
            "required": "true",
            "type": "object"
        }
    ]
    """
    name = request.json.get('name', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    is_userEmail_duplicated = UserStructure.verify_userEmail(email)

    if(is_userEmail_duplicated is None):
        user_added= UserStructure.add_user(name, email, password)
        return user_added, 200 
    else:
       response_body={
            "message": "Este email ya existe, por favor escoja otro"
        }
    return jsonify(response_body), 409

@api.route('/user/login', methods=['POST'])
def init_user():
    """Logear un usuario
    ---
    description: Logear un usuario. No estoy segura de esta refactorización
    "parameters": [
        {
            "name": "body",
            "in": "body",
            "required": "true",
            "type": "object"
        }
    ]
    """
    email = request.json.get("email")
    password = request.json.get("password")
    login_user = UserStructure.login_user(email, password)
    return login_user

@api.route('/user', methods=['GET'])
def get_users():
    """Ver todos los usuarios
    ---
    description: Ver todos los usuarios
    "parameters": [
        {
            "name": "body",
            "in": "body",
            "required": "true",
            "type": "object"
        }
    ]
    """
    all_users = UserStructure.get_all_users()
    return all_users

@api.route('/user/<int:id>', methods=['PUT'])
@jwt_required()
def edit_user(id):
    """Editar un usuario
    ---
    description: Editar un usuario. No estoy segura de esta refactorización
    "parameters": [
        {
            "name": "body",
            "in": "body",
            "required": "true",
            "type": "object"
        }
    ]
    """
    try:
        current_user_id = get_jwt_identity()
        user = User.filter.get(current_user_id)

        if current_user_id!=id:
            return jsonify({"message": "Acceso no permitido"}), 401
    except:
        return jsonify({"error": e}), 404

    modify_user = UserStructure.modify_user(id)
    return jsonify(modify_user), 200

@api.route('/user/delete/<int:id>', methods=['DELETE'])
def delete_one_user(id):
    """Eliminar un usuario
    ---
    description: Eliminar un usuario
    "parameters": [
        {
            "name": "body",
            "in": "body",
            "required": "true",
            "type": "object"
        }
    ]
    """
    deleted_user = UserStructure.delete_user(id)
    return jsonify(deleted_user), 200

@api.route('/horse', methods=['GET'])
def get_horses():
    """Ver todos los caballos
    ---
    description: Ver todos los caballos
    "parameters": [
        {
            "name": "body",
            "in": "body",
            "required": "true",
            "type": "object"
        }
    ]
    """
    all_horses = HorseStructure.get_all_horses()
    return jsonify(all_horses), 200


@api.route('/horse', methods=['POST'])
@jwt_required()
def add_horse():
    """Agregar nuevo caballo
    ---
    description: Agregar nuevo caballo
    "parameters": [
        {
            "name": "body",
            "in": "body",
            "required": "true",
            "type": "object"
        }
    ]
    """
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

    add_horse = HorseStructure.add_horse(nombre, 
    fecha_nacimiento, ganaderia,
    sexo, precio, capa, alzada,
    provincia, nivel__doma, descripcion,
    imagenes, dueño)

    return jsonify(add_horse), 200


@api.route('/horse/<int:id>', methods=['PUT'])
@jwt_required()
def edit_horse(id):
    """Editar un caballo
    ---
    description: Editar un caballo. Tampoco estoy segura de esta refactorización
    "parameters": [
        {
            "name": "body",
            "in": "body",
            "required": "true",
            "type": "object"
        }
    ]
    """
    try:
        current_user_id = get_jwt_identity()
        user = User.filter.get(current_user_id)

        if current_user_id != user_id:
            return jsonify({"message": "Acceso no permitido"}), 401

    except:
        return jsonify({"error": e}), 404

    modify_horse = HorseStructure.modify_horse(id, user_id)
    return jsonify(modify_horse), 200
    

@api.route('/horse/<int:id>', methods=['DELETE'])
@jwt_required()
def eliminate_horse(id):
    """Eliminar un caballo
    ---
    description: Eliminar un caballo
    "parameters": [
        {
            "name": "body",
            "in": "body",
            "required": "true",
            "type": "object"
        }
    ]
    """
    try:
        current_user_id = get_jwt_identity()
        user = User.filter.get(current_user_id)
    except:
        return jsonify({"error": e}), 404
    delete_horse = HorseStructure.delete_horse(id)
    return jsonify(delete_horse), 200


@api.route('/horse/<int:id>', methods=['GET'])
@jwt_required()
def get_horse(id):
    """Ver un caballo determinado
    ---
    description: Ver un caballo determinado
    "parameters": [
        {
            "name": "body",
            "in": "body",
            "required": "true",
            "type": "object"
        }
    ]
    """
    get_specific_horse = HorseStructure.get_especific_horse(id)
    return jsonify(get_especific_horse),200
