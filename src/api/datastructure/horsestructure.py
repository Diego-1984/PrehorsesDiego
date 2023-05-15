from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.db import db
from api.models.horse import Horse

class HorseStructure:
    def add_horse(nombre, fecha_nacimiento, ganaderia,
    sexo, precio, capa, alzada, provincia,
    nivel_doma, descripcion, imagenes, user_id):
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
            imagenes = imagenes, 
            user_id = user_id)

        db.session.add(horse)
        db.session.commit()
        response_body={
            "message": "Caballo agregado"
        }
        return response_body

    def modify_horse(id, nombre, fecha_nacimiento,
    ganaderia,
    sexo,
    precio,
    capa,
    alzada,
    provincia,
    nivel_doma,
    descripcion,
    imagenes):
        horse_actualizado = Horse.query.filter_by(id = id).first()

        horse_actualizado.nombre =  nombre if nombre is not None else horse_actualizado.nombre 
        horse_actualizado.fecha_nacimiento =  fecha_nacimiento if fecha_nacimiento is not None else horse_actualizado.fecha_nacimiento
        horse_actualizado.ganaderia =  ganaderia if ganaderia is not None else horse_actualizado.ganaderia 
        horse_actualizado.sexo =  sexo if sexo is not None else horse_actualizado.sexo 
        horse_actualizado.precio =  precio if precio is not None else horse_actualizado.precio 
        horse_actualizado.capa =  capa if capa is not None else horse_actualizado.capa 
        horse_actualizado.alzada =  alzada if alzada is not None else horse_actualizado.alzada 
        horse_actualizado.provincia =  provincia if provincia is not None else horse_actualizado.provincia 
        horse_actualizado.nivel_doma =  nivel_doma if nivel_doma is not None else horse_actualizado.nivel_doma 
        horse_actualizado.descripcion =  descripcion if descripcion is not None else horse_actualizado.descripcion 
        horse_actualizado.imagenes =  imagenes if imagenes is not None else horse_actualizado.imagenes  

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

    def get_especific_horse(id, current_user_id):
        horse = Horse.query.filter_by(id = id).first()
        if horse.user_owner_id == current_user_id:
            return horse.serialize()
        else:
            return horse.serialize_not_owner()

    def get_my_horses(user_owner_id):
        horses = Horse.query.filter(Horse.user_id == user_owner_id).all()
        return [horse.serialize() for horse in horses]

    def get_all_horses(user_owner_id):
        horses = Horse.query.filter(Horse.user_id != user_owner_id).all()
        return [horse.serialize() for horse in horses]