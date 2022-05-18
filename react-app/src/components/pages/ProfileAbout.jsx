import React, {useState} from 'react';
import MyButtonFive from '../UI/buttonFive/MyButtonFive';
import InputWhite from '../UI/inputWhite/InputWhite';
import ProfileLable from '../UI/profileLable/ProfileLable';


function ProfileAbout() {
    const [profiles, setProfiles] = useState({id: 1, userName: 'Smthing text', userSurname: 'Smthing text', userMobilephone: '+375448989898', userEmail: 'user1@mail.ru'})
    
    return (
        <div className="profilepagecontainer">
            <div className='profilepagecontext'>
                <ProfileLable>Имя: {profiles.userName}</ProfileLable>
                <MyButtonFive>Изменить имя</MyButtonFive>
                <div className='changerfield'>
                    <InputWhite type="text" placeholder="Новое имя"/>
                    <div className='changerbtns'>
                        <MyButtonFive>Сохранить</MyButtonFive>
                        <MyButtonFive>Отменить</MyButtonFive>
                    </div>
                </div>                
                <ProfileLable>Фамилия: {profiles.userSurname}</ProfileLable>
                <MyButtonFive>Изменить фамилию</MyButtonFive>
                <div className='changerfield'>
                    <InputWhite type="text" placeholder="Новая фамилия"/>
                    <div className='changerbtns'>
                        <MyButtonFive>Сохранить</MyButtonFive>
                        <MyButtonFive>Отменить</MyButtonFive>
                    </div>
                </div> 
                <ProfileLable>Мобильный номер: {profiles.userMobilephone}</ProfileLable>
                <MyButtonFive>Изменить мобильный номер</MyButtonFive>
                <div className='changerfield'>
                    <InputWhite type="text" placeholder="Текущий пароль"/>
                    <InputWhite type="text" placeholder="Новый мобильный номер"/>
                    <div className='changerbtns'>
                        <MyButtonFive>Сохранить</MyButtonFive>
                        <MyButtonFive>Отменить</MyButtonFive>
                    </div>
                </div> 
                <ProfileLable>Электронная почта: {profiles.userEmail}</ProfileLable>
                <MyButtonFive>Изменить электронную почту</MyButtonFive>
                <div className='changerfield'>
                    <InputWhite type="text" placeholder="Текущий пароль"/>
                    <InputWhite type="text" placeholder="Новая электронная почта"/>
                    <div className='changerbtns'>
                        <MyButtonFive>Сохранить</MyButtonFive>
                        <MyButtonFive>Отменить</MyButtonFive>
                    </div>
                </div> 
                <MyButtonFive>Изменить пароль</MyButtonFive>
                <div className='changerfield'>
                    <InputWhite type="text" placeholder="Текущий пароль"/>
                    <InputWhite type="text" placeholder="Новый пароль"/>
                    <InputWhite type="text" placeholder="Новый пароль повторно"/>
                    <div className='changerbtns'>
                        <MyButtonFive>Сохранить</MyButtonFive>
                        <MyButtonFive>Отменить</MyButtonFive>
                    </div>
                </div> 
            </div>
        </div>
    );

} 

export default ProfileAbout;