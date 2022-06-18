import { userEndPoints } from '../configuration/config';
import apiService from './ApiServices';

class allUsers {

  async getAllUsers(query) {
    const apiResponse = await apiService.get(userEndPoints.user + '?keyword=' + query);
    return apiResponse.data.data;
  }

};

export default new allUsers;