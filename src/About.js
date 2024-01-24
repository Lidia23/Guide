import './About.css';
import Menu from './Menu';
import Footer from './Footer';

export default function About(){
    return (
        <div className='about'>
            <Menu />
        <main>
    <div id="banner-1">
        <h1>About us</h1>
        <div class="url-route">
            <a href="home">Home</a>
            <span> &gt;</span>
            <a href="about">About Us</a>
        </div>
    </div>

    <section id="idea">
        <div class="info">
            <h1>explorEr Established In 2023</h1>
            <p>From the beginning of our journey in the upper education each of us had a desire to explore other countries
                and cultures. We were curious to learn more about what the world had to offer, how students in other countries
                lived and if their experience in university was different from ours.
                Around this time we got to learn about the Erasmus+ exchange program which stands for the European
                Union's flagship program for education, training, youth and sport. Erasmus gives students from all around
                Europe and other partner countries the chance to study one or more semesters in another country of their choice.
                From the time it was first established in 1987 it has promoted the mobility of more than 10 million students,
                and their experiences are always marked as a life-changing experience. Facing these facts we also wanted
                to be a part of this network.</p>
        </div>
        <img />
    </section>

    <section id="difficulties">
        <div class="info">
            <h1>What difficulties lied ahead?</h1>
            <p>Universities all over the world publish new Erasmus opportunities in their websites, however if you want
                to learn more about the country, study programs, or even talk to current or previous students you find it
                very challenging to find this kind of information. Most of the time you have to do hours of research just
                for one particular opportunity, and if you want to explore more it takes even days. A great deal of students
                are discouraged from this fact.</p>
        </div>
        <div class="img"><img src="" /></div>
    </section>

    <section id="goal">
        <h1>Our goal</h1>
        <p>We believe that our product would solve the problem of seaching for information on different programs as
            well as relieve the anxiety of students experiencing it for the first time. We thought explorEr would be a
            fitting name to our website. It is made up of the world explore and Erasmus but it also signifies the students
            who like explorers are vising other countries and cultures unknown to them. Our slogan is: Explore, Learn, Grow. </p>
        <div><img src=""/></div>
    </section>
</main>
<Footer />
</div>
    );
}