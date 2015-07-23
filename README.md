# Description
Ce repository contient les futures sources du site BaptisteCarlier.com fabriqué à l'aide de la libraire Polymer 1.+.

Le résultat est un mini-site servant de portfolio pour les développements. Il contient trois pages :
 - Accueil
 - Curriculum vitæ
 - Portfolio de réalisations

Les travaux sont en cours mais la version stable la plus récente est bien là v0.1 : https://github.com/BapNesS/BCCom/releases/tag/v0.1.

Le site en ligne est encore basée sur une ancienne version de Polymer (v0.5) et les sources ne sont pas disponibles.

# Comment l'installer ?
Avant tout, il faut disposer de l'outil `bower`. En suite, la procédure est très simple :
 1. Télécharger la branche :
   - À l'aide de la commande git ou des outils GutHub : https://github.com/BapNesS/BCCom.git
   - À l'aide de l'archive ZIP en prennant la branche princiapele et en la dézippant : https://github.com/BapNesS/BCCom/archive/master.zip
 2. Editer le contenu du fichier `index.html`.
 3. Mettre à jour les dépendances avec la commande `bower update` qui créera le répertoire `bower_components/` à la base du répertoire.
 4. Lancer votre serveur !

# Catalogue d'élements 'ness-' utilisés
- [ness-copyright](https://github.com/BapNesS/ness-copyright)
- [ness-drawer-header](https://github.com/BapNesS/ness-drawer-header)
- [ness-project-card](https://github.com/BapNesS/ness-project-card)
- [ness-resume-item](https://github.com/BapNesS/ness-resume-item)

# Travaux en cours et souhaités
- Dynamisation du contenu des pages _Réalisations_ avec les éléments [iron-list](https://github.com/PolymerElements/iron-list) & [iron-ajax](https://github.com/PolymerElements/iron-ajax).
- Stockage des données chez Firebase et utilisation de l'élément [firebase-element](https://github.com/GoogleWebComponents/firebase-element).
- Correction des bugs restant.
