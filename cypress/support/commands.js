// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
let token = 'Bearer USE YOUR TOKEN'

Cypress.Commands.add('getUserId', () => {
    cy.request({
        method: 'GET',
        url: '/v1/me',
        headers: {
            Authorization: token
        }
    }).then((resp) => {
        expect(resp.status).to.eq(200);
        return resp.body.data
    });
});
Cypress.Commands.add('getUserPublications', (userId) => {
    cy.request({
        method: 'GET',
        url: `/v1/users/${userId}/publications`,
        headers: {
            Authorization: token
        },
        failOnStatusCode: false
    });
});
Cypress.Commands.add('createPost', (authorId, title, contentFormat, content, canonicalUrl, license, publishStatus) => {
    cy.request({
        method: 'POST',
        url: `/v1/users/${authorId}/posts`,
        headers: {
            Authorization: token
        },
        body: {
            title: title,
            contentFormat: contentFormat,
            content: content,
            canonicalUrl: canonicalUrl,
            license: license,
            publishStatus: publishStatus
        }
    }).then((resp) => {
        expect(resp.status).to.eq(201);
        return resp.body.data
    });;
});