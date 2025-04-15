import java.util.Scanner;

public class ContarLetra {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite uma palavra: ");
        String palavra = scanner.nextLine();
        
        System.out.print("Digite a letra que deseja contar: ");
        char letra = scanner.next().charAt(0);
        
        int contador = 0;
        for (int i = 0; i < palavra.length(); i++) {
            if (palavra.charAt(i) == letra) {
                contador++;
            }
        }
        
        System.out.println("A letra '" + letra + "' aparece " + contador + " vez(es) na palavra '" + palavra + "'.");
        
        scanner.close();
    }
}
