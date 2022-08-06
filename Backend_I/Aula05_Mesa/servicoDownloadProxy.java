package Aula05_Mesa;

public class servicoDownloadProxy implements Download{

    @Override
    public void baixarMusica(String id, String tipoDeConta){
        if(tipoDeConta.equalsIgnoreCase("premium")){
            servicoDownload servicoDownload = new servicoDownload();
            servicoDownload.baixarMusica(id, tipoDeConta);

            System.out.println("Usuário autorizado a baixar música.");
        } else {
            System.out.println("Usuário não autorizado a baixar música.");
        }
    }
}
