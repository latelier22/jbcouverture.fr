export const site = {
  title: 'BRILLANT Jessy COUVERTURE',
  description: 'BRILLANT Jessy COUVERTURE- 0764468692',
  societe : "BRILLANT Jessy COUVERTURE",
  SIRET: "83018036000026",
  contact : "Jessy BRILLANT",
  telephone: "0764468692",
  adresse: "kerbois ",
  codePostal : "56340",
  ville : "CARNAC",
  email : "contact@brillant-couverture.fr",
  logo : {url :"images/logo-barre-du-haut.png", alt :"logo JB COUVERTURE"},
  Logo : {url :"images/logo-banniere.png", alt :"logo JB COUVERTURE"}
};

export const menuItems = [
    { label: "Accueil", route: "/" },
    { label: "Entretien", route: "/entretien" },
    { label: "Réparation", route: "/reparation" },
    { label: "Peinture", route: "/peinture" },
    { label: "Travaux divers", route: "/travaux-divers" },
    { label: "Fuites", route: "/fuites" },
    { label: "Gouttières", route: "/gouttieres" },
    { label: "Ramonage", route: "/ramonage" },
    { label: "Contact", route: "/contact" },
  ];

export const listesActions =[
    {
      title : "ENTRETIEN",
      subTitle : "Entretenez vos jardins grâce à nos services :",
      photo : { url: "Rectangle_8.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : ["Élagage","Entretien de pelouse","Désherbage","Petit aménagement jardin"
        ]
    },{
      title : "ELAGUAGE",
      subTitle : "Prenez soins de vos arbres grâce à notre Élagueur :",
      photo : { url: "Tailler-les-haies-et-buissons-.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : ["entretien régulier, en respectant la forme de l’arbre et en le stimulant.",
      "Éviter la poussé des arbres adultes", "limite le développement des arbres enles maintenant dans une forme donnée."
        ]
    }
    ,
    {
      title : "PELOUSE",
      subTitle : "Entretenez vos jardins grâce à nos services :",
      photo : { url: "jambes-feminines-femme-aide-to.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : [
      "Coupe de votre herbe quelque sois la hauteur",
      "Nettoyage des résidus de tonte",
      " Envoie a la déchèterie"
        ]
    }
    
    ,{
      title : "DESHERBAGE",
      subTitle : "Retirer vos mauvaise herbe avec nos technique de désherbage :",
      photo : { url: "imagepng.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : ["Désherbage mécanique : Utilisation d'outils comme des binettes, des houes ou des désherbeurs pour enlever les mauvaises herbes. Les outils mécaniques facilitent le travail, surtout dans de grandes zones."
      ,"Désherbage chimique : Utilisation de produits chimiques, tels que des herbicides, pour tuer les mauvaises herbes. Il est essentiel de suivre les instructions et de prendre des précautions lors de l’utilisation de produits chimiques."
        ]
    }
    ,{
      title : "AMENAGEMENT",
      subTitle : "Aménager vos extérieurs pour un espace de détente :",
      photo : { url: "images-2.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : ["Petit aménagement exérieur"
        ]
    },
    {
      title : "TRAVAUX DIVERS",
      subTitle : "Aménager vos extérieurs pour un espace de détente :",
      photo : { url: "images-2.png", alt: "de nombreuses activites pour les petits et les grands" },
      actions : ["Petit aménagement exérieur"
        ]
    }
    ]
    
      
export const Pages = {
      entretien: {
        title: "Entretien",
        description: "Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.",
        photos : [
          { url: "entretien-1.png", alt: "gallery" },
          { url: "entretien-2.png", alt: "gallery" },
          { url: "entretien-3.png", alt: "gallery" },
          { url: "entretien-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4"><li>• Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.</li><li>Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li>
            <li>Pose de bâche en cas d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
          },
        ],
        cards : []
      },
      reparation: {
        title: "Réparation",
        description: "Réparation des toitures, remplacement des tuiles, ardoises, tôles.",
        photos : [
          { url: "reparation-1.png", alt: "gallery" },
          { url: "reparation-2.png", alt: "gallery" },
          { url: "reparation-3.png", alt: "gallery" },
          { url: "reparation-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4">
            <li>• Réparation des toitures, remplacement des tuiles, ardoises, tôles.</li>
            <li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li>
            <li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li>
            </ul>
          },
        ],
        cards : []
      },
      peinture: {
        title: "Peinture",
        description: "Peinture boiseries, peinture sur toitures.",
        photos : [
          { url: "peinture-1.png", alt: "gallery" },
          { url: "peinture-2.png", alt: "gallery" },
          { url: "peinture-3.png", alt: "gallery" },
          { url: "peinture-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4">
            <li>• Peinture boiseries, peinture sur toitures.</li>
            <li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li>
            <li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li>
            </ul>
          },
        ],
        cards : []
      },
      "travaux-divers": {
        title: "travaux divers",
        description: "Petits travaux de maçonnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse.",
        photos : [
          { url: "travaux-divers-1.png", alt: "gallery" },
          { url: "travaux-divers-2.png", alt: "gallery" },
          { url: "travaux-divers-3.png", alt: "gallery" },
          { url: "travaux-divers-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4"><li>• Petits travaux de maçonnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
          },
          {
            title: "NOS SAVOIR FAIRE 2:",
            body : <ul className="list-disc pl-4"><li>• Petits travaux de maçonnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
          },
          
        ],
        cards : []
      },
      
      "fuites": {
        title: "Fuites",
        description: "Contenu pour la page de réparation...",
        photos : [
          { url: "fuites-1.png", alt: "gallery" },
          { url: "fuites-2.png", alt: "gallery" },
          { url: "fuites-3.png", alt: "gallery" },
          { url: "fuites-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4"><li>• Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
          },
        ],
        cards : [
          
        ],
      },
      "gouttieres": {
        title: "Gouttières",
        description: "Contenu pour la page de réparation...",
        photos : [
          { url: "gouttiere-1.png", alt: "gallery" },
          { url: "gouttiere-2.png", alt: "gallery" },
          { url: "gouttiere-3.png", alt: "gallery" },
          { url: "gouttiere-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <ul className="list-disc pl-4"><li>• Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises.</li><li>• Intervention 7/7 J - 24/24h en cas d’urgences ou fuites de votre toiture.</li><li>• Pose de bâche en d’urgence, mise hors d’eau, remplacement des tuiles, ardoises..</li></ul>
          },
        ],
        cards : [
          
        ],
      },
      "ramonage": {
        title: "Ramonage",
        description: "Contenu pour la page de ramonage...",
        photos : [
          { url: "ramonage-1.png", alt: "gallery" },
          { url: "ramonage-2.png", alt: "gallery" },
          { url: "ramonage-3.png", alt: "gallery" },
          { url: "ramonage-4.png", alt: "gallery" },
        ],
        sections : [
          {
            title: "NOS SAVOIR FAIRE :",
            body : <>
            <h1 class="text-3xl font-bold mb-4">Service de Ramonage de Cheminées</h1>

<p class="text-lg mb-6">Gardez votre cheminée propre et sécurisée avec notre service de ramonage professionnel.</p>

<p class="text-lg mb-6">Le ramonage régulier de votre cheminée est essentiel pour assurer un fonctionnement sûr et efficace de votre système de chauffage. Chez Brillant COUVERTURE, nous proposons un service complet de ramonage de cheminées pour les propriétaires résidentiels et commerciaux.</p>

<h2 class="text-2xl font-bold mb-2">Nos services comprennent :</h2>
<ul class="list-disc pl-8 mb-6">
  <li>Ramonage complet : Nous éliminons efficacement les dépôts de suie, de cendres et de goudron accumulés dans votre cheminée, réduisant ainsi les risques d&apos;incendie et d&apos;émissions de gaz dangereux.</li>
  <li>Inspection visuelle : Nos techniciens effectuent une inspection visuelle détaillée de votre cheminée pour repérer les signes de dommages, de fuites ou de dysfonctionnements éventuels.</li>
  <li>Nettoyage des conduits : Nous nettoyons également les conduits de fumée pour garantir une circulation d&apos;air optimale et une combustion efficace.</li>
  <li>Conseils d&apos;entretien : Nous vous fournissons des conseils d&apos;entretien personnalisés pour prolonger la durée de vie de votre cheminée et garantir son bon fonctionnement tout au long de l&apos;année.</li>
</ul>

<h2 class="text-2xl font-bold mb-2">Pourquoi nous choisir :</h2>
<ul class="list-disc pl-8 mb-6">
  <li>Professionnalisme : Nos techniciens qualifiés et expérimentés assurent un service professionnel et fiable à chaque visite.</li>
  <li>Sécurité : Nous accordons la plus haute priorité à la sécurité de nos clients et de leurs propriétés, en respectant toutes les normes et réglementations en vigueur.</li>
  <li>Service clientèle : Notre équipe amicale est là pour répondre à toutes vos questions et vous fournir une assistance personnalisée à chaque étape du processus.</li>
</ul>

<p class="text-lg">Ne laissez pas l&apos;accumulation de suie compromettre la sécurité de votre maison. Contactez-nous dès aujourd&apos;hui pour planifier votre prochain ramonage de cheminée avec Brillant COUVERTURE.</p>

            </>
          },
        ],
        cards : [
          
        ],
      },
      // Ajoutez d'autres données au besoin
    };
    
   