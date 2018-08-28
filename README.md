# Implementação do Google Tag Manager com React JS

- Utilizado o design pattern adapter
- De acordo com o modelo de implementação do google tag manager, em vários locais da aplicação devem ser implementados data layers diferentes e por isso foi decido por usar o pattern de adapter
- importações utilizam a pasta "google_tag_manager"

## Exemplo de utilização:

```javascript

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

```
