export interface User {
   id:number,
   username:string,
   email:string,
   password:string
}
export interface Blog{
   id:number,
   postedBy:string,
   topic:string,
   date:Date,
   message:string

}