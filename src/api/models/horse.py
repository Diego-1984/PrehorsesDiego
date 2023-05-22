from api.models.db import db
from sqlalchemy.orm import relationship

class Horse(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(1000))
    fecha_nacimiento = db.Column(db.String(1000))
    ganaderia = db.Column(db.String(1000))
    sexo= db.Column(db.String(1000))
    precio= db.Column(db.Integer)
    capa= db.Column(db.String(1000))
    alzada= db.Column(db.String(1000))
    provincia= db.Column(db.String(1000))
    nivel_doma= db.Column(db.String(1000))
    descripcion= db.Column(db.String(1000))
    img= db.Column(db.String(1000))
    imagenes= db.Column(db.String(1000))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_owner = db.relationship('User', foreign_keys=[user_id])
    messages = relationship('Message', backref='message')

    def __repr__(self):
        return f'<Horse {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "fecha_nacimiento": self.fecha_nacimiento,
            "ganaderia": self.ganaderia,
            "sexo": self.sexo,
            "precio": self.precio,
            "capa": self.capa,
            "alzada": self.alzada,
            "provincia": self.provincia,
            "nivel_doma": self.nivel_doma,
            "descripcion": self.descripcion,
            "img": self.img,
            "imagenes": self.imagenes,
            "user_id": self.user_id,
            "userOwner": self.user_owner.serialize(),
            'messages' : [message.serialize() for message in self.messages]
        }

    def serialize_not_owner(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "fecha_nacimiento": self.fecha_nacimiento,
            "ganaderia": self.ganaderia,
            "sexo": self.sexo,
            "precio": self.precio,
            "capa": self.capa,
            "alzada": self.alzada,
            "provincia": self.provincia,
            "nivel_doma": self.nivel_doma,
            "descripcion": self.descripcion,
            "img": self.img,
            "imagenes": self.imagenes,
            "user_id": self.user_id,
            "userOwner": self.user_owner.serialize(),
        }