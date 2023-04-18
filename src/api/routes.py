"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/user', methods=['POST'])
def add_user():
    # implementation
    pass

@api.route('/horse', methods=['GET'])
def get_all_horses():
    # implementation
    pass

@api.route('/horse', methods=['POST'])
def add_horse():
    # implementation
    pass

@api.route('/horse/<int:id>', methods=['GET'])
def get_horse(id):
    # implementation
    pass