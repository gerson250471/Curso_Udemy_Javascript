select regiao as 'Região',
SUM(populacao) as Total
from estados
GROUP BY regiao
ORDER BY Total DESC