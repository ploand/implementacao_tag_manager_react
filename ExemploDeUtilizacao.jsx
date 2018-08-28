import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import routes from './routes';

import GTMDataLayerAdapter from "./../google_tag_manager/GTMDataLayerAdapter";
import GTMLoginUsuario from "./../google_tag_manager/GTMLoginUsuario";

const ObjetoDataLayer = new GTMDataLayerAdapter(
  new GTMLoginUsuario(
    "userXPTO",
    "tipoXYZ",
    "login através do Facebook"
  )
);
ObjetoDataLayer.send();

const app = document.getElementById('app');
ReactDOM.render(, app);
