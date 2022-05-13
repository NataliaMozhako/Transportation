import React, {useState} from 'react';

function About() {
    const [company, setCompany] = useState({id: 1, title: 'ИП Можако Д.В.', description: 'Наша компания оказывает услуги по перевозке грузов по Беларуси,  из Беларуси в Россию и из России в Беларусь. Мы предоставляем страхование CMR, которое обеспечивает защиту груза в процессе транспортировки и покрывает риски с момента получения перевозчиком товара и до тех пор, пока он не будет передан получателю. Залог нашей успешной деятельности – это качественный сервис и индивидуальный подход к клиентам. Мы гарантируем качество, оптимальные сроки доставки и приемлемую стоимость транспортных услуг.',
    document: 'https://drive.google.com/file/d/19N3noFa4PaG5xygjgGbtTzod9ylIcVFg/view?usp=sharing',
    email: '', address: '', mobilenumberone: '', mobilenumbertwo: '' })
    
    console.log(company.description)
    return (
        <div className='aboutsectioncontext'>
                    <div id="namelabel">О КОМПАНИИ</div>
                    <div id="abouttext">{company.description}</div>
                    <a id="aboutlink" href={company.document} target="blank">Свидетельство о гос. регистрации</a>
                    <div id="aboutsublabel">Мы работаем по алгоритму:</div>
                    <div className='algocontainer'>
                        <div className='step'> 1
                            <div className='stepname'>ЗАЯВКА И РАССЧЕТ СТОИМОСТИ</div>
                            <div className='stepdescr'>Позвоните или оставьте заявку — мы оперативно ответим.</div>
                        </div>
                        <div className='step'> 2
                            <div className='stepname'>СОГЛАСОВАНИЕ УСЛОВИЙ И СОСТАВЛЕНИЕ ДОГОВОРА</div>
                        </div>
                        <div className='step'> 3
                            <div className='stepname'>ПОЛУЧЕНИЕ И ДОСТАВКА ГРУЗА</div>
                        </div>
                        <div className='step'> 4
                            <div className='stepname'>ОПЛАТА ПО ФАКТУ ПОЛУЧЕНИЯ</div>
                            <div className='stepdescr'>Наличная и безналичная формы оплат.</div>
                        </div>
                    </div>
                </div>      
    );
}

export default About;