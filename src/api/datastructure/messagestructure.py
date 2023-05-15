from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.db import db
from api.models.message import Message

class MessageStructure:
    def post_one_message(text, horse_id, user_owner_id, 
    user_interested_id, date_time, sender_id):

        message = Message( text = text, horse_id = horse_id, 
        user_owner_id = user_owner_id, user_interested_id = user_interested_id,
        date_time = date_time, sender_id = sender_id)

        db.session.add(message)
        db.session.commit()
        return jsonify(message.serialize())

    def get_all_messages(horse_id, current_user_id):
        messages = Message.query.filter_by(horse_id = horse_id, user_interested_id = current_user_id).all()
        return jsonify([message.serialize() for message in messages])