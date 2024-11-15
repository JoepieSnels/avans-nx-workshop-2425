import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IUserInfo, UserRole, UserGender } from '@avans-nx-workshop/shared/api';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    readonly users: IUserInfo[] = [
        {
            _id: '1',
            name: 'Robin Schellius',
            emailAddress: 'r.schellius@avans.nl',
            role: UserRole.Unknown,
            gender: UserGender.Male,
            password: 'secret',
            isActive: true,
            profileImgUrl: 'https://randomuser.me/api/portraits/men/2.jpg'
        },
        {
            _id: '2',
            name: 'Davide Ambesi',
            emailAddress: 'd.ambesi@avans.nl',
            role: UserRole.Unknown,
            gender: UserGender.Male,
            password: 'secret',
            isActive: true,
            profileImgUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            _id: '3',
            name: 'Marieke Jansen',
            emailAddress: 'm.jansen@server.nl',
            role: UserRole.Unknown,
            gender: UserGender.Female,
            password: 'secret',
            isActive: false,
            profileImgUrl: 'https://randomuser.me/api/portraits/women/3.jpg'
        },
        {
            _id: '4',
            name: 'Jan Montizaan',
            emailAddress: 'j.montizaan@avans.nl',
            role: UserRole.Unknown,
            gender: UserGender.Male,
            password: 'secret',
            isActive: true,
            profileImgUrl: 'https://randomuser.me/api/portraits/men/5.jpg'
        }
    ];

    constructor() {
        console.log('UserService created');
    }

    getUsers(): IUserInfo[] {
        console.log('getUsers() aangeroepen');
        return this.users;
    }

    getUsersAsObservable(): Observable<IUserInfo[]> {
        console.log('getUsersAsObservable() aangeroepen');
        // 'of' is een rxjs operator die een Observable
        // maakt van de gegeven data.
        return of(this.users).pipe(delay(2000));
    }

    getUserById(id: string | null): IUserInfo {
        console.log('getUserById() aangeroepen');
        return this.users.filter((user) => user._id === id)[0];
    }
}
