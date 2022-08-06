package Aula6_Integradora;

public class GradeDeFilmes implements IGradeDeFilmes{
    @Override
    public Filme getFilme(String nomeDoFilme){
        Filme f = null;

        switch (nomeDoFilme){
            case "The White Tiger":
                f = new Filme("The White Tiger", "ARG", "www.wtiger.com");
                break;
            case "His Houser":
                f = new Filme("His Houser", "BRA", "www.hhouser.com.br");
                break;
            case "Over The Moon":
                f = new Filme("Over The Moon", "COL", "www.omoon.com");
                break;
            case "Super Bad":
                f = new Filme("Super Bad", "ARG", "www.sbad.com");
                break;
            case "The Babysitter":
                f = new Filme("The Babysitter", "BTA", "www.babys.com");
                break;
        }
        return  f;
    }
}
