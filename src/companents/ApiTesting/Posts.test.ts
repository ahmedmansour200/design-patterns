import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { fetchPosts } from './Posts';

vi.mock('axios');

describe('fetchPosts', () => {
  
    it('should fetch posts successfully', async () => {
        const mockPosts = [
          { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
          { userId: 1, id: 2, title: 'Post 2', body: 'Body 2' }
        ];
        (axios.get as jest.Mock).mockResolvedValue({ data: mockPosts });
    
        const posts = await fetchPosts();
    
        expect(posts).toEqual(mockPosts);
      });
    
      it('should handle errors', async () => {
        const error = new Error('Network Error');
        (axios.get as jest.Mock).mockRejectedValue(error);
    
        await expect(fetchPosts()).rejects.toThrow('Network Error');
      });
    
      it('should handle different response data', async () => {
        const mockPosts = [
          { userId: 2, id: 3, title: 'Post 3', body: 'Body 3' }
        ];
        (axios.get as jest.Mock).mockResolvedValue({ data: mockPosts });
    
        const posts = await fetchPosts();
    
        expect(posts).toEqual(mockPosts);
      });
    
      it('should handle network delay', async () => {
        const mockPosts = [
          { userId: 1, id: 4, title: 'Post 4', body: 'Body 4' }
        ];
        (axios.get as jest.Mock).mockImplementation(() => new Promise(resolve => {
          setTimeout(() => resolve({ data: mockPosts }), 1000); // 1 second delay
        }));
    
        const posts = await fetchPosts();
    
        expect(posts).toEqual(mockPosts);
      });
    
      it('should handle unexpected response format', async () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: { unexpected: 'format' } });
      
        await expect(fetchPosts()).rejects.toThrow('Unexpected response format');
      });
    
      it('should handle empty response', async () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    
        const posts = await fetchPosts();
    
        expect(posts).toEqual([]);
      });
});
