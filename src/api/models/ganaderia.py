from api.models.db import db

class Ganaderia(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    
    def __repr__(self):
        return f'<Ganaderia {self.nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,            
        }