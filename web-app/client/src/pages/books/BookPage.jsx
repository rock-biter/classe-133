function BookPage() {

  // recuperare l'id del libro dal path della rotta

  return <>
    <section>
      <div className="container">
        <h1>Titolo del libro</h1>
        <div>
          nome autore
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse incidunt cum, minus suscipit saepe unde!
        </p>
        {/* media valutazioni con stelline */}
      </div>
    </section>
    <section>
      <div className="container">
        <h2>Tutte le recensioni</h2>
      </div>
      <div className="container">
        elenco delle recensioni
      </div>
    </section>
    {/* form per nuova recensione */}
  </>
}

export default BookPage;