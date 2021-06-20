// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

// const discovery = new DiscoveryV1({
//     version: '2019-04-30',
//     authenticator: new IamAuthenticator({
//         apikey: '5uRk-WEXT3grGzNMDFhUdYAbSviQOtDkoWDuisZEc2-S',
//     }),
//     serviceUrl: 'https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/15cf2273-f2a2-442c-ab9b-845f78cec2c6',
// });
//
// const queryParams = {
//     environmentId: 'd1c1972b-1100-4d86-83ed-46c86efdd719',
//     collectionId: '2bd970fd-dde2-4336-a27e-8d8b6fa5b3fd',
// };
//
// discovery.query(queryParams)
//     .then(queryResponse => {
//         console.log(JSON.stringify(queryResponse, null, 2));
//     })
//     .catch(err => {
//         console.log('error:', err);
//     });

export default function handler(req, res) {
    const { id } = req.query
    const quantity = req.query.qty

    const discovery = new DiscoveryV1({
        version: '2019-04-30',
        authenticator: new IamAuthenticator({
            apikey: '5uRk-WEXT3grGzNMDFhUdYAbSviQOtDkoWDuisZEc2-S',
        }),
        serviceUrl: 'https://api.eu-gb.discovery.watson.cloud.ibm.com/instances/15cf2273-f2a2-442c-ab9b-845f78cec2c6',
    });

    const queryParams = {
        environmentId: 'd1c1972b-1100-4d86-83ed-46c86efdd719',
        collectionId: '2bd970fd-dde2-4336-a27e-8d8b6fa5b3fd',
        naturalLanguageQuery: id,
        passages: true
    };

    discovery.query(queryParams)
        .then(queryResponse => {
            // console.log(JSON.stringify(queryResponse, null, 2));
            // console.log(queryResponse?.result?.passages)
            let discoveryPassages = queryResponse?.result?.passages;
            discoveryPassages.forEach((passage) => {
                // console.log("[passage]", passage)
                console.log("[passage.passage_text]", passage.passage_text)
            })
        })
        .catch(err => {
            console.log('error:', err);
        });


    // console.log("[req]", req)
    // const { id } = req.query
    // const quantity = req.query.qty
    let prices = [10, 100, 20, 10, 120, 16, 15]
    if (id === "paper") {
        let amount = quantity * prices[0];
        res.status(200).json({ amount: amount });
    }
    if (id === "metal") {
        let amount = quantity * prices[1];
        res.status(200).json({ amount: amount });
    }
    if (id === "glass") {
        let amount = quantity * prices[2];
        res.status(200).json({ amount: amount });
    }
    if (id === "plastic") {
        let amount = quantity * prices[3];
        res.status(200).json({ amount: amount });
    }
    if (id === "ewaste") {
        let amount = quantity * prices[4];
        res.status(200).json({ amount: amount });
    }
    if (id === "biode") {
        let amount = quantity * prices[5];
        res.status(200).json({ amount: amount });
    }
    if (id === "other") {
        let amount = quantity * prices[6];
        res.status(200).json({ amount: amount });
    }
    // res.status(200).json(retObj);
}
