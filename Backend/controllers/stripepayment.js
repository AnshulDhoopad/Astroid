const stripe = require("stripe")(
  "sk_test_51LNF4aSIlm35GApsttOqyTEHAOtmpkAWZA1SdHaNkeZ5JI6mXRXKNigTOWbkqjclRaa5CnzXtCRvbxUElo0HSYFA00kInbgxYh"
);
const { v4: uuidv4 } = require("uuid");

exports.makePayment = (req, res) => {
  const { products, token } = req.body;
  console.log(products);

  let amount = 0;
  products.map((product) => {
    amount = amount + product.price;
  });

  //responsible for not charging user again
  const idempotencyKey = uuidv4();

  return stripe.customer
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges
        .create(
          {
            amount: amount * 100,
            currency: "usd",
            customer: customer.id,
            receipt_emial: token.email,
            description: "test account",

            shipping: {
              name: token.card.name,
              address: {
                line1: token.card.address_line1,
                line2: token.card.address_line2,
                city: token.card.address_city,
                country: token.card.address_country,
                postal_code: token.card.address_zip,
              },
            },
          },
          { idempotencyKey: idempotencyKey }
        )
        .then((result) => res.status(200).json(result))
        .catch((err) => console.log(err));
    });
};
