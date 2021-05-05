// core components
import Dashboard from "views/admin/Dashboard.js";
import Icons from "views/admin/Icons.js";
import Login from "views/auth/Login.js";
import Maps from "views/admin/Maps.js";
import Profile from "views/admin/Profile.js";
import Register from "views/auth/Register.js";
import Tables from "views/admin/Tables.js";
// @material-ui/icons components
import PersonAdd from "@material-ui/icons/PersonAdd";
import NoteAdd from "@material-ui/icons/NoteAdd";
import Info from "@material-ui/icons/Info";
import Description from "@material-ui/icons/Description";
import Edit from "@material-ui/icons/Edit";
import Home from "@material-ui/icons/Home";
import VpnKey from "@material-ui/icons/VpnKey";
import University from "@material-ui/icons/School";

var routes = [
  {
    divider: true,
  },
  {
    title: "NAVEGACION PRINCIPAL",
  },
  {
    path: "/index",
    name: "Inicio",
    icon: Home,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Informacion",
    icon: Info,
    iconColor: "Primary",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Documentos",
    icon: Description,
    iconColor: "Warning",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Solicitudes",
    icon: Edit,
    iconColor: "WarningLight",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Agregar Documento",
    icon: NoteAdd,
    iconColor: "Error",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: VpnKey,
    iconColor: "Info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Registrar Usuario",
    icon: PersonAdd,
    iconColor: "ErrorLight",
    component: Register,
    layout: "/auth",
  },
  {
    divider: true,
  },
  {
    title: "PAGINAS INSTITUCIONALES",
  },
  {
    href:
      "https://ww2.ufps.edu.co/",
    name: "UFPS",
    icon: University,
  },
  {
    href:
      "https://divisist2.ufps.edu.co",
    name: "Divisist 2.0",
    icon: University,
  },
  {
    href:
      "https://uvirtual.cloud.ufps.edu.co/",
    name: "Uvirtual UFPS",
    icon: University,
  },
];
export default routes;