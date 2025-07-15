import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { todoItem } from "./app";

@Injectable({providedIn:'root'})
export class TodoService {

    private baseUrl = 'http://localhost:8080/todos/api';

    constructor(private http:HttpClient){}

    getTasks(): Observable<todoItem[]> {
        return this.http.get<todoItem[]>(this.baseUrl);
        
    }
    addTask(task:todoItem): Observable<todoItem>{
        return this.http.post<todoItem>(this.baseUrl,task)
    }
    deleteTask(id:string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`)
    }
    updateTask(task:todoItem): Observable<todoItem> {
        return this.http.put<todoItem>(`${this.baseUrl}/${task.id}`, task)
    }
}