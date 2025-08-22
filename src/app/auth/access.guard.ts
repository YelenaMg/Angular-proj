import { inject, Inject } from "@angular/core"
import { Auth } from "./auth"
import { Router } from "@angular/router"

export const canActivateAuth=()=>{
   const isLoggedIn = Inject(Auth)

   if(isLoggedIn){
    console.log("islogged")
    return true
   }
   return inject(Router).createUrlTree(['/login'])
}