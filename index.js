const zod = require("zod");

function validateInput(obj){

  const schmea = zod.object({
    email : zod.string().email(),
    password : zod.string().min(5)
  })

const response = schmea.safeParse(obj);
console.log(response);

}

validateInput({
  email : "amanraj06@agmail.com",
  password : "fssds"
})
