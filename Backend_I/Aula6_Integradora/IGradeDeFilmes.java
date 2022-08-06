package Aula6_Integradora;

public interface IGradeDeFilmes {
    public Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException;

}
