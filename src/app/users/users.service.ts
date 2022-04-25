import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "./users.model";

@Injectable({
    providedIn: "root"
})
export class UsersService {

    private userssUrl = "http://localhost:3000/users";

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.userssUrl);
    }

    getUserById(payload: number): Observable<User> {
        return this.http.get<User>(`${this.userssUrl}/${payload}`);
    }

    createUser(payload: User): Observable<User> {
        return this.http.post<User>(this.userssUrl, payload);
    }

    updateUser(user: User): Observable<User> {
        return this.http.patch<User>(
            `${this.userssUrl}/${user.id}`,
            user
        );
    }

    deleteUser(payload: number) {
        return this.http.delete(`${this.userssUrl}/${payload}`);
    }

}