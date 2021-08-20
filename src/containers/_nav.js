import React from 'react'
export const nav_etudiant =  [{
    _tag: 'CSidebarNavDropdown',
    name: <div>
      <div className="hexagon-menu clear">
          <div className="hexagon-item">
              <div className="hex-item">
                  <div></div>
                  <div></div>  
                  <div></div>
              </div>
              <div className="hex-item">
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
              <a target="_blank" class="hex-content">
                  <span className="hex-content-inner">
                      <span className="icon">
                          <i className="fa fa-universal-access"></i>
                      </span>
                      <span className="title">Donnée</span>
                  </span>
                  <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" ><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
              </a>
          </div>
          </div>
    </div>, 
    route: '/donnee',
    _children: [
     
      {
        _tag: 'CSidebarNavItem',
        name: 'PROFILS',
        to: '/profile',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'ATTETSTATION',
        to: '/DemandeAttestation',
        icon: 'cil-people',
      },
    
     
    ]
  },
 
  {
    _tag: 'CSidebarNavDropdown',
    name: <div>
      <div className="hexagon-menu clear">

<div className="hexagon-item">
    <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <a target="_blank" class="hex-content">
    <span className="hex-content-inner">
    <span className="icon">
        <i className="fa fa-id-badge"></i>
    </span>
    <span className="title">MOYENNE</span>
    </span>
    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
    </a>
</div>
</div>
    </div>, 
    route: '/MOYENNE',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'MOYENNE ',
        to: '/notes',
        icon: 'cil-people',
      },
    
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: <div>
      <div className="hexagon-menu clear">

<div className="hexagon-item">
    <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <a target="_blank" class="hex-content">
    <span className="hex-content-inner">
    <span className="icon">
        <i className="fa fa-id-badge"></i>
    </span>
    <span className="title">Stage et <br></br>Soutenance</span>
    </span>
    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
    </a>
</div>
</div>
    </div>, 
    route: '/stages',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'STAGES',
        to: '/stages',
        icon: 'cil-people',
      }
    
    ]
  },
]
export const nav_enseignant = [{
  _tag: 'CSidebarNavDropdown',
  name: <div>
    <div className="hexagon-menu clear">
        <div className="hexagon-item">
            <div className="hex-item">
                <div></div>
                <div></div>  
                <div></div>
            </div>
            <div className="hex-item">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <a target="_blank" class="hex-content">
                <span className="hex-content-inner">
                    <span className="icon">
                        <i className="fa fa-universal-access"></i>
                    </span>
                    <span className="title">Donnée</span>
                </span>
                <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" ><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
            </a>
        </div>
        </div>
  </div>, 
  route: '/donnee',
  _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Devoirs',
      to: '/donnee/TableDevoir',
      icon: 'cil-people',
    },

    {
      _tag: 'CSidebarNavItem',
      name: 'PROFILS',
      to: '/profile',
    },
    
    {
      _tag: 'CSidebarNavItem',
      name: 'Matieres',
      to: '/donnee/TablematiereEnseig',
      icon: 'cil-people',
    },
  ]
},

]
export const nav_admin =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: <div>
      <div className="hexagon-menu clear">
          <div className="hexagon-item">
              <div className="hex-item">
                  <div></div>
                  <div></div>  
                  <div></div>
              </div>
              <div className="hex-item">
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
              <a target="_blank" class="hex-content">
                  <span className="hex-content-inner">
                      <span className="icon">
                          <i className="fa fa-universal-access"></i>
                      </span>
                      <span className="title">Donnée</span>
                  </span>
                  <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" ><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
              </a>
          </div>
          </div>
    </div>, 
    route: '/donnee',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Etudiant',
        to: '/donnee/TableEtudiant',
        icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Enseignants',
        to: '/donnee/TableEnseignant',
        icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Departements',
        to: '/donnee/TableDepartement',
        icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Filieres',
        to: '/donnee/TableFiliere',
        icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Salle',
        to: '/donnee/TableSalle',
        icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Matieres',
        to: '/donnee/TableMatiere',
        icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Module',
        to: '/donnee/TableModule',
        icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cours',
        to: '/donnee/TableCours',
        icon: 'cil-people',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Devoirs',
        to: '/donnee/TableDevoir',
        icon: 'cil-people',
      },
     
    ]
  },

  
  {
    _tag: 'CSidebarNavDropdown',
    name: <div>
      <div className="hexagon-menu clear">

<div className="hexagon-item">
    <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <a target="_blank" class="hex-content">
    <span className="hex-content-inner">
    <span className="icon">
        <i className="fa fa-id-badge"></i>
    </span>
    <span className="title">Administration</span>
    </span>
    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
    </a>
</div>
</div>
    </div>, 
    route: '/Administration',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'gestion des utilisateurs',
        to: '/userss'
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'PROFILS',
        to: '/profile',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: <div>
      <div className="hexagon-menu clear">

<div className="hexagon-item">
    <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <a target="_blank" class="hex-content">
    <span className="hex-content-inner">
    <span className="icon">
        <i className="fa fa-id-badge"></i>
    </span>
    <span className="title">note et moyenne</span>
    </span>
    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
    </a>
</div>
</div>
    </div>, 
    route: '/note',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'moyenne',
        to: '/notes/SaisiDesNotes'
      },
    
    ]
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: <div>
      <div className="hexagon-menu clear">

<div className="hexagon-item">
    <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="hex-item">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <a target="_blank" class="hex-content">
    <span className="hex-content-inner">
    <span className="icon">
        <i className="fa fa-id-badge"></i>
    </span>
    <span className="title">Stage et <br></br>Soutenance</span>
    </span>
    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
    </a>
</div>
</div>
    </div>, 
    route: '/stages',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Soutenance',
        to: '/stages/soutenance'
      },
    
    ]
  },

  
  /*
  
  {
    _tag: 'CSidebarNavDropdown',
    name: <p style={{color:"black"}}>Administration</p>, 
    route: '/administration',
    icon: 'cil-calculator',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'gestion des utilisateurs',
        to: '/admin/Gestion des utilisateurs',
        icon: 'cil-people',
      },
    ]
  }
    /*

  {
    _tag: 'CSidebarNavTitle',
    _children: ['Theme']
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Colors',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Typography',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Base',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name:  'Collapse',
        to: '/base/collapses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Forms',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Jumbotron',
        to: '/base/jumbotrons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navs',
        to: '/base/navs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navbars',
        to: '/base/navbars',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Progress',
        to: '/base/progress-bar',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Switches',
        to: '/base/switches',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tables',
        to: '/base/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Buttons',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Brand buttons',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dropdowns',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Toaster',
        to: '/notifications/toaster'
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Disabled',
    icon: 'cil-ban',
    badge: {
      color: 'secondary',
      text: 'NEW',
    },
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Labels']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label danger',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label info',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-info'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label warning',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-warning'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
   = className: 'm-2'
  } 
=*/

  
]



