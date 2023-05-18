from api.models.db import db
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
class Message(db.Model):
    __tablename__ = 'message'
    id = Column(Integer, primary_key=True)
    text = Column(String(250))
    horse_id = Column(Integer, ForeignKey('horse.id'))
    user_owner_id = Column(Integer, ForeignKey('user.id'))
    user_owner = db.relationship('User', foreign_keys=[user_owner_id])
    user_interested_id = Column(Integer, ForeignKey('user.id'))
    user_interested = db.relationship('User', foreign_keys=[user_interested_id])
    date_time = db.Column(db.DateTime)
    sender_id = Column(Integer, ForeignKey('user.id'))
    def serialize(self):
        return {
            "id" : self.id,
            "text" : self.text,
            "horseId" : self.horse_id,
            "userOwnerId" : self.user_owner_id,
            "userOwner": self.user_owner.serialize(),
            "userInterestedId" : self.user_interested_id,
            "user_interested": self.user_interested.serialize(),
            "dateTime" : self.date_time,
            "senderId" : self.sender_id
        }