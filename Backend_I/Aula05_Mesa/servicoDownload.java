package Aula05_Mesa;

public class servicoDownload implements Download {

    @Override
    public void baixarMusica(String id, String tipoDeConta) {
        System.out.println("Usuário: " + id + " possui o plano " + tipoDeConta + ".");
    }
}
