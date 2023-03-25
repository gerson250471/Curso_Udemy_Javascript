CREATE Table if NOT exists cidades(
    id int UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(160) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);

CREATE Table if NOT exists testes(
    id int UNSIGNED NOT NULL AUTO_INCREMENT  PRIMARY KEY 
);

DROP Table if exists testes;