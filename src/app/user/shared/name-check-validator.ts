import { AbstractControl, ValidationErrors } from "@angular/forms";

export const NameCheckValidator = () => {
    return (control: AbstractControl) : ValidationErrors | null => {
         const firstName  = control.get('firstName')?.value;
         const lastName  = control.get('lastName')?.value;
         const password  = control.get('password')?.value;

         if(password === firstName && password === lastName) {            
           return {nameCheckFailed: true}
         }         
         return null
    }   

}