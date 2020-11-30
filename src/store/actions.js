import axios from "axios";

export const getProducts = ({ commit }) => {
    axios.get('http://localhost:8080/api/products/findall')
        .then(resp => {
            commit('SET_PRODUCTS', resp.data)
        });
}

export const getProduct = ({ commit }, productId) => {
    axios.get('http://localhost:8080/api/products/find/'+productId)
        .then( resp => {
            commit('SET_PRODUCT', resp.data);
        });
}

export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CART', { product, quantity });
}
