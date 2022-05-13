import React, {useState} from 'react';
import Service from '../service/Service';

function Services() {
    const [services, setServices] = useState([{id: 1, title: 'ПЕРЕВОЗКА СТАНДАРТНЫХ ГРУЗОВ', description: 'Smthing text text text text text text text text text text text text text text text text text text text text text text text '},
    {id: 2, title: 'ПЕРЕВОЗКА С СОБЛЮДЕНИЕМ ТЕМПЕРАТУРНОГО РЕЖИМА', description: 'Smthing text texttextt exttexttexttextte xttexttext texttexttexttexttext texttexttexttexttexttext texttext texttexttext'},
    {id: 3, title: 'ПЕРЕВОЗКА СБОРНЫХ ГРУЗОВ', description: 'Smthing text text text text text text text text text text text text text text text text text text text text text text text '},
    {id: 4, title: 'КОНТРАКТНЫЕ ПЕРЕВОЗКИ', description: 'Smthing text text text text text text text text text text text text text text text text text text text text text text text '}])
    
    const createService = (newService) => {
        setServices([...services, newService])
    }

    const removeService = (service) => {
        setServices(service.filter(f => f.id !== service.id))
    }

    return (
        <div className="servcontainer">
            {services.length !== 0
            ? services.map((service) =>
                    <Service remove={removeService} service={service} />
                )

            : <div className='noFeedbacks'>Добавьте оказываемые услуги!</div>}
        </div>
    );
}

export default Services;