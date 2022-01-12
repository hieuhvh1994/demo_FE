import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Posting} from '../model/posting';

const API_POSTING = environment.API_POSTING;

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Posting[]>{
    return this.http.get<Posting[]>(API_POSTING + 'api/posting');
  }

  create(posting: Posting): Observable<Posting> {
    return this.http.post<Posting>(API_POSTING + 'api/posting', posting);
  }

  update(id: number, posting: Posting): Observable<Posting> {
    return this.http.put<Posting>(API_POSTING + 'api/posting/' + id, posting);
  }

  findById(id: number): Observable<Posting> {
    return this.http.get<Posting>(API_POSTING + 'api/posting/' + id);
  }

  delete(id: number): Observable<Posting>{
    return this.http.delete<Posting>(API_POSTING + 'api/delete/' + id);
  }

  findAllUrlByPostingId(id: any): Observable<string[]>{
    return this.http.get<string[]>(API_POSTING + 'api/postingImage/posting/' + id);
  }

  getLikeByPostingId(id: any): Observable<number>{
    return this.http.get<number>(API_POSTING + 'api/postLike/like/' + id);
  }
  isLikedByAccountId(pId: any, accId: any): Observable<boolean>{
    return this.http.get<boolean>(API_POSTING + 'api/postLike/liked/' + pId + '/' + accId);
  }
}
