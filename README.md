# Logidons-2019
Site web de gestion de dons et de distribution de donations. 

Le tutoriel utilisé:
Partie 1
https://www.youtube.com/watch?v=R2dOyHJu4a8
Partie 2
https://www.youtube.com/watch?v=8tMmqswQTl0

git add .
git commit -m "message"

git pull
git push

Ouvrir le WebAPI
Double cliquer sur DBModel.edmx
Clique droit sur le diagramme > Generate database from model
Cliquer Previous > New Connection
. > "Select or enter database name: " LogiDons > Ok
Ensuite executer le script "DDL" dans SQL Server

dans le projet AngularSite dans le cmd il faut installer angular
npm install -g angular-cli

Executer le site AngularSite:
Ouvrir le cmd ou terminal de VS Code dans le dossier AngularSite > entrez
ng serve --o
pour arreter le site > tenir les touches
Ctrl + c

Les modeles et services: 
ng g s shared/non-de-la-classe --spec=false
ng g cl shared/non-du-la-classe type=model --spec=false
