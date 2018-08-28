import GoogleTagManagerDataLayerBaseClass from "./GoogleTagManagerDataLayerBaseClass";

export default class GTMLoginUsuario extends GoogleTagManagerDataLayerBaseClass {
    constructor(userId, tipoUsuario, loginEm) {
        super();
        this.evento = "Login de Usuário";
        this.userId = userId;
        this.tipoUsuario = tipoUsuario;
        this.loginEm = loginEm;
    }

    send() {
        if ( this.userId != undefined && this.userId.length != 0 &&
             this.tipoUsuario != undefined && this.tipoUsuario.length != 0 &&
             this.loginEm != undefined && this.loginEm.length != 0
        ) {
            super.send(this.evento, {
                "UserID": this.userId,
                "TipoUsuário": this.tipoUsuario,
                "TipoLogin": this.loginEm
            });
            return true;
        }
        super.handleTentativaDeEnvioErrada(this);
        return false;
    }
}
