// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    // console.log("[req]", req)
    const { id } = req.query
    const quantity = req.query.qty
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
