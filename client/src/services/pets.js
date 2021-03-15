import api from "./apiConfig";

export const getPets = async () => {
  try {
    const response = await api.get("/pets");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPet = async (id) => {
  try {
    const response = await api.get(`/pets/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPet = async (pet, id) => {
  try {
    const response = await api.post(`/users/${id}/pets`, pet);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePet = async (id, pet) => {
  try {
    const response = await api.put(`/pets/${id}`, pet);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePet = async (id) => {
  try {
    const response = await api.delete(`/pets/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
