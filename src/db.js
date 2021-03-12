const sequence = {
    _id = 1,

    get id() {
        return this._id++;
    }
}

produtosArmazenados = {}

function save(produto){
    if(!produto.id) produto.id = sequence.id;
    produtosArmazenados[produto.id] = produto;
    return produto;
}

function findById(id){
    return produtosArmazenados[id] || {};
}

function findAll(){
    return Object.values(produtosArmazenados);
}

module.exports = {save, findById, findAll}