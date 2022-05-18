import React, {useState} from 'react';
import MyButtonFive from '../UI/buttonFive/MyButtonFive';
import MyButtonFour from '../UI/buttonFour/MyButtonFour';
import MyButtonTree from '../UI/buttonTree/MyButtonTree';
import InputWhite from '../UI/inputWhite/InputWhite';
import ProfileLable from '../UI/profileLable/ProfileLable';
import ProfileLableS from '../UI/profileLableS/ProfileLableS';


function ProfileAuto() {
    const [automobiles, setAutomobiles] = useState({id: 1, autoName: 'Smthing text', autoPrice: '222', autoHeight: '2.2', autoWidth: '2.1', autoLength: '4.5', autoTonnage: '7000', autoVolume: '25'})
    
    return (
        <div className="profilepagecontainer">
            <div className='profilepagecontext'>
                <MyButtonFour>ДОБАВИТЬ АВТОМОБИЛЬ</MyButtonFour>
                <div className='profileitemhat'>
                    <ProfileLable>Название: {automobiles.autoName}</ProfileLable>
                    <div className='profilebtnoptions'>
                        <MyButtonTree>Удалить</MyButtonTree>
                        <MyButtonTree>Подробнее</MyButtonTree>
                    </div>
                </div>
                <div className='profilemoreabout'>
                    <div className='profileitemhatch'>
                        <ProfileLable>Название: {automobiles.autoName}</ProfileLable>
                        <div className='profilebtnoptions'>
                            <MyButtonTree>Удалить</MyButtonTree>
                            <MyButtonTree>Свернуть</MyButtonTree>
                        </div>
                    </div>
                    <div className='profilemorelist'>
                        <div className='listitemhat'>
                            <ProfileLableS>Цена за км: {automobiles.autoPrice}</ProfileLableS>
                            <MyButtonFive>Изменить цену</MyButtonFive>
                        </div>
                        <div className='changerfield'>
                            <InputWhite value={automobiles.autoPrice} type="text" placeholder="Новая цена за км"/>
                            <div className='changerbtns'>
                                <MyButtonFive>Сохранить</MyButtonFive>
                                <MyButtonFive>Отменить</MyButtonFive>
                            </div>
                        </div> 
                        <div className='listitemhat'>
                            <ProfileLableS>Высота, м: {automobiles.autoHeight}</ProfileLableS>
                            <MyButtonFive>Изменить высоту</MyButtonFive>
                        </div>
                        <div className='changerfield'>
                            <InputWhite value={automobiles.autoHeight} type="text" placeholder="Новая высота, м"/>
                            <div className='changerbtns'>
                                <MyButtonFive>Сохранить</MyButtonFive>
                                <MyButtonFive>Отменить</MyButtonFive>
                            </div>
                        </div> 
                        <div className='listitemhat'>
                            <ProfileLableS>Ширина, м:: {automobiles.autoWidth}</ProfileLableS>
                            <MyButtonFive>Изменить ширину</MyButtonFive>
                        </div>
                        <div className='changerfield'>
                            <InputWhite value={automobiles.autoWidth} type="text" placeholder="Новая ширина, м"/>
                            <div className='changerbtns'>
                                <MyButtonFive>Сохранить</MyButtonFive>
                                <MyButtonFive>Отменить</MyButtonFive>
                            </div>
                        </div> 
                        <div className='listitemhat'>
                            <ProfileLableS>Длина, м: {automobiles.autoLength}</ProfileLableS>
                            <MyButtonFive>Изменить длину</MyButtonFive>
                        </div>
                        <div className='changerfield'>
                            <InputWhite value={automobiles.autoLength} type="text" placeholder="Новая длина, м"/>
                            <div className='changerbtns'>
                                <MyButtonFive>Сохранить</MyButtonFive>
                                <MyButtonFive>Отменить</MyButtonFive>
                            </div>
                        </div> 
                        <div className='listitemhat'>
                            <ProfileLableS>Грузоподъемность, кг: {automobiles.autoTonnage}</ProfileLableS>
                            <MyButtonFive>Изменить грузоподъемность</MyButtonFive>
                        </div>
                        <div className='changerfield'>
                            <InputWhite value={automobiles.autoTonnage} type="text" placeholder="Новая грузоподъемность, кг"/>
                            <div className='changerbtns'>
                                <MyButtonFive>Сохранить</MyButtonFive>
                                <MyButtonFive>Отменить</MyButtonFive>
                            </div>
                        </div> 
                        <div className='listitemhat'>
                            <ProfileLableS>Объем, м3: {automobiles.autoVolume}</ProfileLableS>
                            <MyButtonFive>Изменить объем</MyButtonFive>
                        </div>
                        <div className='changerfield'>
                            <InputWhite value={automobiles.autoPrice} type="text" placeholder="Новый объем, м3"/>
                            <div className='changerbtns'>
                                <MyButtonFive>Сохранить</MyButtonFive>
                                <MyButtonFive>Отменить</MyButtonFive>
                            </div>
                        </div> 
                    </div>
                </div>                
            </div>
        </div>
    );

} 

export default ProfileAuto;