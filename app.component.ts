import { Component, OnInit } from '@angular/core';
import { Blog, User } from './app.interface';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public loginCheckUp =  /^\w{4,16}$/i
  public passCheckUp = /^[a-z|0-9|\.|_|-]{4,16}$/i
  public emailCheckUp = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,5}/

public singInForm = 'none'
public singUpForm = 'none'
public addPostForm = ' none'

public editStatus= true
public headerBtn = true
public PostStatus = true

public err = 'hide'
public errName = 'none'
public index!:number

public btnIn = 'sing-in sing'
public btnUP = 'sing-up'
public btnAddPost   = 'btnAddPost'
public userAcc   = 'user'
public btnSingOut = 'btnSingOut'

public nameUPUser!:string

public userName!:string
public email!:string
public password!:string
public emailIn!:string
public passwordIn!:string

public titlePostAdd!:string
public textPostAdd!:string
public titlePostE!:string
public textPostE!:string

public nameChekc!:boolean
public emailChekc!:boolean
public passChekc!:boolean

public newPost!:Blog
public user!:User

public users:User[] = [{
  id:1,
  username:'admin',
  email:'admin@mail.com',
  password:'11111111'
}]
public blogs:Blog[] = [{
  id:1,
  topic:'First post',
  date:new Date,
  postedBy:'admin',
  message:'Sing up to create your accont and start to user Angular Blog'
}]

  constructor(
    private blog: BlogService,
    
  ){}

  ngOnInit(): void {

    
  }


  singInOpen(){
    this.singInForm = 'modal'
    this.emailIn = ''
    this.passwordIn = ''
  }

singUpOpen(){
this.singUpForm = 'modal'
this.userName = ''
  this.email = ''
  this.password = ''
}

submitNewUser(){

this.nameChekc = this.loginCheckUp.test(this.userName)
this.emailChekc = this.emailCheckUp.test(this.email)
this.passChekc = this.passCheckUp.test(this.password)
if(this.nameChekc && this.emailChekc && this.passChekc){
  if(this.users.some((name)=> name.username.toLowerCase() === this.userName.toLowerCase()) && this.users.some((email)=> email.email.toLowerCase() === this.email.toLowerCase() )){
    console.log('have');
    this.errName = 'blockName'
    
  }
  else{
    this.user= 
    {
      id:1,
      username:this.userName,
      email:this.email,
      password:this.password
    }
    if(this.users.length > 0){
      const id = this.users.slice(-1)[0].id
      this.user.id = id +1
    }
    this.users.push(this.user)
  console.log(this.users );
  this.userName = ''
  this.email = ''
  this.password = ''

  this.blog.addNewUser(this.user)
  this.nameUPUser = this.user.username
  }
  this.singUpForm = 'none'
  this.headerBtn = false
}
 else {this.err = 'block'}



}

addPostOpen(){
this.addPostForm = 'modal'
this.titlePostAdd = ''
this.textPostAdd= ''

}
submitNewPost(){



  this.newPost = {
  id:1,
  postedBy:this.nameUPUser,
  topic:this.titlePostAdd,
  date:new Date,
  message:this.textPostAdd
}
if(this.blogs.length > 0){
  const id = this.blogs.slice(-1)[0].id
  this.newPost.id = id +1
}
console.log(this.newPost);
this.blogs.push(this.newPost)
this.blog.addNewPost(this.newPost)

this.addPostForm = 'none'
}
deletePost(i:number){
  this.blogs.splice(i,1)
}
editPost(i:number){
  this.editStatus = false
  this.PostStatus = false
  this.index = i
this.addPostForm = 'modal'
this.titlePostAdd= this.blogs[this.index].topic
this.textPostAdd= this.blogs[this.index].message
}
savePost(){
  this.blogs[this.index].topic = this.titlePostAdd
  this.blogs[this.index].message = this.textPostAdd
this.addPostForm = 'none'
this.textPostE = ''
this.titlePostE = ''
this.PostStatus = true
this.editStatus = true
}
goAccUser(){
  this.emailChekc = this.emailCheckUp.test(this.emailIn)
  this.passChekc = this.passCheckUp.test(this.passwordIn)
  if(this.emailChekc && this.passChekc){

const filter = this.users.filter((email)=> email.email.toLowerCase() === this.emailIn.toLowerCase())
      console.log('have');
      console.log(this.user);
      this.singInForm = 'none'


      this.nameUPUser = filter[0].username
this.headerBtn = false

     
    }
    else {this.err = 'block'}

}
singOut(){
  this.headerBtn = true

}

close(){
  this.singInForm = 'none'
  this.singUpForm = 'none'
  this.addPostForm = 'none'
}
}
