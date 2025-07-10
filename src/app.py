from flask import Flask, render_template
from markupsafe import escape #use to escape user input?

#Consider using blueprint for file pathways. app.route()


app = Flask(__name__)

#app.route default accesses html pages in templates folder
@app.route("/")
def index():
    return render_template('work.html', active_page='work')

@app.route("/about")
def about():
    return render_template('about.html', active_page='about')

@app.route("/work")
def work():
    return render_template('work.html', active_page='work')

@app.route("/resume")
def resume():
    return render_template('resume.html', active_page = 'resume')

@app.errorhandler(404)
def pageNotFound(e): #take error as input
    return render_template('404.html')

if(__name__ == "__main__"):
    app.run(debug=True)
