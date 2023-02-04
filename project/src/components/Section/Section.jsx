import './Section.css';



const Section = () => {

    return (
        <div className='Section'>

            <div className='sectionHead'>
                <i class="fa-solid fa-arrow-left"></i>
                <h2>Tava və qazan dəsti tefal </h2>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div className='filter'>
              <div className='filterLeft'>
              <button>Filtr</button>
               <a href="#">Çeşidlənmə</a>
              </div>
               <i class="fa-solid fa-filter"></i>
            </div>
        </div>
    )
}

export default Section;