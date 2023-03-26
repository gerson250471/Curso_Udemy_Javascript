SELECT  *   FROM cidades c INNER JOIN prefeitos p ON c.id = p.cidade_id;

SELECT  *   FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id;

SELECT  *   FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;

-- Como o Full join não é suportado no Mysql abaixo está uma maneira de obter este resultado
SELECT  *   FROM cidades c LEFT JOIN prefeitos p ON c.id = p.cidade_id
UNION
SELECT  *   FROM cidades c RIGHT JOIN prefeitos p ON c.id = p.cidade_id;