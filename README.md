## API ENDPOINTS


### Base URl =>
```
https://ddu-master-api-sql.onrender.com
```

### SEM4 (ddu)
#### method: GET
/api/v1/find/sem4/:rollNumber

example
```
https://ddu-master-api-sql.onrender.com/api/v1/find/sem4/10
```

### SEM5 (ddu)
#### method: GET
/api/v1/find/sem5/:rollNumber

example
```
https://ddu-master-api-sql.onrender.com/api/v1/find/sem5/10
```

### TJ PATEL (batch 2023-24)
method: POST

/api/v1/find/tjpatel

example
```
https://ddu-master-api-sql.onrender.com/api/v1/find/tjpatel
```
body (payload)
```
"spid": "last three digits of spid"
```

### CHARUSAT (batch 2023-24, AI ML Batch)

method: GET

/api/v1/find/charusat/:roll_numebr

example
```
https://ddu-master-api-sql.onrender.com/api/v1/find/charusat/15
```

### ADMIN MODE
#### SEM 5 (ddu)

method: POST

/api/v1/admin/find/sem5/:rollnumber

example
```
https://ddu-master-api-sql.onrender.com/api/v1/admin/find/sem5/15
```
body (payload)
```
"admin_key": "ENTER YOUR ADMIN KEY"
```

#### Central database (ddu batch 2023-24, BCA)
method: POST

/api/v1/admin/find/central

example
```
https://ddu-master-api-sql.onrender.com/api/v1/admin/find/central
```
body (payload)
```
"admin_key": "ENTER YOUR ADMIN KEY"
"studentId": "10 digits student id"
```
#### batch 2024-25 (ddu , BCA)
method: POST

api/v1/admin/find/batch-2024-25

example
```
https://ddu-master-api-sql.onrender.com/api/v1/admin/find/batch-2024-25
```
body (payload)
```
"admin_key": "ENTER YOUR ADMIN KEY",
"admission_no": 5
```