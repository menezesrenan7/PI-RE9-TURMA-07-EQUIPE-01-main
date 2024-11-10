export default function LandingPage1() {
    return(
        <main>
            <aside>
                <h2 className="txt1"><span>O site de vagas</span></h2>
                <h2 className="txt2">mais usado do Brasil</h2>
                <p className="txt3">Estamos em todo o Brasil, com oportunidades para diversas áreas. Além disso, não importa se é seu primeiro emprego ou se você já tem uma carreira sólida. Divulgamos vagas de trabalho para todos os níveis.</p>
                <div className="form-container">
                    <form>
                    <label htmlFor="what">Qual?</label>
                        <input className="a" type="text" placeholder="Cargo ou Palavra-Chave"/>
                    </form>
                    <h1 className="form-diviser">|</h1>
                    <form>
                        <label htmlFor="what">Onde?</label>
                        <input className="b" type="text" placeholder="Localização"/>
                    </form>

                    <button className="btn-form">BUSCAR VAGAS</button>
                    
                </div>
            
                
                    <hr className="diviser"/>
                

            </aside>
            
           
                

            <article>
                <img src="https://cdn-icons-png.flaticon.com/512/5928/5928334.png" alt=" " />     
            </article>

            
            
            
        </main>       
    )
}