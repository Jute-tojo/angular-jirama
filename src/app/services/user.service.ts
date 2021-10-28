import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*'
    })
  };
  

@Injectable()
export class UserService {
    
    constructor(private httpClient: HttpClient){

    }
    postUser(params:any){
        this.httpClient.post('http://localhost:3000/user', params, httpOptions).subscribe(
            (a)=>{
                return a;
            },
            (error) => {
                console.log('Erreur de sauvegarde !' + error);                
            }
        )
    }
    getAll(){
        this.httpClient.get('http://localhost:3000/user')
        .subscribe(
            (a)=> {
                
                return a;
            },
            (error) => {
                console.log('Erreur durant l\'affichage !' + error);
                
            }
        )
    }
    getUsers(): Observable<any> {
        return this.httpClient.get<any>('http://localhost:3000/user');
    }
    auth(mail: string, password: string): Observable<any>{
        return this.httpClient.get<any>('http://localhost:3000/user/'+mail+'/'+password);
    }
}
