SELECT * FROM estados e, cidades c
where e.id=c.estado_id;


SELECT
e.nome as estado,
c.nome as cidade,
regiao as Região
FROM estados e, cidades c
where e.id = c.estado_id


SELECT
    c.nome as cidade,
    e.nome as estado,
    regiao as Região
FROM estados e
INNER JOIN cidades c on e.id = c.estado_id