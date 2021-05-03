import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID QDxnDPpiMqDISnd0eAUhu3A6o7LY2x7tb1NkYOqAAGI'
  }
})