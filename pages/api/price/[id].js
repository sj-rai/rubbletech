// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const DiscoveryV1 = require("ibm-watson/discovery/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

export default function handler(req, res) {
  const { id } = req.query;
  const quantity = req.query.qty;

  const discovery = new DiscoveryV1({
    version: "2019-04-30",
    authenticator: new IamAuthenticator({
      apikey: process.env.API_KEY,
    }),
    serviceUrl: process.env.SERVICE_URL,
  });

  const queryParams = {
    environmentId: process.env.ENV_ID,
    collectionId: process.env.COLLECTION_ID,
    naturalLanguageQuery: id,
    passages: true,
  };

  discovery
    .query(queryParams)
    .then((queryResponse) => {
      let discoveryPassages = queryResponse?.result?.passages;
      let r = /\d+/;
      let passageText = discoveryPassages[0]?.passage_text;
      let passageTextNumber = passageText && passageText.match(r);
      console.log("[passageTextNumber]", passageTextNumber);
      // console.log("[passageTextNumber[0]]", passageTextNumber[0])
      let price = passageTextNumber ? passageTextNumber[0] : 0;
      let amount = quantity * price;
      res.status(200).json({ amount: amount });
    })
    .catch((err) => {
      console.log("error:", err);
      res.send(err);
    });

  // console.log("[req]", req)
  // const { id } = req.query
  // const quantity = req.query.qty
  // let prices = [10, 100, 20, 10, 120, 16, 15]
  // if (id === "paper") {
  //     let amount = quantity * prices[0];
  //     res.status(200).json({ amount: amount });
  // }
  // if (id === "metal") {
  //     let amount = quantity * prices[1];
  //     res.status(200).json({ amount: amount });
  // }
  // if (id === "glass") {
  //     let amount = quantity * prices[2];
  //     res.status(200).json({ amount: amount });
  // }
  // if (id === "plastic") {
  //     let amount = quantity * prices[3];
  //     res.status(200).json({ amount: amount });
  // }
  // if (id === "ewaste") {
  //     let amount = quantity * prices[4];
  //     res.status(200).json({ amount: amount });
  // }
  // if (id === "biode") {
  //     let amount = quantity * prices[5];
  //     res.status(200).json({ amount: amount });
  // }
  // if (id === "other") {
  //     let amount = quantity * prices[6];
  //     res.status(200).json({ amount: amount });
  // }
  // res.status(200).json(retObj);
}
