from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.db import db
from api.models.horse import Horse

class HorseStructure:
    def add_horse(nombre, fecha_nacimiento, ganaderia,
    sexo, precio, capa, alzada, provincia,
    nivel_doma, descripcion, imagenes, dueño):
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
        return response_body

    def modify_horse(id, user_id):
        horse_actualizado = Horse.query.filter_by(id = id).first()

        horse_actualizado.nombre = request.json.get('nombre', horse.nombre)
        horse_actualizado.fecha_nacimiento = request.json.get('fecha_nacimiento', horse.fecha_nacimiento)
        horse_actualizado.ganaderia = request.json.get('ganaderia', horse.ganaderia)
        horse_actualizado.sexo = request.json.get('sexo', horse.sexo)
        horse_actualizado.precio = request.json.get('precio', horse.precio)
        horse_actualizado.capa = request.json.get('capa', horse.capa)
        horse_actualizado.alzada = request.json.get('alzada', horse.alzada)
        horse_actualizado.provincia = request.json.get('provincia', horse.provincia)
        horse_actualizado.nivel__doma = request.json.get('nivel_doma', horse.nivel__doma)
        horse_actualizado.descripcion = request.json.get('descripcion', horse.descripcion)
        horse_actualizado.imagenes = request.json.get('imagenes', horse.imagenes)
        horse_actualizado.dueño = horse.current_user_id

        db.session.commit()
        response_body={
            "message": "Caballo modificado correctamente"
        }
        return response_body

    def delete_horse(id):
        horse = Horse.query.filter_by(id = id).first()
        db.session.delete(horse)
        db.session.commit()
        response_body={
            "message": "Caballo eliminado"
        }
        return response_body

    def get_especific_horse(id):
        horse = Horse.query.filter_by(id = id).first().serialize()
        return horse

    def get_all_horses():
        return [horse.serialize() for horse in Horse.query.all()]