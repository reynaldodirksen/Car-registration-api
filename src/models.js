const { pool } = require('./db');

// exports.getAll = async () => {
//     pool.on('error', (err, client) =>{
//         console.error('unexpecter error on idle client', err)
//         ProcessingInstruction.exit(-1)
//     })
//     pool.connect()
//     .then(client=> {
//         const { rows } = client.query('SELECT * FROM cars')
//             .then(res=> {
//                 client.release()
//             })
//             .catch(e=> {
//                 client.release()
//                 console.log(err.stack)
//             })
//         })

// };

exports.getById = async (id) => {
    const { rows } = await client.query('SELECT * FROM cars WHERE id = $1', [id]);
    return rows[0];
};

exports.create = async (car) => {
    pool.connect();
    const { rows } = await pool.query(
        'INSERT INTO cars (registration_date, model, type, registration_number, color, build_year, brand, registered_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [car.registrationDate, car.model, car.type, car.registrationNumber, car.color, car.buildYear, car.brand, car.registeredBy]
    );
    return rows[0];
};


// exports.create = async (car) => {
//     pool.on('error', (err, client) =>{
//         console.error('unexpecter error on idle client', err)
//         ProcessingInstruction.exit(-1)
//     })
//     pool.connect()
//     .then(client=> {
//         return client.query(
//             'INSERT INTO cars (registration_date, model, type, registration_number, color, build_year, brand, registered_by) VALUES ("2024-08-12", "Model X", "Cybertrucl", "AUA123", "Red", "2024", "Tesla", "Rey Dirk") RETURNING *')
//             .then(res=> {
//                 client.release()
//             })
//             .catch(e=> {
//                 client.release()
//                 // console.log(err.stack)
//             })
//         })

// };

exports.update = async (id, car) => {
    const { rows } = await client.query(
        'UPDATE cars SET registration_date = $1, model = $2, type = $3, registration_number = $4, color = $5, build_year = $6, brand = $7, registered_by = $8 WHERE id = $9 RETURNING *',
        [car.registrationDate, car.model, car.type, car.registrationNumber, car.color, car.buildYear, car.brand, car.registeredBy, id]
    );
    return rows[0];
};

exports.delete = async (id) => {
    await client.query('DELETE FROM cars WHERE id = $1', [id]);
};
