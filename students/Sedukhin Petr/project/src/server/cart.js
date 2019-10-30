let add = (cart, req) => {
    cart.contents.push (req.body)
    return JSON.stringify (cart, null, 4)
}

let change = (cart, req) => {
    let find = cart.contents.find (el => el.id === +req.params.id)
    find.qty += +req.body.qty
    return JSON.stringify (cart, null, 4)
}

module.exports = {
    add, change
}