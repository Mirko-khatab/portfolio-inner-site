import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Hover</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.mangbot.com/'}
                        >
                            <h4>www.mangbot.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend developer</h3>
                        <b>
                            <p>Summer 2021 - Fall 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                Project: MangBot - Innovative User Comment Automation Website
                During the summer of 2021, I had the incredible opportunity to
                play a pivotal role as a Front-End Developer in the creation of
                the groundbreaking website, MangBot. MangBot was conceived as an
                innovative solution to automatically answer user comments,
                <br /> <br />
                enhancing user engagement and interaction on various digital
                platforms. Design Excellence: As a front-end developer, I was
                deeply involved in crafting the user interface and experience
                <br /> <br />
                (UI/UX) of MangBot. The design approach was focused on
                simplicity, accessibility, and visual appeal. Leveraging the
                power of Next.js, a cutting-edge framework for building React
                applications, I was able to create a responsive and highly
                interactive web application. Key design highlights include:
                Intuitive User Interface: The website's design was carefully
                crafted to ensure users could easily navigate and interact with
                MangBot.
                <br /> <br />
                Clear and user-friendly layouts, intuitive navigation menus, and
                an aesthetically pleasing color scheme were implemented to
                provide a seamless experience. Responsive Design: Recognizing
                the importance of accessibility across various devices, I
                ensured that the website was fully responsive. Users could
                engage with MangBot flawlessly on desktops, tablets, and mobile
                devices. Engaging Visual Elements: Visual elements such as
                animations, illustrations, and dynamic content were incorporated
                to captivate users' attention while maintaining a professional
                and cohesive appearance. Development Prowess: The heart of
                MangBot's success lay in its development, and as a Front-End
                Developer, I played a key role in building a robust and
                efficient application. Utilizing Next.js, I employed the latest
                web development best practices to deliver an exceptional
                product: Fast and Efficient: Next.js allowed us to create a
                performant website with server-side rendering (SSR)
                capabilities, resulting in rapid page load times and improved
                SEO. Dynamic Content Handling: MangBot required real-time
                updates and dynamic content. Leveraging Next.js's data-fetching
                capabilities, I ensured that user comments were processed and
                answered promptly, creating a seamless experience. Modular
                Codebase: I maintained a clean and organized codebase with
                modular components, enhancing code reusability and
                maintainability. API Integration: I collaborated closely with
                the backend team to integrate MangBot with the necessary APIs,
                ensuring smooth data flow and communication. In conclusion, my
                role as a Front-End Developer for MangBot in the summer of 2021
                was a resounding success. The website's design and development
                were executed with precision and innovation, resulting in a
                user-friendly, responsive, and visually engaging platform.
                MangBot achieved its goal of automating user comments, and I am
                proud to have been a part of this cutting-edge project that
                pushed the boundaries of user engagement and automation in the
                digital realm. The experience gained from MangBot continues to
                inform my work as a front-end developer, and I look forward to
                contributing to more groundbreaking projects in the future.
            </div>

            {/* <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>K-F/X</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://kfxnyc.com/'}
                        >
                            <h4>www.kfxnyc.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Special Effects Technician</h3>
                        <b>
                            <p>Fall 2019, Summer 2021</p>
                        </b>
                    </div>
                </div>
            </div> */}
            {/* <div className="text-block">
                <p>
                    Applied problem solving and technical skills to operate
                    large equipment such as rain machines, fog machines, small
                    explosives and general rigging with a professional crew of
                    50+ people.
                </p>
                <br />
                <h3 style={styles.indent}>Screen Credits:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Ray Donovan</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/ray-donovan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Ray Donovan: The Movie</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/titles/3508117/ray-donovan-the-movie"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Hightown</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.starz.com/us/en/series/hightown/57463"
                                target="_blank"
                                rel="noreferrer"
                            >
                                STARZ
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Bull</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.cbs.com/shows/bull/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CBS
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• At Home with Amy Sedaris</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.trutv.com/shows/at-home-with-amy-sedaris"
                                target="_blank"
                                rel="noreferrer"
                            >
                                truTV
                            </a>{' '}
                            ]
                        </p>
                    </li>
                </ul>
            </div> */}
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
