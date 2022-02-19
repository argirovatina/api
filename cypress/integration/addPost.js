describe("As authenticated user", () => {
    it("I can create a post", () => {
        cy.getUserId().as('myInfo');
        cy.fixture('postInfo').then((post) => {
            cy.get('@myInfo').then((myInfo) => {
                cy.createPost(myInfo.id, post.title, post.contentFormat, post.content, 
                    post.canonicalUrl, post.license, post.publishStatus).then((createdPost) => {
                        expect(createdPost.url).to.contain( myInfo.username);
                        expect(createdPost.url).to.contain(createdPost.id);
                });
            });
        });
    });
    it("I cannot see posts of other users", () => {
        cy.fixture('userInfo').then((userInfo) => {
            cy.getUserPublications(userInfo.otherUserId).then((resp) => {
                expect(resp.status).to.eq(403);
                expect(resp.body.errors[0].message).to.eq(
                    'You may not list publications for another user'
                );
            });
        });
    });
});
