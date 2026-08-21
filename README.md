SELECT
                       detect_date
                     , vm
                     -- , sum(retrieve_cpu) as retrieve_cpu
                     -- , sum(retrieve_mem) as retrieve_mem
                     , max(case when (retrieve_target = 'vCPU' OR retrieve_target = 'vCPU/vMem') then retrieve_cpu else 0 end) as target_cpu
                     , max(case when (retrieve_target = 'vMem' OR retrieve_target = 'vCPU/vMem') then retrieve_mem else 0 end) as target_mem
                FROM retrieve.retrieve_meta_history
                WHERE 1=1
                AND detect_date is not null
                AND status_code in ('progress', 'approving', 'retrieved')
                 and detect_date between   '2026-07-01 00:00:00.000000' and '2026-07-31 23:59:00.000000'
                and vm in (
                   'khaillmw01'
                    )
                GROUP BY detect_date, vm

이 쿼리에서 log_time이라는 로그 쌓이는 컬럼이 따로 있는데
log_time 제일 최신 target_cpu랑 target_mem를 가져올 수 있을까? max로 안잡고
