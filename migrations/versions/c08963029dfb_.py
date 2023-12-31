"""empty message

Revision ID: c08963029dfb
Revises: 613fd5b27b54
Create Date: 2023-05-12 10:48:20.719213

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c08963029dfb'
down_revision = '613fd5b27b54'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('horse', schema=None) as batch_op:
        batch_op.alter_column('nombre',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)
        batch_op.alter_column('fecha_nacimiento',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)
        batch_op.alter_column('ganaderia',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)
        batch_op.alter_column('sexo',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)
        batch_op.alter_column('precio',
               existing_type=sa.INTEGER(),
               nullable=True)
        batch_op.alter_column('capa',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)
        batch_op.alter_column('alzada',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)
        batch_op.alter_column('provincia',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)
        batch_op.alter_column('nivel_doma',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)
        batch_op.alter_column('descripcion',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)
        batch_op.alter_column('imagenes',
               existing_type=sa.VARCHAR(length=1000),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('horse', schema=None) as batch_op:
        batch_op.alter_column('imagenes',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)
        batch_op.alter_column('descripcion',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)
        batch_op.alter_column('nivel_doma',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)
        batch_op.alter_column('provincia',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)
        batch_op.alter_column('alzada',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)
        batch_op.alter_column('capa',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)
        batch_op.alter_column('precio',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.alter_column('sexo',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)
        batch_op.alter_column('ganaderia',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)
        batch_op.alter_column('fecha_nacimiento',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)
        batch_op.alter_column('nombre',
               existing_type=sa.VARCHAR(length=1000),
               nullable=False)

    # ### end Alembic commands ###
