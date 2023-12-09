import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-style.css';
import { allDls, newProject } from './dlssData';
const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Запрошуємо вас у захоплюючий світ наших ігор!</h1>
                <p>та всіх доступних до них додаткових матеріалів</p>
            </header>

            <section>
                <h2>Наша допомога починаючим</h2>
                <div className="dlss-container">
                    {allDls.map((dls, index) => (
                        <div key={index} className="dls">
                            <img src={dls.imageSrc} alt={dls.title} />
                            <Link to={`/purchase/${index + 1}`} className="dls-link">
                                <h3>{dls.title}</h3></Link>
                            <p>{dls.description}</p>
                            <p>Instructor: {dls.instructor}</p>
                            <p>Price: ${dls.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>Нові DLC та модифікації</h2>
                <div className="dlss-container">
                    {newProject.map((dls, index) => (
                        <div key={index} className="dls">
                            <img src={dls.imageSrc} alt={dls.title} />
                            <Link to={`/purchase/new/${index + 1}`} className="dls-link">
                                <h3>{dls.title}</h3></Link>
                            <p>{dls.description}</p>
                        
                            <p>Price: ${dls.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>Для чого цей сайт</h2>
                <p>
                    Цей сайт — ваш кращий союзник у світі розробки 2D ігор на Unity. Тут ви знайдете найактуальніші інструменти, ресурси та поради, щоб створювати захоплюючі 2D ігри. Ми пропонуємо інформацію та підтримку, необхідну для кожного етапу розробки — від ідеї до запуску гри. Діліться знаннями, вивчайте нове та створюйте неймовірні ігрові світи разом з нашим сайтом!
                </p>
            </section>

            <section>
                <h2>Чому наші проекти найкращі </h2>
                <p>
                    Наші проекти — найкращі завдяки неперевершеній команді та вражаючому підходу до кожної деталі. Ми створюємо не просто ігри, ми втілюємо у життя унікальні світи, які зачаровують користувачів. Наші проекти відрізняються не лише якістю геймплею, а й естетикою, історією та вмінням створювати незабутні враження. Кожен проект — це шедевр, втілення ваших ідей у найкращому вигляді. Довірте нам створення найвищої якості ігор та переконайтесь у своїх успіхах разом з нашою командою!
                </p>
            </section>
        </div>
    );
};

export default HomePage;