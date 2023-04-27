from api.models.db import db
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

class Post(db.Model):
    __tablename__ = 'post'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship("User", backref="posts")