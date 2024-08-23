import { ToastProps } from './companents/Toast';
type Observer<TData> =(data: TData) => void;

class Observable<TData>{
    
    observers: Observer<TData>[] = [];

    subscribe(observer: Observer<TData>){
        this.observers.push(observer);

        return ()=> {
            this.observers = this.observers.filter(obs => obs !== observer);
        }
    }
    notify(data: TData){
        this.observers.forEach(observer => observer(data));
    }
}

type Toast = Pick<ToastProps , 'id' | 'message' | 'variant'>;

type EventType = 
  | { type: "ADD_TOAST", toast: Toast }
  | { type: "DISMISS_ALL" };
export const toastObservable = new Observable<EventType>()

export function toast(message: string){
    toastObservable.notify({
        type:'ADD_TOAST',
        toast:{
        id:Date.now(),
        message,
        variant:'default'
        }
    })
}
toast.success = function(message: string){
    toastObservable.notify({
        type:'ADD_TOAST',
        toast: {
        id:Date.now(),
        message,
        variant:'success'
        }
    })
}
toast.error = function(message: string){
    toastObservable.notify({
        type:'ADD_TOAST',
        toast:{
        id:Date.now(),
        message,
        variant:'error'
        }
    })
}
toast.dismissAll = function(){
    toastObservable.notify({
        type:'DISMISS_ALL'
    })   
}