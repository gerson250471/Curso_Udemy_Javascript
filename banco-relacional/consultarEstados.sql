select * from estados

select nome,sigla from estados
where regiao = 'sul'

select nome,sigla,populacao from estados
where populacao >= 10
ORDER BY populacao DESC