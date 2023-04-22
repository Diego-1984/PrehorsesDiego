from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Horse

class HorseStructure:
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

    def modify_horse(id, user_id):
        try:
            current_user_id = get_jwt_identity()
            user = User.filter.get(current_user_id)

            if current_user_id != user_id:
                return jsonify({"message": "Acceso no permitido"}), 401

        except:
            return jsonify({"error": e}), 404

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
        return jsonify(horse_actualizado, response_body), 200

    def delete_horse(id):
        try:
            current_user_id = get_jwt_identity()
            user = User.filter.get(current_user_id)
        except:
            return jsonify({"error": e}), 404

        horse = Horse.query.filter_by(id = id).first()
        db.session.delete(horse)
        db.session.commit()
        response_body={
            "message": "Caballo eliminado"
        }
        return jsonify(response_body), 200

    def get_especific_horse(id):
        horse = Horse.query.filter_by(id = id).first().serialize()
        return jsonify(horse), 200

    def get_all_horses():
        return jsonify([horse.serialize() for horse in Horse.query.all()]), 200