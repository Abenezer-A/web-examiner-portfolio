from flask import Flask, render_template,request, flash, url_for, session, redirect
import psycopg2
import psycopg2.extras
import re


app = Flask(__name__)
app.secret_key = 'abenezer-alemayehu'

DB_HOST = "localhost"
DB_NAME = "student"
DB_USER = "postgres"
DB_PASS = "95123"


conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)

@app.route('/quiz')
def home():
   # check if user is loggedin
   if 'loggedin' in session:
   
      #user is loggedin show them the home page
      return render_template('quiz.html')
   return redirect(url_for('index'))
   

@app.route('/', methods=['GET', 'POST'])
def index():
    cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
   #check if "username", "password" and "code" POST requests exist (user submitted request.form)
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form and 'code' in request.form:
        username = request.form['username']
        password = request.form['password']
        code = request.form['code']
        
      #check if account exists 
        cursor.execute('SELECT * FROM users WHERE name = %s', (username,))
        cursor.execute('SELECT * FROM users WHERE password = %s', (password,))
        account = cursor.fetchone()

    
    # if account exists show error and validation checks
        if account:
            session['loggedin'] = True
            session['id'] = account['id']
            session['username'] = account['name']
            session['password'] = account['password']
            from Attendance import Attendance
            Attendance()
        else:
            flash('Incorrect username/password')
        
    return render_template('index.html')


if __name__ == '__main__':
  app.run(debug=True)
