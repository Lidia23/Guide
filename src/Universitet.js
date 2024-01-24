import './Universitet.css';
import Menu from './Menu';
import Footer from './Footer';

export default function Universitet() {
    return (
        <div>
            <Menu />
            <main>
                <div id="banner-1">
                    <h1>University of Tirana</h1>
                    <div class="url-route">
                        <a href="home" >Home</a>
                        <span> &gt;</span>
                        <a href="universitetet">Universities</a>
                        <span> &gt;</span>
                        <a href="universiteti">University of Tirana</a>
                    </div>
                </div>
                <section id="university-information">
                    <h3>University of Tirana</h3>
                    <div id="inf-img">
                        <div class="general-information">
                            <p> The University of Tirana was established by the decision of the Council of Ministers of the Republic of Albania,
                                No. 207, dated 30.05.1957 as the <em>“State University of Tirana”</em>.</p>
                            <p> It was composed of six faculties. The beginnings of higher education in Albania go back to 1946 when the
                                first Biennial Higher Pedagogical Institute was opened, followed by the Institute of Science, opened in 1947.
                                In the period from 1946 to 1956, six higher institutes operated in Tirana: The Pedagogical Institute, the Polytechnic I
                                nstitute, the Institute of Medicine, the Institute of Agriculture, and the Institute of Economics and Law. On the
                                basis of these institutes, the first institution of higher education of the type university was established, named
                                “State University of Tirana”. This institution was created to meet the increasing needs of the country for qualified
                                specialists. A large number of professors qualified in foreign universities provided their precious contribution in
                                institution’s strengthening and consolidation.</p>
                            <p> In its first academic year, 1957-1958, the student population of the university was 3,613. Degrees were granted in
                                fifteen specialties. In 1967, the university received its full form with the construction of its first campus giving
                                it a greater dynamism. In 1977, twenty years after its establishment, the full time student population amounted to
                                8,880, about half of whom were females. It should be noted that in these first years 21,368 students graduated,
                                who contributed in all areas of the country’s life.</p>
                            <p> In 1991, the engineering faculties of this university (part of its eleven faculties) were separated from the
                                university to create the Polytechnic University of Tirana, by the decision of Council of Ministers no.
                                215 dated 15.07.1991. In January 2013, the Faculty of Medicine and Faculty of Technical Medical Sciences
                                (the former Faculty of Nursing) separated from Tirana University to create the University of Medicine.</p>
                            <p>At present, the University of Tirana is the largest public university in the country. It consists of six
                                faculties and two institutes, and offers 174 programmes in all three cycles of study, with 779 full time
                                academic staff and around 23,551 students. Thanks to its tradition, the high level of qualification, training
                                and attestation, the University of Tirana remains the most sought-after university in Albania. It is the first
                                choice for the majority of students who finish high schools in the Republic of Albania and the Albanian-speaking
                                lands outside its national borders. UT has been awarded by the President of the Republic with the “Order of Honour
                                of the Nation”, with a citation for outstanding contribution to the development of Albanian science, education,
                                culture and economy, by decree No.1959, dated 19.11.1997</p>

                        </div>
                        <img src="../../images/university-images/fakulteti-i-ekonomise.png" alt="" />
                    </div>
                </section>
                <section id="faculty-list">
                    <h3>Faculties</h3>
                    <p>The  University of Tirana consists of six faculties and two institutes.</p>
                    <ol>
                        <li>Faculty of Law </li>
                        <li>Faculty of Economics </li>
                        <li>Faculty of History & Philology </li>
                        <li>Faculty of Foreign Languages </li>
                        <li>Faculty of Natural Sciences </li>
                        <li>Faculty of Social Sciences </li>
                    </ol>
                </section>
                <section id="reviews">
                    <h1>Reviews</h1>
                    <div id="review-list">
                        <div class="review">
                            <div class="star-rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p class="person-name">Kiara Rapaj </p>
                            <p class="person-comment">The exchange program experience in this faculty was the best ever. I even suggest to the other
                                since it worth it. The staff, the teaching, student everything was the best.</p>
                        </div>
                        <div class="review">
                            <div class="star-rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p class="person-name">Lidia Qama  </p>
                            <p class="person-comment">The exchange program experience in this faculty was the best ever. I even suggest to the other
                                since it worth it. The staff, the teaching, student everything was the best.</p>
                        </div>
                        <div class="review">
                            <div class="star-rating">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p class="person-name">Adela Skenderaj  </p>
                            <p class="person-comment">The exchange program experience in this faculty was the best ever. I even suggest to the other
                                since it worth it. The staff, the teaching, student everything was the best.</p>
                        </div>
                        <textarea placeholder="Review"></textarea>
                        <button type="submit">Add a review</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}