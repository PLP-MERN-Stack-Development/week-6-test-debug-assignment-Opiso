import request from 'supertest';
import app from '../server.js';
import mongoose from 'mongoose';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/bug-tracker-test');
});

afterAll(() => mongoose.disconnect());

describe('Bug API', () => {
  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Test Bug' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe('Test Bug');
  });
});
