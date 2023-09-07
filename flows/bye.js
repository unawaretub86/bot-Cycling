const {
  addKeyword,
} = require("@bot-whatsapp/bot");

const flowGoodBye = addKeyword(["gracias", "Gracias", "adios", "chao", 'hasta luego'])
  .addAnswer("Gracias por comunicarte, que estes muy bien")
  .addAnswer(
    "¿Deseas agendar un acompañamiento?, este tendra un costo de 20.000 por hora",
    { capture: true },
    () => {}
  );


  module.exports = {flowGoodBye};