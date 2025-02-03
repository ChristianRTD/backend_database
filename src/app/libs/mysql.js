import mysql from 'serverless-mysql'

export const conn = mysql({
    config: {
        host: 'sql-global.c5eoehvxjn2a.us-east-1.rds.amazonaws.com',
        user: 'Global',
        password: 'globaltune202',
        port: 3306,
        database: 'SQL-Global'
        }
    
})