

class GoalsApi {
    constructor(baseUrl) {
        this.baseUrl = `${import.meta.env.VITE_LOCALHOST}`;
    }

    async getGoals() {
        try {
            const response = await axios.get(`${this.baseUrl}goals`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log("Could not retrieve goals", err);
        }
    }

    async getGoalsId() {
        try {
            const response = await axios.get(`${this.baseUrl}goals/${id}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log("Could not retrieve the selected goal data", err);
        }
    }

    async putGoalId() {
        try {
            const response = await axios.put(`${this.baseUrl}goals/${id}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log("Could not replace the data for the specified goal", err);
        }
    }

    async patchGoalId() {
        try {
            const response = await axios.patch(`${this.baseUrl}goals/${id}`);
            console.log(response);
            return response.data;
        } catch (err) {
            console.log("Could not update the specified goal", err);
        }
    }

}

// const axiosInstance = axios.create({
//     baseURL: "http://localhost:8080",
//   });
//   export default class WarehouseAPI {
//     static async getWarehouses() {
//       const response = await axiosInstance.get("/warehouses");
//       return response.data;
//     }