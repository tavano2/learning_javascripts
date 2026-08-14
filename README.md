cur = conn.cursor()가 아래에 있어 df1.to_csv(buffer, index=False, header=False, sep=delimiter) 혹은 buffer.seek(0)에서 에러가 나면 정의가 안된 상태로 except 블록의 close가 실행되어 NameError가 원래 예외를 가려버리게 될텐데, try-catch-fianlly로 해서 빼는게 좋지 않을까요?

라고 코드 리뷰 왔는데 다음 코드 어떻게 고쳐야 할까?

def insertNasSever(df1, inserttype):
    conn = postgresql_connection
    __delimiter__ = u'\u001f'
    table = ''

    if inserttype == 'netapp':
        table = 'public.nas_server_netapp'
    elif inserttype == 'unity':
        table = 'public.nas_server_unity'

    try:
        buffer = io.StringIO()
        df1.to_csv(buffer, index=False, header=False, sep=__delimiter__)
        buffer.seek(0)

        cur = conn.cursor()
        cur.copy_expert("COPY {} from stdin with delimiter '{}'".format(table, __delimiter__), buffer)
        conn.commit()

    except Exception as e:
        print("insertNasStorage PD -> DB Error!: %s" % e)
        conn.rollback()
        cur.close()

    cur.close()
