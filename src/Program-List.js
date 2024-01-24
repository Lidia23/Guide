import './Program-List.css';
import Menu from './Menu.js';
import Footer from './Footer.js';

function Main(){
    return(
        <div className='main'>
            <Menu />
            <main>
    <div id="program-banner">
        <h1>Programs</h1>
        <div class="url-route">
            <a href="home" >Home</a>
            <span> &gt;</span>
            <a href="universitetet">Universities</a>
            <span> &gt;</span>
            <a href="projectlist">Programs</a>
        </div>
    </div>
    <section id="program-list">
        <a href="program/exchange-university-of-pavia.html"> <div class="program">
            <img src="../images/program-images/university-of-pavia.png" alt="" />
            <h6>Exchange Program University of Pavia</h6>

            <ul>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>fees</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>scholarship</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>subjects</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>documents</a></li>
            </ul>
        </div></a>
        <a href="program/exchange-university-of-bologna.html"> <div class="program">
            <img src="../images/university-images/university-of-bologna.png" alt="" />
            <h6>Exchange Program University of Bologna</h6>

            <ul>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>fees</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>scholarship</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>subjects</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>documents</a></li>
            </ul>
        </div></a>
        <a href="program/exchange-university-of-bialystok.html"><div class="program">
            <img src="../images/program-images/university-of-bialystock.png" alt="" />
            <h6>Exchange Program University of Bialystok</h6>

            <ul>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>fees</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>scholarship</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>subjects</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>documents</a></li>
            </ul>
        </div></a>
        <a href="program/exchange-university-of-ljubljana.html"><div class="program">
            <img src="../images/program-images/university-of-ljubljana.png" alt="" />
            <h6>Exchange Program University of Ljubljana</h6>

            <ul>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>fees</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>scholarship</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>subjects</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>documents</a></li>
            </ul>
        </div></a>
        <a href="program/exchange-university-of-poitiers.html"> <div class="program">
            <img src="../images/program-images/university-of-poitier.png" alt="" />
            <h6>Exchange Program University of Poitiers</h6>

            <ul>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>fees</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>scholarship</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>subjects</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>documents</a></li>
            </ul>
        </div></a>
        <a href="program/exchange-complutense-university-of-madrid.html"> <div class="program">
            <img src="../images/program-images/complutense-university-of-madrid.png" alt="" />
            <h6>Complutense University of Madrid</h6>

            <ul>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>fees</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>scholarship</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>subjects</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>documents</a></li>
            </ul>
        </div></a>
        <a href="program/exchange-the-university-of-messina.html"><div class="program">
            <img src="../images/program-images/university-of-messina.png" alt="" />
            <h6>Exchange Program The University of Messina</h6>

            <ul>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>fees</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>scholarship</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>subjects</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>documents</a></li>
            </ul>
        </div></a>
        <a href="program/exchange-masaryk-university.html"> <div class="program">
            <img src="../images/program-images/masaryk-university.png" alt="" />
            <h6>Exchange Program Masaryk University</h6>

            <ul>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>fees</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>scholarship</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>subjects</a></li>
                <li><a href=""><i class="fa-solid fa-arrow-right"></i>documents</a></li>
            </ul>
        </div></a>
    </section>
</main>
<Footer />
        </div>
    )
}
export default Main;