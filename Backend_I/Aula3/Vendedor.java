package Aula3;

public abstract class Vendedor {
    protected  String nome;
    protected  int vendas = 0;
    protected  int pontosPorVenda;

    public void vender(int qtdVendas){
        this.vendas += qtdVendas;

        System.out.println(this.nome + "realizou " + qtdVendas + " vendas...");
    }

    //Método q calcula os pontos do vendedor de acordo com os seus aspectos a serem considerados
    public abstract int calcularPontos();

    //Template Method -- recebe o total de pontos calculados a partir da subclasse e valida cada item
    public String mostrarCategoria(){
        int pontosVendedor = calcularPontos();
        return this.nome+" tem um total de " + pontosVendedor + " pontos e categoriza como " + getNomeCategoria(pontosVendedor);
    }

    //Recebo os pontos e informo uma categorização
    private String getNomeCategoria(int pontosVendedor){
        if(pontosVendedor <20){
            return "Vendedor Novato";
        }else if(pontosVendedor <31){
            return  "Vendedor aprendiz";
        }else if(pontosVendedor <41){
            return  "Vendedor bom";
        }else {
            return "Vendedor Mestre";
        }
    }
}
