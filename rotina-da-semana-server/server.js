import fastify from 'fastify'
const app = fastify({ logger: true });

app.get('/schedule', (req, reply) => {
    reply.send('');
});

app.listen({ port: 3333 });