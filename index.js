const zod = require("zod");

function validateInput(obj){

  const schmea = zod.object({
    email : zod.string().email(),
    password : zod.string().min(5),
    name : zod.string().name()
  })

const response = schmea.safeParse(obj);
console.log(response);

}

validateInput({
  email : "aman@gmail.com",
  password : "fsssds"
  name : "Aman"
})
