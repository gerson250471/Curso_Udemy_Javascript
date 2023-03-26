INSERT into cidades (nome, area, estado_id)
VALUES('Campinas', 795, 25)

insert into cidades (nome,area,estado_id)
VALUES('Niteroi', 139.9, 19)

insert into cidades
(nome,area,estado_id)
VALUES(
    'Caruaru',
    920.6,
    (select id from estados where sigla='PE')
)

INSERT INTO cidades
(nome,area,estado_id)
VALUES('Juazeiro do Norte',248.2,(SELECT id FROM estados WHERE sigla='CE'))

SELECT * from cidades