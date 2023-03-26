CREATE Table if not exists empresas(
    id INT UNSIGNED not null AUTO_INCREMENT,
    nome VARCHAR (145) not null,
    cnpj INT UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY(cnpj)
);

--  cidades_empresas 
CREATE Table if not exists empresas_unidades(
    empresa_id INT UNSIGNED not null,
    cidade_id int UNSIGNED not null,
    sede TINYINT(1) not null,
    PRIMARY KEY(empresa_id,cidade_id)
);