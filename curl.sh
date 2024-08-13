curl -X POST http://localhost:1234/api/cars \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUmV5bmFsZG8iLCJwYXNzIjoiRGlya3NlbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyMzU1MjgwOSwiZXhwIjoxNzIzNTU2NDA5fQ.IFVLtGaJIYYqkjuiEFYBKaL-oL1HkANmcYSf8Lq5Uqw" \
-d '{
    "registrationDate": "2024-08-12",
    "model": "Model X",
    "type": "Cybertruck",
    "registrationNumber": "ARUBA123",
    "color": "Red",
    "buildYear": 2024,
    "brand": "Tesla",
    "registeredBy": "Rey Croes"
}'


# curl -X GET http://localhost:1234/api/cars \
# -H "Content-Type: application/json" \
# -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUmV5bmFsZG8iLCJwYXNzIjoiRGlya3NlbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyMzU1MjgwOSwiZXhwIjoxNzIzNTU2NDA5fQ.IFVLtGaJIYYqkjuiEFYBKaL-oL1HkANmcYSf8Lq5Uqw"
