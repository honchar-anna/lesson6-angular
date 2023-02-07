import { Injectable } from '@angular/core';
import { Blog, User } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
private usersServe: User[] = []
private blogsServe: Blog[] = []
  constructor() { }

  getArrUsers():User[]{
    return this.usersServe
    
  }
  getArrBlogs():Blog[]{
    return this.blogsServe
    
  }

  addNewUser(user:User){
    this.usersServe.push(user)
  }
  addNewPost(post:Blog){
    this.blogsServe.push(post)
  }
}
