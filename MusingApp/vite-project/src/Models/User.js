export default class User {
    constructor({
        username = "",
        posts = [],
        savedposts = [],
    }){
        this.username = username;
        this.posts = posts;
        this.savedposts = savedposts;
    }

     
}