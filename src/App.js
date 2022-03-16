import React, {useState} from 'react';

export default function App(){
  const [statusDisplay, setStatusDisplay] = useState("")
  // const [isEnabled, setIsEnabled] = useState(true)
  const [isChecked, setIsChecked] = useState(false)
  return(
  
      <div className="modal-container" style={{display:statusDisplay}}>
            <div className="modal">
              
               
              <h1>Termos de Condição</h1>

              <p> Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis!Delegadis gente finis, bibendum egestas augue arcu ut est.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Atirei o pau no gatis, per gatis num morreus.

Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Mauris nec dolor in eros commodo tempor. 

Aenean aliquam molestie leo, vitae iaculis nisl.Cevadis im ampola pa arma uma pindureta.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!

Per aumento de cachacis, eu reclamis.Suco de cevadiss deixa as pessoas mais interessantis.

Viva Forevis aptent taciti sociosqu ad litora torquent.Pra lá , depois divoltis porris, paradis.

Manduma pindureta quium dia nois paga.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.

Quem manda na minha terra sou euzis!In elementis mé pra quem é amistosis quis leo.

Interagi no mé, cursus quis, vehicula ac nisi.

Si num tem leite então bota uma pinga aí cumpadi!Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Diuretics paradis num copo é motivis de denguis.

Diuretics paradis num copo é motivis de denguis.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.
 
Sed non consequat odio.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>

                
                
                <button className= "buttonconf" disabled={!isChecked} type="button"onClick={()=>setStatusDisplay("none")}>Confirmar</button>
                
                <div className="accept"> 

                  <input
                    type="checkbox" 
                    id="check"
                    checked={isChecked}
                    onChange={() => isChecked ? setIsChecked(false) : setIsChecked(true)} 
                  />
                  <label for="check"> Li e aceito os termos de condição. </label> 
                </div>
                
               

            </div>   

            
                   
          </div>
     
  )
}