import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Mirko K Mohammed</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer currently working at Vercel! In May
                    of 2022 I graduated from Rensselaer Polytechnic Institute
                    with my BS in Computer Science.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:mirkokawa7@gmail.com">
                        mirkokawa7@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    Ladies and gentlemen, Thank you all for being here today as
                    I share a little piece of my journey with you. It's a
                    privilege to stand before you and reflect upon the path I've
                    taken from that eager young student in the photograph to
                    where I am today. As you can see, this photo captures the
                    moment when I first embarked on my educational journey. I
                    was just a wide-eyed child full of curiosity, enthusiasm,
                    and an unmistakable love for computer science. Even back
                    then, I knew that this was my passion, and I was determined
                    to pursue it. Fast forward to today, and I am proud to stand
                    here as a software engineer at Bruska Company, a renowned
                    professional company in Iraq. It's a journey that has been
                    marked by countless hours of learning, perseverance, and a
                    commitment to my passion for computer science. My journey in
                    computer science has been both challenging and rewarding.
                    I've encountered complex problems, written countless lines
                    of code, and collaborated with brilliant minds in the field.
                    But it's also been incredibly fulfilling, as I've seen my
                    ideas and creations come to life through technology. I've
                    had the opportunity to contribute to projects that have made
                    a real impact on people's lives, and that is a source of
                    great pride.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of my first years of
                            school :)
                        </sub>
                    </p>
                </div>

                <p>
                    I believe that my journey from that school picture to where
                    I am today serves as a testament to the power of passion and
                    determination. It's a reminder that when you follow your
                    heart and pursue what you love, amazing things can happen. I
                    want to encourage each one of you to chase your dreams, just
                    as I did with computer science. I would be remiss if I
                    didn't acknowledge the incredible support system that has
                    helped me along the way. My family, friends, mentors, and
                    colleagues have been there to guide, inspire, and challenge
                    me. Without their support, I wouldn't be standing here
                    today. In conclusion, I want to express my gratitude for
                    this incredible journey that computer science has taken me
                    on. It has allowed me to turn a childhood passion into a
                    fulfilling career, and I couldn't be more grateful.
                    Remember, it's never too early or too late to pursue your
                    dreams. Embrace your passions, work hard, and who knows
                    where your journey may take you. Thank you all for sharing
                    in this moment with me, and I look forward to continuing
                    this incredible adventure in the world of computer science.
                </p>

                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            In addition to my professional pursuits, I believe
                            in maintaining a balanced lifestyle that enriches
                            both my mind and body. Here are some of the habits
                            and hobbies I wholeheartedly enjoy during my free
                            time: English Practice: Language is a bridge to
                            diverse cultures and knowledge. I am dedicated to
                            improving my English language skills constantly.
                            Whether it's through reading, writing, or engaging
                            in conversations, I find immense joy in honing my
                            language abilities. This not only enhances my
                            communication skills but also opens up new doors for
                            global connections. Reading: Books are my faithful
                            companions, and I relish the opportunity to immerse
                            myself in the pages of a well-crafted story or an
                            enlightening piece of non-fiction. Reading not only
                            broadens my horizons but also nurtures my creativity
                            and critical thinking.
                        </p>
                        <br />
                        <p></p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2023
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Fitness at the Gym: A strong body is the foundation for a
                    strong mind. Regular visits to the gym are a part of my
                    routine, where I challenge myself physically, striving for
                    both strength and endurance. This not only keeps me fit but
                    also helps me maintain discipline and determination in all
                    aspects of life. Socializing with Friends: While I'm
                    dedicated to my professional growth, I also value the
                    importance of social connections. Spending quality time with
                    friends allows me to unwind, share experiences, and build
                    meaningful relationships. It's a vital source of happiness
                    and a way to create lasting memories. These hobbies and
                    habits not only provide a sense of fulfillment but also
                    contribute to my personal growth and well-being. They
                    reflect my commitment to continuous self-improvement, a
                    trait that I carry with me in both my personal and
                    professional endeavors. 
                     Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:mirkokawa7@gmail.com">
                        mirkokawa7@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
