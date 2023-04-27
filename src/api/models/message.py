from api.models.db import db
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

class Message(db.Model):
    __tablename__ = 'message'
    id = Column(Integer, primary_key=True)
    comment_text = Column(String(250))
    author_id = Column(Integer, ForeignKey('user.id'))
    post_id = Column(Integer, ForeignKey('post.id'))
    author = relationship("User", backref="messages")
    post = relationship("Post", backref="messages")