SELECT
    c1.id,
    c1.name,
    c2.name AS parent_name
FROM
    table_name c1
LEFT JOIN
    table_name c2
ON
    c1.parent_id = c2.id;
