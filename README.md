Lien vers le frontend déployé : https://archiappclient-production.up.railway.app
Lien vers le backend déployé : https://archiapp-production.up.railway.app
Lien vers le github : https://github.com/elsgit43/ArchiApp

Pour stocker les messages, j'ai choisi d'utiliser un objet javascript, avec une propriété usr pour stocker le pseudo, une propriété msg pour stocker une message, et une propriété date. Le frontend récupère le pseudo et le message, l'envoie au backend via /msg/post. Pour prendre en charge le message via le backend, j'utilise le format d'url : /msg/post/{usr}/{msg}. Cela me permet de récupérer facilement le pseudo et le message. La date du message est ensuite associée au message avant d'être sauvegardée dans le backend.

Pour déployer le micro-service et l'appli web, j'ai tout d'abord essayé sur Render, mais le plan gratuit nécessitait quand même une Carte Bancaire, j'ai donc opté pour Railway. J'ai déployé dessus mon micro-service, puis l'appli web avec l'URL du backend.

Dans le backend, j'ai ajouté une option pour pouvoir supprimer des messages, mais elle n'est pas implémentée pour pouvoir supprimer des messages depuis le fronted. 