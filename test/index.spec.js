const App = require('./app'),
    request = require('supertest'),
    urlCleaner = require('../lib'),
    urlCleanerES5 = require('../lib/es5');

[urlCleaner, urlCleanerES5].forEach(cleaner => {
    describe('the express-url-cleaner module', () => {
        let app;

        beforeAll(() => {
            app = App(cleaner);
        });

        describe('sanitizes html in the pathname', () => {
            it('GET /path - 200', done => {
                request(app)
                    .get('/path')
                    .expect(200, done);
            });

            it('GET /path/<script>test</script> - 301', done => {
                request(app)
                    .get('/path<script>test</script>')
                    .expect('location', '/path')
                    .expect(301, done);
            });

            it('GET /path/<script>test</script> - 301', done => {
                request(app)
                    .get('/path/<script>test</script>')
                    .expect('location', '/path')
                    .expect(301, done);
            });

            it('GET /path/<script>test</script>/extra - 301', done => {
                request(app)
                    .get('/path/<script>test</script>/extra')
                    .expect('location', '/path')
                    .expect(301, done);
            });
        });

        describe('sanitizes html in the search', () => {
            it('GET /path?key=value - 200', done => {
                request(app)
                    .get('/')
                    .expect(200, done);
            });

            it('GET /path?key=<script>alert("hello!")</script> - 301', done => {
                request(app)
                    .get('/path?key=<script>alert("hello!")</script>')
                    .expect('location', '/path?key=')
                    .expect(301, done);
            });

            it('GET /path?key=<script>alert("hello!")</script>&key2=value - 301', done => {
                request(app)
                    .get('/path?key=<script>alert("hello!")</script>&key2=value')
                    .expect('location', '/path?key=&key2=value')
                    .expect(301, done);
            });

            it('GET /path?<script>alert("hello!")</script> - 301', done => {
                request(app)
                    .get('/path?<script>alert("hello!")</script>')
                    .expect('location', '/path?')
                    .expect(301, done);
            });
        });
    });
});
