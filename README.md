## RXJS
A course on RXJS following online lessons from Udemy course taught by Fernando Herrera.


# Basic installation

<ol>
    <li>Once the code is downloaded, use the command <code>npm install</code> to have all necessary modules</li>
    <li>After installing the node_modules, run <code>npm start</code> command. For this command to work, remember to run this command in the same directory where the <code>package.json</code> is located</li>
</ol>


# Change the port

<p>Default port is <code>8081</code> for this project. If you need to change it, go to <code>package.json</code> scripts and check the instruction that launches development server </p>

<code>"start": "webpack serve --mode development --open --port=8081"</code>

<p>Just change the port for the one you need to use and that's all. Then, run <code>npm start</code> again.</p>
