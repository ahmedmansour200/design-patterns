import axios from "axios";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        const data = response.data;
        
        if (!Array.isArray(data)) {
          throw new Error('Unexpected response format');
        }
    
        return data;
      } catch (error) {
        throw error;
      }
    };