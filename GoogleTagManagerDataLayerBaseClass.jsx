import TagManager from 'react-gtm-module';

// Aplicado o design de adapter, porém não existe interface obrigando a
// implementação do método send, mas essa implementação é obrigatória a
// quem extende está classe
export default class GoogleTagManagerDataLayerBaseClass {
    send(evento, dados) {
        let tagManagerArgs = {
            "dataLayer": {
                "event": evento
            }
        };
        Object.assign(tagManagerArgs.dataLayer, dados);
        TagManager.dataLayer(tagManagerArgs);
    }

    handleTentativaDeEnvioErrada(dadosParaDepuracao) {
        console.warn(
            'Warning: Tentavida de envio de dados para o Google Tag Manager inválida! Dados para depuração:',
            dadosParaDepuracao
        );
    }
}
