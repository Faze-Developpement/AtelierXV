export type Categorie =
  | "Logement collectif"
  | "Logement individuel"
  | "ERP"
  | "Intervention sur l'existant"
  | "Commerces & bureaux"
  | "Aménagement"

export interface Projet {
  slug: string
  titre: string
  categorie: Categorie
  localisation: string
  annee: number
  surface: string
  maitreOuvrage: string
  description: string
  descriptionLongue: string
}

export const PROJETS: Projet[] = [
  {
    slug: "residence-les-terrasses",
    titre: "Résidence Les Terrasses",
    categorie: "Logement collectif",
    localisation: "Mont-Saint-Aignan",
    annee: 2023,
    surface: "2 400 m²",
    maitreOuvrage: "Promoteur privé",
    description: "24 logements collectifs en R+4 sur un terrain en pente, avec terrasses filantes et toiture végétalisée.",
    descriptionLongue: "Implantée sur un terrain pentu à Mont-Saint-Aignan, cette résidence de 24 logements tire parti de la topographie pour offrir à chaque appartement une terrasse filante plein sud. La façade en brique claire dialogue avec le tissu pavillonnaire environnant. La toiture végétalisée assure la gestion des eaux pluviales et améliore l'isolation thermique de l'ensemble.",
  },
  {
    slug: "villa-normandie",
    titre: "Villa Normandie",
    categorie: "Logement individuel",
    localisation: "Rouen",
    annee: 2022,
    surface: "220 m²",
    maitreOuvrage: "Particulier",
    description: "Maison individuelle contemporaine sur une parcelle arborée, toiture mono-pente et grandes baies vitrées orientées jardin.",
    descriptionLongue: "Cette maison individuelle s'inscrit dans un cadre arboré en périphérie de Rouen. La volumétrie simple — un volume unique à toiture mono-pente — s'ouvre largement sur le jardin grâce à des baies vitrées de sol en plafond. Les matériaux locaux — bois, enduit chaux et ardoise — ancrent le projet dans la tradition normande tout en l'inscrivant dans une contemporanéité assumée.",
  },
  {
    slug: "mediatheque-bois-guillaume",
    titre: "Médiathèque de Bois-Guillaume",
    categorie: "ERP",
    localisation: "Bois-Guillaume",
    annee: 2023,
    surface: "1 800 m²",
    maitreOuvrage: "Commune de Bois-Guillaume",
    description: "Médiathèque de 1 800 m² en cœur de bourg, restructuration et extension d'un bâtiment existant des années 1970.",
    descriptionLongue: "La commune de Bois-Guillaume souhaitait moderniser et agrandir sa médiathèque centrale, construite dans les années 1970. Le projet conserve le bâtiment existant dont il révèle la structure béton, et lui adjoint une extension contemporaine en ossature bois. L'ensemble est unifié par un traitement de façade commun en bardage bois lasuré, et s'organise autour d'un patio intérieur lumineux.",
  },
  {
    slug: "rehabilitation-immeuble-leclerc",
    titre: "Réhabilitation Immeuble Leclerc",
    categorie: "Intervention sur l'existant",
    localisation: "Rouen",
    annee: 2021,
    surface: "1 100 m²",
    maitreOuvrage: "Bailleur social",
    description: "Réhabilitation thermique et restructuration de 18 logements sociaux des années 1960, avec mise aux normes accessibilité.",
    descriptionLongue: "Cet immeuble de logements sociaux des années 1960 présentait d'importantes déperditions thermiques et une accessibilité insuffisante. La mission comprend l'isolation thermique par l'extérieur, le remplacement des menuiseries, la restructuration partielle des parties communes et l'installation d'un ascenseur. Le traitement de façade, sobre et contemporain, restitue une identité forte à cet ensemble.",
  },
  {
    slug: "espace-commercial-quai-de-seine",
    titre: "Espace Commercial Quai de Seine",
    categorie: "Commerces & bureaux",
    localisation: "Rouen",
    annee: 2024,
    surface: "650 m²",
    maitreOuvrage: "Foncière privée",
    description: "Aménagement d'un espace commercial en rez-de-chaussée d'un immeuble haussmannien, intégrant 4 cellules modulables.",
    descriptionLongue: "Ce projet porte sur l'aménagement de 650 m² commerciaux en rez-de-chaussée d'un immeuble haussmannien en bord de Seine. Quatre cellules modulables ont été créées, pouvant être réunies en un unique plateau. La façade a été restituée dans son écriture haussmannienne d'origine, tandis que les espaces intérieurs adoptent un langage contemporain qui met en valeur les volumes existants.",
  },
  {
    slug: "amenagement-hall-prefecture",
    titre: "Aménagement Hall Préfecture",
    categorie: "Aménagement",
    localisation: "Rouen",
    annee: 2022,
    surface: "340 m²",
    maitreOuvrage: "Préfecture de Seine-Maritime",
    description: "Refonte complète du hall d'accueil de la préfecture : mobilier, signalétique, éclairage et circulation.",
    descriptionLongue: "La préfecture de Seine-Maritime souhaitait moderniser son hall d'accueil pour améliorer l'accueil du public et rationaliser les flux. Le projet inclut la conception du mobilier sur mesure, la refonte de la signalétique, une nouvelle conception lumière et la réorganisation des circulations. Les matériaux choisis — pierre de Caen, bois de chêne, métal peint — s'inscrivent dans la dignité du bâtiment tout en lui conférant une modernité discrète.",
  },
]

export const CATEGORIES: Categorie[] = [
  "Logement collectif",
  "Logement individuel",
  "ERP",
  "Intervention sur l'existant",
  "Commerces & bureaux",
  "Aménagement",
]
