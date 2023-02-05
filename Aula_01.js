 function aula_01(){
   let ws = SpreadsheetApp.create("Aula_01",10,2);        //  Para criar a planilha
   // npP -> Nova Planilha
   let nP = ws.getUrl();                                  //  Obter /ID da planilha criada
   let w2 = SpreadsheetApp.openByUrl(nP);                 //  Acessa a planilha a partir do link 
   let p1 = w2.getActiveSheet();                          //  Acesso a ABA
   let r1 = p1.getRange(1,1);                             //  Acessando Celula
   
   r1.setValue("Gerson Bernardo da Silva");               //  Escrevendo na Celula
 }