import { useEffect, useState} from 'react';
import { Toast, ToastProps } from './Toast';
import {toastObservable} from '../utils'
type Toast = Pick<ToastProps , 'id' | 'message' | 'variant'>;
export function ToastContainer() {
const [toasts , setToasts] = useState<Toast[]>([]);

useEffect( () =>{
  return toastObservable.subscribe(toast => {
    setToasts(ToastProps => [...ToastProps , toast]);
  });
} ,[])
  return (
    <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
      {toasts.map(toast =>(
        <Toast id={toast.id} variant={toast.variant} message={toast.message} onClose={() => {
            setToasts(ToastProps =>  ToastProps.filter(tos => tos.id !== toast.id));
        }} />
      ))}
    </div>
  );
}