# Simple Bulletin Board #
## Installation ##
* python 3.11.5
* Django 4.2.5
* Next.js v13.4.19
* Node v18.17.1
* Typescript 5.2.2
* Tailwind CSS 3.3.3



# FrontEnd #
`cd client`

_install dependencies_
`npm install`

_run server_
`npm run dev`

visit url: http://localhost:3000/article


# BackEnd #
_create your virtual environment first_
`python3 -m venv myenv` 

_activate_
`source myenv/bin/activate` for Mac
`.\myenv\Scripts\activate` for Windows

`cd backend` 

_install requirements.txt_
`pip install -r requirements.txt` 

_load seeders_
`python3 manage.py loaddata article_seeder.json`

_migrate_
`python3 manage.py migrate`



