const { addKeyword } = require("@bot-whatsapp/bot");
const { flowForm } = require('./form.js');

const flowHi = addKeyword(["hola", "Hola", "ola", "buenas"])
  .addAnswer("Bienvenido a Cycle Guardian Bike")
  .addAnswer(
    [
      "Selecciona una de la siguientes opciones",
      "👉 1 - Agendar acompañamiento",
      "👉 2 - Actualizar Acompañamiento",
      "👉 3 - Verificar datos de tu acompañamiento",
    ],
    null,
    null,
    // [flowForm, flowUpdate, flowVerify]
    [flowForm]
  )

module.exports = { flowHi };
