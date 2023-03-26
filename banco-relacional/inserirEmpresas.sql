ALTER Table empresas MODIFY cnpj VARCHAR (14);

INSERT INTO empresas
    (nome,cnpj)
VALUES
    ('Bradesco','44290548000199'),
    ('Vale','48814966000199'),
    ('Cielo','65923457000113');

DESC empresas;

SELECT * from empresas;

SELECT * from cidades;

INSERT INTO empresas_unidades
    (empresa_id,cidade_id,sede)
 VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);

