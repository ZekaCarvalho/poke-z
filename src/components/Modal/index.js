import React from 'react'

export default function Modal({hideModal}) {
    return (
        <div style={{  
            backgroundColor: '#0E0A14ef',
            width:'100%',
            height:'100%',
            top: '0',
            position:'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: '600ms',
          }}>
              <div style={{  
            backgroundColor: 'white', padding:'50px 80px', display:'flex', flexDirection:'column'}}>
                <a href={"https://c19boasnoticias.netlify.app/sobre.html"} target={"_blank"} rel={"noopener noreferrer"}style={{paddingBottom:'20px', textAlign: 'center'}}>Sobre o Desenvolvedor</a>

                <h1 style={{paddingBottom:'20px', textAlign: 'center'}}>COMPRA REALIZADA <br/>PARABÉNS!!!</h1>
                <p style={{paddingBottom:'20px', textAlign: 'center'}}>Volte sempre!</p>
                
        <button onClick={() => hideModal()}>OK</button></div>
        
        </div>
    )
}
