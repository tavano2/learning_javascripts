def insertNasSever(df1, inserttype):
    conn = postgresql_connection
    __delimiter__ = u'\u001f'
    table = ''

    if inserttype == 'netapp':
        table = 'public.nas_server_netapp'
    elif inserttype == 'unity':
        table = 'public.nas_server_unity'

    cur = None
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

    finally:
        if cur is not None:
            cur.close()
