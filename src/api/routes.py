"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Horse
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity, jwt_required, JWTManager
from api.datastructure.userstructure import UserStructure
from api.datastructure.horsestructure import HorseStructure

api = Blueprint('api', __name__)

@api.route('/user', methods=['POST'])
def new_user():
   add_user = UserStructure.add_user()
   return jsonify(add_user),200


@api.route('/user/login', methods=['POST'])
def init_user():
    login_user = UserStructure.login_user()
    return jsonify(login_user), 200


@api.route('/horse', methods=['GET'])
def get_all_horses():
    return jsonify([horse.serialize() for horse in Horse.query.all()]), 200

@api.route('/user', methods=['GET'])
def get_all_users():
    return jsonify([user.serialize() for user in User.query.all()]), 200

@api.route('/user/<int:id>', methods=['PUT'])
@jwt_required()
def edit_user():
    modify_user = UserStructure.modify_user(id)
    return jsonify(modify_user), 200


@api.route('/user/delete/<int:id>', methods=['DELETE'])
def delete_one_user():
    deleted_user = UserStructure.delete_user(id)

@api.route('/horse', methods=['POST'])
@jwt_required()
def add_horse():
    add_horse = HorseStructure.add_horse()
    return jsonify(add_horse), 200


@api.route('/horse/<int:id>', methods=['PUT'])
@jwt_required()
def edit_horse():
    modify_horse = HorseStructure.modify_horse()
    return jsonify (modify_horse()), 200
    

@api.route('/horse/<int:id>', methods=['DELETE'])
@jwt_required()
def eliminate_horse():
        delete_horse = HorseStructure.delete_horse()
        return jsonify (delete_horse()), 200


@api.route('/horse/<int:id>', methods=['GET'])
@jwt_required()
def get_horse(id):
    get_specific_horse = HorseStructure.get_especific_horse(id)
    return jsonify (get_especific_horse),200