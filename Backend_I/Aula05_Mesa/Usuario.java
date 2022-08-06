package Aula05_Mesa;

public class Usuario {
    private String id;
    private String tipoDeConta;

    public Usuario(String id, String tipoDeConta) {
        this.id = id;
        this.tipoDeConta = tipoDeConta;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTipoDeConta() {
        return tipoDeConta;
    }

    public void setTipoDeConta(String tipoDeConta) {
        this.tipoDeConta = tipoDeConta;
    }
}
