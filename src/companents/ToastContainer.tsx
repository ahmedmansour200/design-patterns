import { useEffect, useState} from 'react';
import { Toast, ToastProps } from './Toast';
import {toastObservable} from '../Observer'
type Toast = Pick<ToastProps , 'id' | 'message' | 'variant'>;
export function ToastContainer() {
const [toasts , setToasts] = useState<Toast[]>([]);

useEffect(() => {
  const unsubscribe = toastObservable.subscribe((event) => {
    switch (event.type) {
      case "ADD_TOAST":
        setToasts((prevToasts) => [...prevToasts, event.toast]);
        break;
      case "DISMISS_ALL":
        setToasts([]);
        break;
      default:
        break;
    }
  });

  return () => {
    unsubscribe();
  };
}, []);
  return (
    <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
      {toasts.map(toast =>(
        <Toast key={toast.id} id={toast.id} variant={toast.variant} message={toast.message} onClose={() => {
            setToasts(ToastProps =>  ToastProps.filter(tos => tos.id !== toast.id));
        }} />
      ))}
    </div>
  );
}