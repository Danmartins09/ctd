package Aula2;

import org.junit.jupiter.api.Test;

public class FuncionarioTest {
    @Test
    void Calculos(){
        Funcionario funcionario = new Efetivo("Lucas", "Ferreira", "123456789", 10000, 1, 5000);
        funcionario.pagamentoSalario();

        funcionario = new Contratado("Issao", "Takeuchi", "123456789", 10000, 40);
        funcionario.pagamentoSalario();

    }
}
