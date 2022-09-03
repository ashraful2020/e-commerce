import http from "./http.service";

class ProductService {
  async getAllProduct() {
    const data = await http.get("");
    return data;
  }
}

export default new ProductService();
