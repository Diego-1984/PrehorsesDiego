from api.models.db import db
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

class Message(db.Model):
    __tablename__ = 'message'
    id = Column(Integer, primary_key=True)
    message = Column(String(250))
    horse_id = Column(Integer, ForeignKey('horse.id'))
    user_owner_id = Column(Integer, ForeignKey('user.id'))
    user_interested_id = Column(Integer, ForeignKey('user.id'))
    date_time = db.Column(db.DateTime)