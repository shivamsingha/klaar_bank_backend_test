# Bank Branches Database API

## API
### **GET** /api/branches/autocomplete
```/api/branches/autocomplete?q=Delhi&limit=3&offset=2```
#### Request Params
Key|Value|Description
---|---|---
q|Delhi|Search Query
limit|3|Number of results per page
offset|2|Number of results to skip
page||Page number
#### Example
**curl**
```bash
curl --location --request GET 'localhost:3000/api/branches/autocomplete?q=Delhi&limit=3&offset=2'
```
**Result**
```json
{
    "branches": [
        {
            "ifsc": "ABNA0100328",
            "bank_id": 110,
            "branch": "GK 1  NEW DELHI",
            "address": "R-67, GREATER KAILASH-I, NEW DELHI - 110048",
            "city": "DELHI",
            "district": "NEW DELHI",
            "state": "DELHI"
        },
        {
            "ifsc": "ABNA0100329",
            "bank_id": 110,
            "branch": "RAJOURI GARDEN  NEW DELHI",
            "address": "J-12/11 RAJOURI GARDEN,NEW DELHI-110027",
            "city": "DELHI",
            "district": "NEW DELHI",
            "state": "DELHI"
        },
        {
            "ifsc": "ALLA0210163",
            "bank_id": 11,
            "branch": "PARLIAMENT STREET  NEW DELHI",
            "address": ",17 PARLIAMENT STREET NEW DELHI",
            "city": "DELHI",
            "district": "NEW DELHI",
            "state": "DELHI"
        }
    ]
}
``` 

### **GET** /api/branches
```/api/branches?q=Bangalore&limit=3&offset=2```
#### Request Params
Key|Value|Description
---|---|---
q|Bangalore|Search Query
limit|3|Number of results per page
offset|2|Number of results to skip
page||Page number
#### Example
**curl**
```bash
curl --location --request GET 'localhost:3000/api/branches?q=Bangalore&limit=3&offset=2''
```
**Result**
```json
{
    "branches": [
        {
            "ifsc": "ALLA0210217",
            "bank_id": 11,
            "branch": "K. G. ROAD",
            "address": "NO. 2, FKCCI BUILDING , K G ROAD , BANGALORE",
            "city": "BANGALORE",
            "district": "BANGALORE URBAN",
            "state": "KARNATAKA"
        },
        {
            "ifsc": "ALLA0210326",
            "bank_id": 11,
            "branch": "BANGALORE BASAVANGUDI",
            "address": "121, RM COMPLEX, DR.D.V.GUNDAPPA ROAD, BASAVANGUDI, BANGALORE - 560004",
            "city": "BANGALORE",
            "district": "BANGALORE URBAN",
            "state": "KARNATAKA"
        },
        {
            "ifsc": "ALLA0211155",
            "bank_id": 11,
            "branch": "BANGALORE TASKER TOWN",
            "address": "180, SHIVAJI ROAD, SHIVAJI NAGAR, BANGALORE - 560051",
            "city": "BANGALORE",
            "district": "BANGALORE URBAN",
            "state": "KARNATAKA"
        }
    ]
}
``` 

## Usage
1. Install dependencies

```yarn install```

2. Build

```yarn build```

3. Set environment variable for database url

```bash
export DATABASE_URL="postgresql://postgres:password@localhost:5432/database_name?schema=public"
```

4. Create tables

```yarn prisma:migrate```

5. Import SQL dump into PostgreSQL from [https://github.com/snarayanank2/indian_banks/blob/master/indian_banks.sql](https://github.com/snarayanank2/indian_banks/blob/master/indian_banks.sql)
```bash
wget "https://raw.githubusercontent.com/snarayanank2/indian_banks/master/indian_banks.sql"
psql database_name < indian_banks.sql
```

5. Start the server

```yarn start```