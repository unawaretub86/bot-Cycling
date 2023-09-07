const {
  createBot,
  createProvider,
  createFlow,
} = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const PostgreSQLAdapter = require("@bot-whatsapp/database/postgres");

const {flowHi} = require('./flows/hi.js')
const {flowGoodBye} = require('./flows/bye.js')

const POSTGRES_DB_HOST = "localhost";
const POSTGRES_DB_USER = "postgres";
const POSTGRES_DB_PASSWORD = "admin";
const POSTGRES_DB_NAME = "postgres";
const POSTGRES_DB_PORT = "5433";

/**
 * Aqui declaramos los flujos hijos, los flujos se declaran de atras para adelante, es decir que si tienes un flujo de este tipo:
 *
 *          Menu Principal
 *           - SubMenu 1
 *             - Submenu 1.1
 *           - Submenu 2
 *             - Submenu 2.1
 *
 * Primero declaras los submenus 1.1 y 2.1, luego el 1 y 2 y al final el principal.
 */

const main = async () => {
  const adapterDB = new PostgreSQLAdapter({
    host: POSTGRES_DB_HOST,
    user: POSTGRES_DB_USER,
    database: POSTGRES_DB_NAME,
    password: POSTGRES_DB_PASSWORD,
    port: POSTGRES_DB_PORT,
  });
  const adapterFlow = createFlow([flowHi, flowGoodBye]);
  const adapterProvider = createProvider(BaileysProvider);
  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });
  QRPortalWeb();
};

main();
