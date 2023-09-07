const { addKeyword } = require("@bot-whatsapp/bot");

let nombre;
let apellidos;
let email;
let date;
let destiny;


const flowForm = addKeyword(["1"])
  .addAnswer(
    [
      "Para agendar el acompañamiento necesito unos datos",
      "Escriba su *Nombre*",
    ],
    { capture: true },

    async (ctx) => {
      nombre = ctx.body;
    }
  )
  .addAnswer(
    ["También necesito tu apellido"],
    { capture: true },

    async (ctx) => {
      apellidos = ctx.body;
    }
  )
  .addAnswer(
    ["Indicame tu correo electronico"],
    { capture: true },

    async (ctx, {fallBack }) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const emailSent = ctx.body;
      //   const fallBackEmail = currentState?.fallBackEmail ?? 0;

      if (!emailRegex.test(emailSent)) {
        // if (fallBackEmail > 2) {
        //   return gotoFlow(fallBackEmailFlow);
        // }

        // state.update({ fallBackEmail: fallBackEmail + 1 });
        return fallBack("Debes introducir un email valido");
      }

      email = ctx.body;
    }
  )
  .addAnswer(
    ["Indicame a donde vamos"],
    { capture: true },

    async (ctx) => {
      destiny = ctx.body;
    }
  )
  .addAnswer(
    ["Indicame la fecha del acompañamiento, por ejemplo 22/11"],
    { capture: true },

    async (ctx, { flowDynamic }) => {
      date = ctx.body;
      ctx.from = ctx.from.replace(/57/g, "")
      return flowDynamic(`Estupendo *${nombre}*! te dejo el resumen de tus datos
                \n- Nombre y apellidos: *${nombre} ${apellidos}*
                \n- Correo: *${email}*
                \n- Fecha: *${date}*
                \n- Lugar: *${destiny}*
                \n- Telefono: *${ctx.from}*`);
    }
  );

module.exports = { flowForm };
