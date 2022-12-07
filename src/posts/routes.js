import { config } from "./config";
const { api } = config;
const routes = {
  selectAll: (entityName) => `${api}/${entityName}`,
  selectOne: (entityName, id) => `${api}/${entityName}/${id}`,
};

export default routes;
