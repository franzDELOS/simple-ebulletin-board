# Simple Bulletin Board #
## Requirements ##
* python 3.11.5
* Django 4.2.5
* Next.js v13.4.19
* Node v18.17.1
* Typescript 5.2.2
* Tailwind CSS 3.3.3



### FrontEnd ###
1. In the terminal  <br>
`cd client`

2. _install dependencies_ <br>
`npm install`

3. _Create a `.env` file and add this_ <br> `NEXT_PUBLIC_API_BASE_URL = http://127.0.0.1:8000/api/`

4. _run server_ <br>
`npm run dev`

visit url: http://localhost:3000/article


### BackEnd ###
1. _create your virtual environment first_  <br>
`python3 -m venv myenv` 

2. _activate virtual environment_ <br>
`source myenv/bin/activate` for Mac <br>
`.\myenv\Scripts\activate` for Windows

3. `cd backend` 

4. _install requirements.txt_<br>
`pip install -r requirements.txt` 

5. _load seeders_<br>
`python3 manage.py loaddata article_seeder.json`

6. _migrate_<br>
`python3 manage.py migrate`

7. _run server_<br>
`python3 manage.py runserver`
