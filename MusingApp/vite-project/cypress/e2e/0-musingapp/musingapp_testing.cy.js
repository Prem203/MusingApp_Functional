/// <reference types="cypress" />

describe('LoginPage Testing', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/  ');
  });

  //test1: Login form is displayed, user is logged in, homepage is displayed on correct credentials, error message is displayed on incorrect credentials
  it('Login form is displayed and it submits the login details to proceed', () => {
    cy.get('.login-form').should('be.visible');
    cy.get("input[type='email']").type('Prem@gmail.com');
    cy.get("input[type='password']").type('Prem@1350');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/landingpage');
  });

  it('Login form is displayed and it shows error message on incorrect credentials', () => {
    cy.get('.login-form').should('be.visible');
    cy.get("input[type='email']").type('test@gmail.com');
    cy.get("input[type='password']").type('test@123');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible');
});

  it('Logout button is displayed and it logs out the user', () => {
    cy.visit('http://localhost:5173/landingpage');
    cy.get('.logout').click();
    cy.get('.login-form').should('be.visible');

});

});

describe('NavBar Testing', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/landingpage');
    });
  
    //test2: NavBar is displayed, Profile, Saved, Post links are displayed, Logout button is displayed
    it('NavBar is displayed and it contains Profile, Saved, Post links and Logout button', () => {
      cy.get('.navbar').should('be.visible');
      cy.get('.list-unstyled').should('be.visible');
      cy.get('.logout').should('be.visible');
  });
  
    it('Profile link is displayed and it navigates to Profile page', () => {
      cy.get('.list-unstyled').contains('Profile').click();
      cy.url().should('include', '/profile');
      cy.get('h4').contains('Profile');
      cy.get('.profile').should('be.visible');
      cy.get('.prof').should('be.visible').contains('Username: PremVora');
      cy.get('.prof').should('be.visible').contains('Age: 23 years');
      cy.get('.prof').should('be.visible').contains('Date of Birth: 03/20/2000');
      cy.get('.prof').should('be.visible').contains('Gender: Male');
      cy.get('.prof').should('be.visible').contains('Account Type: Student');
      cy.get('.prof').should('be.visible').contains('Total Posts:');
      cy.get('.prof2').should('be.visible').contains('About Me:');
      cy.get('.home-icon').click();
      cy.url().should('include', '/landingpage');
  });
  
    it('Saved link is displayed and it navigates to Saved page', () => {
      cy.get('.list-unstyled').contains('Saved').click();
      cy.url().should('include', '/saved');
      cy.get('.saved-post').should('be.visible');
      cy.get('.home-icon').click();
      cy.url().should('include', '/landingpage');
  });
  
    it('Post link is displayed and it navigates to Post page', () => {
      cy.get('.list-unstyled').contains('Post').click();
      cy.url().should('include', '/post');
      cy.get('h4').contains('Post');
      cy.get('.tag').should('be.visible');
      cy.get('.post').should('be.visible');
      cy.get('.btn').should('be.visible');
      cy.get('.home-icon').click();
      cy.url().should('include', '/landingpage');
  });
  
  });

describe('Post Testing', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/post');
    });
  
    //test3: Post form is displayed, user can post, post is saved and displayed
    it('Post form is displayed and it saves the post', () => {
      cy.get('.post').should('be.visible');
      cy.get('.tag').should('be.visible');
      cy.get('.btn').should('be.visible');
  });

    it('New Post is added and saved', () => {
      cy.get('.tag').type('Test');
      cy.get('.post').type('This is a test post');
      cy.get('.btn').click({force: true});
  });
  
    it('Post is saved and displayed on homepage', () => {
      cy.visit('http://localhost:5173/landingpage');
      cy.get('.content').contains('This is a test post');
  });
  
});

describe('Save Testing', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/saved');
    });
  
    //test4: Saved posts are displayed, user can view saved posts, user can save posts
    it('Saved posts are displayed', () => {
      cy.get('.saved-post').should('be.visible');
      cy.get('.saved-post').contains('This is a test post');
      cy.get('.saved-post').contains('Tag: Test');
  });
});

describe('Comment Testing', () => {
  
    beforeEach(() => {
      cy.visit('http://localhost:5173/comment?postid=123');
    });
  
    //test5: Comment form is displayed, user can comment, comment is saved and displayed
    it('Comment form is displayed and it saves the comment', () => {
      cy.get('.comm').should('be.visible');
      cy.get('.btn').should('be.visible');
  });

    it('New Comment is added and saved', () => {
      cy.get('.commen').type('This is a test comment');
      cy.get('.btn').click({force: true});
  });
  
} );