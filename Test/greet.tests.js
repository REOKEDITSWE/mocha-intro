// test/greet.tests.js
describe('greet function', function() {
    it('should return a greeting message with the given name', function() {
        assert.equal(greet('Alice'), 'Hello, Alice!');
    });

    it('should return a default greeting when no name is provided', function() {
        assert.equal(greet(), 'Hello, there!');
    });
});
