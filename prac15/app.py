from flask import Flask, session, redirect, url_for, request, render_template_string
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'super_secret_key_for_library_portal'

# --- HTML TEMPLATES AS STRINGS ---

login_page = '''
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Library Portal Login</title>
<style>
    body {
        background: linear-gradient(135deg, #74ABE2, #5563DE);
        font-family: 'Poppins', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    .card {
        background: #fff;
        padding: 2.5rem 3rem;
        border-radius: 1.2rem;
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        text-align: center;
        width: 360px;
        animation: fadeIn 0.6s ease-in;
    }
    h1 {
        margin-bottom: 1.5rem;
        color: #333;
    }
    input[type="text"] {
        width: 80%;
        padding: 0.8rem;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        font-size: 1rem;
    }
    input[type="submit"] {
        background: #5563DE;
        color: white;
        border: none;
        padding: 0.8rem 2rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s;
    }
    input[type="submit"]:hover {
        background: #3544B1;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>
</head>
<body>
    <div class="card">
        <h1>📚 Library Portal</h1>
        <form method="POST">
            <input type="text" name="username" placeholder="Enter your name" required><br>
            <input type="submit" value="Login">
        </form>
    </div>
</body>
</html>
'''

profile_page = '''
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Profile</title>
<style>
    body {
        background: linear-gradient(135deg, #FFDEE9, #B5FFFC);
        font-family: 'Poppins', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    .card {
        background: #fff;
        padding: 2rem 3rem;
        border-radius: 1.2rem;
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        text-align: center;
        width: 420px;
        animation: pop 0.5s ease-in;
    }
    h2 {
        margin-bottom: 0.8rem;
        color: #333;
    }
    p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        color: #555;
    }
    a {
        text-decoration: none;
        background: #E63946;
        color: white;
        padding: 0.7rem 1.5rem;
        border-radius: 0.5rem;
        transition: 0.3s;
    }
    a:hover {
        background: #B81F30;
    }
    @keyframes pop {
        from { transform: scale(0.95); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
</style>
</head>
<body>
    <div class="card">
        <h2>Welcome, {{ username }} 👋</h2>
        <p>Login Time: <strong>{{ login_time }}</strong></p>
        <a href="/logout">Logout</a>
    </div>
</body>
</html>
'''

logout_page = '''
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Logged Out</title>
<style>
    body {
        background: linear-gradient(120deg, #F6D365, #FDA085);
        font-family: 'Poppins', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    .card {
        background: #fff;
        padding: 2rem 3rem;
        border-radius: 1rem;
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        text-align: center;
    }
    h3 {
        color: #333;
        margin-bottom: 1rem;
    }
    a {
        text-decoration: none;
        background: #5563DE;
        color: white;
        padding: 0.7rem 1.4rem;
        border-radius: 0.5rem;
        transition: 0.3s;
    }
    a:hover {
        background: #3544B1;
    }
</style>
</head>
<body>
    <div class="card">
        <h3>You have been logged out successfully!</h3>
        <a href="/">Return to Login</a>
    </div>
</body>
</html>
'''

# --- ROUTES ---

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        session['username'] = username
        session['login_time'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        return redirect(url_for('profile'))
    return render_template_string(login_page)

@app.route('/profile')
def profile():
    if 'username' in session:
        return render_template_string(profile_page, username=session['username'], login_time=session['login_time'])
    return redirect(url_for('login'))

@app.route('/logout')
def logout():
    session.clear()
    return render_template_string(logout_page)

if __name__ == '__main__':
    app.run(debug=True)
