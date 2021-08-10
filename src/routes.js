import React from 'react';

//import AddEtudiant from './project/Donnees/Etudiant/AddEtudiant';
//import { updateEtudiant_URL } from './project/services/constant';


const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));



//my project components
const CreateUser = React.lazy(()=> import ('./project/CreateUser'));
const TableEtudiant = React.lazy(() => import('./project/Donnees/Etudiant/TableEtudiant'));
const AddEtudiant = React.lazy(() => import ('./project/Donnees/Etudiant/AddEtudiant'));
const UpdateEtudiant = React.lazy(() => import ('./project/Donnees/Etudiant/UpdateEtudiant'));

const TableEnseignant = React.lazy(() => import('./project/Donnees/Enseignant/TableEnseignant'));
const AddEnseignant = React.lazy(() => import ('./project/Donnees/Enseignant/AddEnseignant'));
const UpdateEnseignant = React.lazy(() => import ('./project/Donnees/Enseignant/UpdateEnseignant'));

const TableClasse = React.lazy(() => import("./project/Donnees/Classe/TableClasse"));

const TableDepartement = React.lazy(() => import('./project/Donnees/Departement/TableDepartement'));
const AddDepartement = React.lazy(() => import ('./project/Donnees/Departement/AddDepartement'));
const UpdateDepartement = React.lazy(() => import ('./project/Donnees/Departement/UpdateDepartement'));


const TableFiliere = React.lazy(() => import('./project/Donnees/Filiere/TableFiliere'));
const AddFiliere = React.lazy(() => import ('./project/Donnees/Filiere/AddFiliere'));
const UpdateFiliere = React.lazy(() => import ('./project/Donnees/Filiere/UpdateFiliere'));


const TableMatiere = React.lazy(() => import('./project/Donnees/Matiere/TableMatiere'));
const AddMatiere = React.lazy(() => import ('./project/Donnees/Matiere/AddMatiere'));
const UpdateMatiere = React.lazy(() => import ('./project/Donnees/Matiere/UpdateMatiere'));


const TableModule = React.lazy(() => import('./project/Donnees/Module/TableModule'));
const AddModule = React.lazy(() => import ('./project/Donnees/Module/AddModule'));
const UpdateModule = React.lazy(() => import ('./project/Donnees/Module/UpdateModule'));


const TableDevoir = React.lazy(() => import('./project/Donnees/Devoirs/TableDevoirs'));
const AddDevoir = React.lazy(() => import ('./project/Donnees/Devoirs/AddDevoir'));
const UpdateDevoir = React.lazy(() => import ('./project/Donnees/Devoirs/UpdateDevoir'));
const TableSalle = React.lazy(() => import('./project/Donnees/Salle/TableSalle'));
const AddSalle = React.lazy(() => import ('./project/Donnees/Salle/AddSalle'));
const UpdateSalle = React.lazy(() => import ('./project/Donnees/Salle/UpdateSalle'));

const TableCours = React.lazy(() => import('./project/Donnees/Cours/TableCours'));
const AddCours = React.lazy(() => import ('./project/Donnees/Cours/AddCours'));
const UpdateCours = React.lazy(() => import ('./project/Donnees/Cours/UpdateCours'));

const Profile = React.lazy(() => import ('./project/components/Profile'));

const TimeTable = React.lazy(() => import('./project/Donnees/TimeTable/TimeTable'));

const Attestation = React.lazy(() => import('./project/Donnees/attestation/attestation'))
const userss = React.lazy(()=>import('./project/Donnees/Administration/utilisateur/TableUser'))
const CalculMoyenne = React.lazy(()=>import('./project/Donnees/noteMoyenne/CalculMoyenne'))
const notes = React.lazy(()=>import('./project/Donnees/moyyyy/notes'))
const TroisMeilleursEtudiants=React.lazy(()=>import('./project/Donnees/moyyyy/troisMeilleursEtudiants'))
const TablematiereEnseig = React.lazy(()=>import('./project/Donnees/matieres/TablematiereEnseig'))
const SaisiDesNotes = React.lazy(()=>import('./project/Donnees/moyyyy/SaisiDesNotes'))
const ClasseNotes = React.lazy(()=>import('./project/Donnees/moyyyy/classeNotes'))
const MoyenneGenerale = React.lazy(()=>import('./project/Donnees/moyyyy/moyenneGenerale'))
const ListeEtudiantsRachte = React.lazy(()=>import('./project/Donnees/moyyyy/listeRachte'))

const StageMenu = React.lazy(() => import("./project/Donnees/Stage/StageMenu"));
const FormulaireDemendeDeStage = React.lazy(() => import("./project/Donnees/Stage/FormulaireDemendeDeStage"));
const Deposer = React.lazy(() => import("./project/Donnees/Stage/Deposer"));
const Entreprise = React.lazy(() => import("./project/Donnees/Stage/Entreprise"));
const StageAncien = React.lazy(() => import("./project/Donnees/Stage/StageAncien"));
const DetailSoutenance = React.lazy(() => import("./project/Donnees/Stage/DetailSoutenance"));
const Soutenance = React.lazy(() => import("./project/Donnees/Stage/Soutenance"));
const ListeSoutenances = React.lazy(() => import("./project/Donnees/Stage/ListeSoutenances"));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },



  //my routes
  {path : '/createuser', exact:true, name: 'Create User', component:CreateUser},
  {path: '/donnee', name: 'Donnee', exact: true },
  {path : '/donnee/TableEtudiant', name: 'Etudiant', component:TableEtudiant},
  {path : '/AddEtudiant', name: 'Create Etudiant', component:AddEtudiant},
  {path : '/UpdateEtudiant', name: 'update Etudiant', component:UpdateEtudiant}, 


  {path : '/donnee/TableClasse', name: 'Classe', component: TableClasse},


  { path: '/donnee', name: 'Donnee', exact: true },
  {path : '/donnee/TableEnseignant', name: 'Enseignant', component:TableEnseignant},
  {path : '/AddEnseignant', name: 'Create Enseignant', component:AddEnseignant},
  {path : '/UpdateEnseignant', name: 'update Enseignant', component:UpdateEnseignant},


  { path: '/donnee', name: 'Donnee',  exact: true },
  {path : '/donnee/TableDepartement', name: 'Departement', component:TableDepartement},
  {path : '/AddDepartement', name: 'Create Departement', component:AddDepartement},
  {path : '/UpdateDepartement', name: 'update Departement', component:UpdateDepartement},


  { path: '/donnee', name: 'Donnee',  exact: true },
  {path : '/donnee/TableFiliere', name: 'Filiere', component:TableFiliere},
  {path : '/AddFiliere', name: 'Create Filiere', component:AddFiliere},
  {path : '/UpdateFiliere', name: 'update Filiere', component:UpdateFiliere},


  { path: '/donnee', name: 'Donnee', exact: true },
  {path : '/donnee/TableSalle', name: 'Salle', component:TableSalle},
  {path : '/AddSalle', name: 'Create Salle', component:AddSalle},
  {path : '/UpdateSalle', name: 'update Salle', component:UpdateSalle},


  { path: '/donnee', name: 'Donnee',  exact: true },
  {path : '/donnee/TableMatiere', name: 'Matiere', component:TableMatiere},
  {path : '/AddMatiere', name: 'Create Matiere', component:AddMatiere},
  {path : '/UpdateMatiere', name: 'update Matiere', component:UpdateMatiere},


  { path: '/donnee', name: 'Donnee',  exact: true },
  {path : '/donnee/TableModule', name: 'Module', component:TableModule},
  {path : '/AddModule' ,name: 'Create Module', component:AddModule},
  {path : '/UpdateModule', name: 'update Module', component:UpdateModule},

  { path: '/donnee', name: 'Donnee',  exact: true },
  {path : '/donnee/TableCours', name: 'Cours', component:TableCours},
  {path : '/AddCours' ,name: 'Create Cours', component:AddCours},
  {path : '/UpdateCours', name: 'update Cours', component:UpdateCours},

  {path : '/profile', name: 'profile', component:Profile},

  { path: '/timeTable', name: 'TimeTable',  exact: true },
  {path : '/timeTable/etudiant', name: 'Cours', component:TimeTable},

  {path : '/attestation', name:'attestation', component:Attestation},
  {path:'/userss' , name: 'users' , component:userss},

  { path: '/donnee', name: 'Donnee',  exact: true },
  {path : '/donnee/TableDevoir', name: 'Cours', component:TableDevoir},
  {path : '/AddDevoir' ,name: 'Create devoir', component:AddDevoir},
  {path : '/UpdateDevoir', name: 'update devooir', component:UpdateDevoir},

 {path : '/CalculMoyenne', name: 'CalculMoyenne', component:CalculMoyenne},

 {path : '/TablematiereEnseig', name: 'matiereEnseig', component:TablematiereEnseig},
 {path : '/notes/troisMeilleursEtudiants', name: 'Notes', component:TroisMeilleursEtudiants},
 {path : '/notes/SaisiDesNotes', name: 'Notes', component:SaisiDesNotes},
 {path : '/notes/classe/:nom_classe/ListeEtudiantsRachte', name: 'Notes', component:ListeEtudiantsRachte},
 {path : '/notes/classe/:nom_classe', name: 'Notes', component:ClasseNotes},
 {path : '/notes/moyenneGenerale/:nom_classe', name: 'Notes', component:MoyenneGenerale},
 {path : '/notes', name: 'Notes', component:notes},

 { path: "/stages/formulaireDemendeDeStage", name: "Formulaire Demende de Stage", component: FormulaireDemendeDeStage },
 { path: "/stages/deposer/:type_stage", name:"Deposer Stage", component: Deposer },
 { path: "/stages/entreprises", name:"Entreprise", component: Entreprise },
 { path: "/stages/ancien", name: "Stage Ancien", component: StageAncien },
 { path: "/stages/soutenance", name: "Soutenance", component: Soutenance },
 { path: "/stages/listeSoutenances", name: "Liste Soutenances", component: ListeSoutenances },
 { path: "/stages/detailsSoutenance/:stage_id", name: "Detail Soutenance", component: DetailSoutenance },
 { path: "/stages", name: "Stages", component: StageMenu }



];

export default routes;

