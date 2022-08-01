import { AbstractControl, ValidationErrors } from "@angular/forms";

export const EmailValidator = () => {
    return (control: AbstractControl) : ValidationErrors | null => {        
        if(control.value.indexOf('@') < 0 || 
          control.value.startsWith('@') || control.value.endsWith('@')) {
                return {invalidEmail: true}
        }

        return null
    }
} 