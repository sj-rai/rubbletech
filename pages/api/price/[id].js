// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    // console.log("[req]", req)
    const {id} = req.query
    const quantity = req.query.qty
    let paperPrice = 10;
    let metalPrice = 10;
    if(id === "paper") {
        let amount = quantity * paperPrice;
        res.status(200).json({amount: amount});
    }
    if(id === "metal") {
        let amount = quantity * metalPrice;
        res.status(200).json({amount: amount});
    }
    // res.status(200).json(retObj);
}
