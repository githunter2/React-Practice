import './Home.css';


import { Header, Section, Card, Footer } from '../../components/allComp'
import tefal1 from '../../img/tefal1.png'
import tefal2 from '../../img/tefal2.png'
import tefal3 from '../../img/tefal3.png'
import tefal4 from '../../img/tefal4.png'
import tefal5 from '../../img/tefal5.png'
import tefal6 from '../../img/tefal6.png'


const Home = () => {

    return (

        <div>
            <header className='header'>

                <Header>
                    <Header />

                </Header>

            </header>


            <section className='section'>
                <Section />
                <div className='Cards'>
                    <Card ad='Tava və Qazan Dəsti TEFAL Ingenio Titanium Prefernce Böyük Set 12 Parça'
                        sekil={tefal1}
                        endirim={70}
                        qiymet={249.99}
                        kredit={13.9}
                        rey={14}
                        ulduz={<i class="fa-solid fa-star"></i>}
                        noneUlduz={<i class="fa-regular fa-star"></i>} />


                    <Card ad='Tava və Qazan Dəsti TEFAL Ingenio Titanium Character Böyük Set 12 Parça'
                        sekil={tefal2}
                        endirim={132}
                        qiymet={399.99}
                        kredit={22.2}
                        rey={26}
                        ulduz={<i class="fa-solid fa-star"></i>}
                        noneUlduz={<i class="fa-regular fa-star"></i>} />

                    <Card ad='Tava və Qazan Dəsti TEFAL Ingenio Titanium Talent Pro Böyük Set 12 Parça'
                        sekil={tefal3}
                        endirim={80}
                        qiymet={599.99}
                        kredit={33}
                        rey={85}
                        ulduz={<i class="fa-solid fa-star"></i>}
                        noneUlduz={<i class="fa-regular fa-star"></i>} />

                    <Card ad='Tava və Qazan Dəsti TEFAL Ingenio Titanium Ultimate Böyük Set 12 Parça'
                        sekil={tefal4}
                        endirim={200}
                        qiymet={609.99}
                        kredit={34}
                        rey={71}
                        ulduz={<i class="fa-solid fa-star"></i>}
                        noneUlduz={<i class="fa-regular fa-star"></i>} />

                    <Card ad='Tava qazan + aksesuar dəsti Bonera Vogue Duz Qranit Krem 16 parça'
                        sekil={tefal5}
                        endirim={90}
                        qiymet={449.99}
                        kredit={25}
                        rey={55}
                        ulduz={<i class="fa-solid fa-star"></i>}
                        noneUlduz={<i class="fa-regular fa-star"></i>} />

                    <Card ad='Tava qazan dəsti Shosman Hilal 9 parça'
                        sekil={tefal6}
                        endirim={150}
                        qiymet={379.99}
                        kredit={21}
                        rey={15}
                        ulduz={<i class="fa-solid fa-star"></i>}
                        noneUlduz={<i class="fa-regular fa-star"></i>} />
                </div>

            </section>

            <footer className='footer'>
                <Footer />
            </footer>
        </div>
    )

}

export default Home;