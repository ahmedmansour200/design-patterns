import { describe, it, expect, beforeEach } from 'vitest';
import { toast, toastObservable } from './Observer';

describe('Toast Notifications', () => {
  let notifications: any[];  // Array to store notifications

  beforeEach(() => {
    notifications = [];
    // Simple observer to push notifications into the array
    const observer = (data: any) => {
      notifications.push(data);
    };
    // Subscribe to the observable
    toastObservable.subscribe(observer);
  });

  it('should add a default toast notification', () => {
    toast('Test message');

    expect(notifications).toContainEqual({
      type: 'ADD_TOAST',
      toast: {
        id: expect.any(Number),
        message: 'Test message',
        variant: 'default'
      }
    });
  });

  it('should add a success toast notification', () => {
    toast.success('Success message');

    expect(notifications).toContainEqual({
      type: 'ADD_TOAST',
      toast: {
        id: expect.any(Number),
        message: 'Success message',
        variant: 'success'
      }
    });
  });

  it('should add an error toast notification', () => {
    toast.error('Error message');

    expect(notifications).toContainEqual({
      type: 'ADD_TOAST',
      toast: {
        id: expect.any(Number),
        message: 'Error message',
        variant: 'error'
      }
    });
  });

  it('should dismiss all toasts', () => {
    toast.dismissAll();

    expect(notifications).toContainEqual({
      type: 'DISMISS_ALL'
    });
  });

  it('should handle multiple subscriptions', () => {
    const notifications1: any[] = [];
    const notifications2: any[] = [];

    const observer1 = (data: any) => {
      notifications1.push(data);
    };
    const observer2 = (data: any) => {
      notifications2.push(data);
    };

    toastObservable.subscribe(observer1);
    toastObservable.subscribe(observer2);

    toast('Test message');

    expect(notifications1).toContainEqual({
      type: 'ADD_TOAST',
      toast: {
        id: expect.any(Number),
        message: 'Test message',
        variant: 'default'
      }
    });

    expect(notifications2).toContainEqual({
      type: 'ADD_TOAST',
      toast: {
        id: expect.any(Number),
        message: 'Test message',
        variant: 'default'
      }
    });
  });


});
