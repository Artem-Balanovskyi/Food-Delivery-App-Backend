export const getMongoUri = () =>
    'mongodb+srv://' +
    process.env.MONGO_USER +
    ':' +
    process.env.MONGO_PASSWORD +
    '@' +
    process.env.MONGO_HOST +
    '/' +
    process.env.MONGO_DB_NAME +
    '?' +
    process.env.MONGO_OPTIONS

