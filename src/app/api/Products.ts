import agent from "../services/Agent";


const Products = {
    GetAllProducts: (): Promise<any> => agent().get('products'),
}

export default Products;
