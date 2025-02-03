import mysql from 'serverless-mysql'

export const conn = mysql({
    config: {
        host: 'sql-global.c5eoehvxjn2a.us-east-1.rds.',
        user: 'Global',
        password: 'globaltune',
        port: 3306,
        database: 'users'
    }
    
})