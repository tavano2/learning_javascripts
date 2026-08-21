SELECT detect_date, vm, retrieve_target, retrieve_cpu AS target_cpu, retrieve_mem AS target_mem
FROM (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY detect_date, vm ORDER BY log_time DESC) AS rn
    FROM retrieve.retrieve_meta_history
    WHERE 1=1
      AND detect_date IS NOT NULL
      AND status_code IN ('progress', 'approving', 'retrieved')
      AND detect_date BETWEEN '2026-07-01 00:00:00.000000' AND '2026-07-31 23:59:00.000000'
      AND vm IN ('khaillmw01')
) t
WHERE rn = 1;
