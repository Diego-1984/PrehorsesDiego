from api.models.db import db
from sqlalchemy.orm import relationship

class Horse(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(1000), nullable=False)
    fecha_nacimiento = db.Column(db.String(1000), nullable=False)
    ganaderia = db.Column(db.String(1000), nullable=False)
    sexo= db.Column(db.String(1000), nullable=False)
    precio= db.Column(db.Integer, nullable=False)
    capa= db.Column(db.String(1000), nullable=False)
    alzada= db.Column(db.String(1000), nullable=False)
    provincia= db.Column(db.String(1000), nullable=False)
    nivel_doma= db.Column(db.String(1000), nullable=False)
    descripcion= db.Column(db.String(1000), nullable=False)
    imagenes= db.Column(db.String(1000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
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
            "imagenes": self.imagenes,
            "user_id": self.user_id,
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
            "imagenes": self.imagenes,
            "user_id": self.user_id,
        }