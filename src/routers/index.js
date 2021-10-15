import views from "../views";

const CARGA_PADRON = {
    component: views.CargaPadron,
    path:"/cargaPadron"
}

const HOME = {
    component: views.Home,
    path:"/"
}

const InfoRutas = [CARGA_PADRON, HOME];
export default InfoRutas;