from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.db import db
from api.models.ganaderia import Ganaderia

class GanaderiaStructure:
    def add_ganaderia(nombre):
        ganaderia=Ganaderia(nombre= nombre)
           
        db.session.add(ganaderia)
        db.session.commit()
        response_body={
            "message": "Ganadería agregada"
        }
        return response_body
        

    def get_all_ganaderias():
        return [ganaderia.serialize() for ganaderia in Ganaderia.query.all()]