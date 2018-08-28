export default class GTMDataLayerAdapter {
    constructor(objetoDeAdaptacao) {
        this.objetoDeAdaptacao = objetoDeAdaptacao;
    }
    send() {
        this.objetoDeAdaptacao.send();
    }
}
