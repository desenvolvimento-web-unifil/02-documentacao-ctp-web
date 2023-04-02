Atalho abrir markdown ctrl + k e apos solta e aperta V


```mermaid
erDiagram

    USER ||--|{ APOSTA : FAZ
    USER ||--|{ CARTEIRA :POSSUI
    CARTEIRA ||--|{ DEPOSITAR : PODE
    CARTEIRA ||--|{ SACAR : PODE
    APOSTA ||..|{ JOGOS : CONTEM
    USER ||--|{ SUPORTE : ACESSA
    USER ||--|{ PERFIL : POSSUI
    SUPORTE||--|{ FAQ : CONTEM
    SUPORTE||--|{ CONTATO : COTEM

```
