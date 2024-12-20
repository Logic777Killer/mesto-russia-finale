# Проектная работа Mesto –  

Интерактивная страница, на которую можно добавлять фотографии, удалять их и ставить «лайки».

---

## Основная функциональность:

- При загрузке на странице рендерятся шесть карточек, которые добавляет JavaScript с использованием шаблона `template`.  
- В проекте предусмотрены модальные окна (попапы), содержащие формы для работы с данными или контент для отображения пользователю.  
- **Форма редактирования профиля**:  
  - Открывается по нажатию на кнопку, заполняется текущими данными пользователя.  
  - При изменении данных и закрытии формы без сохранения при повторном открытии отображаются исходные данные.  
  - Данные из формы обновляют информацию на странице без перезагрузки.  
- **Форма добавления карточки**:  
  - Открывается по кнопке, добавляет карточку на страницу.  
  - При добавлении пустые поля формы валидируются и отображаются соответствующие сообщения об ошибках.  
  - Ошибки отображаются под каждым полем, а их наличие не изменяет высоту модального окна.  
- **Модальное окно с картинкой**:  
  - Открывается при клике на изображение карточки и отображает его в увеличенном виде.  
- Модальные окна закрываются на любых разрешениях экрана.  
- Модальное окно закрывается при клике на фон (оверлей), но при выделении текста внутри формы случайное закрытие исключено. 
- Также модальные окна закрываются при помощи клавиши Escape. 
- Реализовано плавное открытие и закрытие модальных окон с помощью CSS.  

---

## Валидация форм:

- Все поля форм валидируются при вводе данных с использованием JavaScript.   
- Реализована обработка ошибок для каждого поля формы с подсказками для пользователя.  

---

## Технические улучшения:

- Применена проверка кликов по оверлею через событие `mousedown`, чтобы избежать случайного закрытия окна при выделении текста.  

---

## Используемые технологии:

- HTML, CSS, JavaScript  
- Методология БЭМ  
- Плавная анимация через `transition`  
- Адаптивная верстка с использованием медиа-запросов  
- Работа с DOM и валидация форм с помощью JavaScript  
- Сборка с помощью Webpack




## Протестировать работу сайта можно по ссылке:
https://logic777killer.github.io/mesto-russia-finale/
