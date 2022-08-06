package Aula05_Mesa;

import org.junit.jupiter.api.Test;

public class UsuarioTest {
    Usuario u1 = new Usuario("001","free");
    Usuario u2 = new Usuario("002","premium");
    Usuario u3 = new Usuario("003","premium");
    Usuario u4 = new Usuario("004","free");
    Usuario u5 = new Usuario("005","free");
    Usuario u6 = new Usuario("006","premium");

    Download download = new servicoDownloadProxy();


    @Test
    public void testUsuario(){
        download.baixarMusica(u1.getId(), u1.getTipoDeConta());
        System.out.println(u1);

        download.baixarMusica(u2.getId(), u2.getTipoDeConta());
        System.out.println(u2);

        download.baixarMusica(u3.getId(), u3.getTipoDeConta());
        System.out.println(u3);

        download.baixarMusica(u4.getId(), u4.getTipoDeConta());
        System.out.println(u4);

        download.baixarMusica(u5.getId(), u5.getTipoDeConta());
        System.out.println(u5);

        download.baixarMusica(u6.getId(), u6.getTipoDeConta());
        System.out.println(u6);
    }

}
