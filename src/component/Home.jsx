import "../style/home.css";
function Home ( props ) {
  

    const listItem = props.listItem;
    console.log("listItem" , listItem);
    

    return (
        <div className="home">This is Home
            <div className="thumb-container">
                {listItem.map( (countrie) =>
                    <div className="thumb" key={countrie.ccn3}>
                        <img src={countrie.flags.png} alt="test" width="280" height="185"/>
                        <div className="thumb-text">
                            <h2>{countrie.name.common}</h2>
                            <p><b>Population :</b> {countrie.population}</p>
                            <p><b>Region :</b> {countrie.region}</p>
                            <p><b>Capital :</b> {countrie.capital[0]}</p>
                        </div> 
                    </div>
                )}
            </div>  
            
        </div>
    )
}

export default Home;