import '../css/home.css'

function Home(){
    return(
        <div className="Home">
            <div className='Titulos'>
                <h2 className='Titulo'>Bem-Vindo a Página inicial da Nossa Av2</h2>
                <p className='Sub'>Conheça os Melhores Cosplays do SESI/SENAI!</p>
            </div>
            <div className='Imagens'>
                <img className='FOTO1' src={require('../assets/HOME.jpg')} width={250} height={450}/>
                <img className='FOTO2' src={require('../assets/FOTO3.jpg')} width={250} height={450}/>
                <img className='FOTO3' src={require('../assets/FOTO4.jpg')} width={250} height={450}/>
                <img className='FOTO4' src={require('../assets/FOTO5.jpg')} width={250} height={450}/>
                <img className='FOTO5' src={require('../assets/FOTO6.jpg')} width={250} height={450}/>
                <img className='FOTO6' src={require('../assets/FOTO7.jpg')} width={250} height={450}/>
            </div>
            <div className='Textos'>
                <p className='Texto1'>
                    A Turma mais
                    <br/>
                     F#$% do
                     <br/>
                      SESI/SENAI
                </p>
                <p className='Texto2'>
                    Povo da Turma
                    <br/> 
                    da Mônica
                </p>
                <p className='Texto3'>
                    Dollynho e não
                    <br/>
                     sei as outras
                     <br/>
                      duas
                </p>
                <p className='Texto4'>
                    Tigrinho Man
                </p>
                <p className='Texto5'>
                    Foveira e o 
                    <br/>
                    Teacher Top
                </p>
                <p className='Texto6'>
                    As operadoras<br/> Tim e Claro <br/>+ Flanelinha
                </p>
            </div>
        </div>
    )
}

export default Home