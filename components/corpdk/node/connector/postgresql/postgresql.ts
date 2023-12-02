import { Pool } from 'pg';

const dbUser = process.env.PG_USER;
const dbHost = process.env.PG_HOST;
const dbName = process.env.PG_NAME;
const dbPassword = process.env.PG_PASSWORD;
const dbPort = Number(process.env.PG_PORT || 5432);
const maxConnections = Number(process.env.PG_MAX_CONNECTIONS || 5);
const idleTimeoutMillis = Number(process.env.PG_IDLE_TIMEOUT_MILLIS || 10000);
const connectionTimeoutMillis = Number(process.env.PG_CONNECTION_TIMEOUT_MILLIS || 2000);

export const pool: Pool = new Pool({
  user: dbUser,
  host: dbHost,
  database: dbName,
  password: dbPassword,
  max: maxConnections,
  idleTimeoutMillis: idleTimeoutMillis,
  connectionTimeoutMillis: connectionTimeoutMillis,
  port: dbPort,
});

export async function query(queryString: string, params: {[Key: string]: any]}) {
  const start = Date.now();
  const res = await pool.query(queryString, params);
  const duration = Date.now() - start;
  console.log('executed query', { text: queryString, duration, rows: res.rowCount });
  return res;
}

export async function getClient() {
  return await pool.connect();
}


export function postgresql() {
  return 'Hello world!';
}
