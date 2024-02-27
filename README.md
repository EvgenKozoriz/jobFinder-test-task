# Job search app for test task
## Test Task

### Technical stack
1. Next.js 14 with TypeScript
2. Tailwind css
3. heroicons/react
4. Formik, Yup
5. SWR
6. Axios

### Main features

Search for a job by title
View job details
Ability to add to and delete from the list of favourites
Ability to create and delete a profile
View jobs according to your profile
If you have created a profile, the search on the main page is automatically performed by its job title
Pagination on the main job search page

### Detailed description of the app

When the user first enters the site, he sees the main page with the job search
1. he can search for a job by entering the name of the job he wants to find in the *input* field
cards with a brief description of the vacancies are displayed, as well as two buttons *Show details* and *Add to favorite*
2. pagination is displayed with the page number and the ability to go to the next and previous page
3. the *Show details* button takes the user to the **/job-details/:id** page where they can read more about the vacancy
on this page there is a button *Apply to the job*, which takes you to the job site, as well as a button *back to main*, which returns to the main page
4. if the user returns to the main page, he is on the same page number as the page number stored in **sessionStorage**
the page is reset when a new value is entered in *input*
5. the *Add to favourite* button adds the job to the *Liked* list
if the job is already added, the *Remove from favourite* button is displayed, which removes the job from the list
To view this list, you can click the *Liked* button, which is located in the *header*, the button goes to the **/liked** page
Also on this page there is a button *Back to main*, which returns us to the main page
6. The *Liked* list is stored in **localStorage**.
7. When you return to the main page, the request in the *input* that we made is saved (it is stored in **sessionStorage**)
8. The user has the ability to create a profile, to go to the page, you can click the *Profile* button, which is located in the *header*, the button goes to the page **/create-profile**
If the profile has not been created, the user sees a form with *inputs* can create a profile, validation is created on the form
When the profile is created, it is displayed on the **/create-profile** page
The profile is saved in **localStorage**.
9. The profile can be deleted using the *Delete Profile* button (it is located in the profile), then the profile creation form will be displayed again
10. When the profile is created, you can go using the *Job suggestions* button (located in the profile) to the **/jobs** page, where the work according to the user's profile will be shown
11. When the profile is created, the main page automatically searches for jobs according to the job title specified in the user's profile

# Застосунок з пошуку роботи
## Тестове завдання

### Технічний стек
1. Next.js 14 with TypeScript
2. Tailwind css
3. heroicons/react
4. Formik, Yup
5. SWR
6. Axios

### Головні можливості

Пошук роботи за назвою
Ознайомлення з деталями вакансії
Можливість додати в список збережених,а також видалення звідти
Можливість створення і видалення профілю
Перегляд вакансій згідно профілю
Якщо профіль створено пошук на головній сторінці автоматично ведеться за його назвою роботи
Пагінація на головній сторінці з пошуку роботи

### Детальний опис роботи застосунку

Коли користувач вперше заходе на сайт він бачить головну сторінку з пошуком роботи
1. він може зробити пошук роботи введенням в *інпут* назву роботи, яку він хоче знайти
відображаються картки з коротким описом вакансій а також дві кнопки *Show details* і *Add to favorite*
2. відображається пагінація з номером сторінки і можливістю переходу на наступну і на попередню
3. кнопка *Show details* переводить користувача на сторінку **/job-details/:id** де він може детально ознайомитись з вакансією
на цій сторінці є кнопка *Apply to the job*, яка переносить на сайт вакансії, а також кнопка *back to main*, яка повертає на головну сторінку
4. якщо користувач повертається на головну сторінку то знаходиться на тому ж номеру сторінки, що і був номер сторінки зберігається в **sessionStorage**
сторінка скидається при введені в *інпут* нового значення
5. кнопка *Add to favorite* додає в вакансію в список *Liked*
якщо вакансія вже додана показується кнопка *Remove from favorite*, яка видаляє вакансію зі списку
Щоб подивитись цей список можна натиснути кнопку *Liked*, яка знаходиться в *header*, кнопка переходить на сторінку **/liked**
Також на цій сторінкі присутня кнопка *Back to main*, що повертає нас на головну сторінку
6. Список *Liked* зберігається в **localStorage**
7. При поверненні на головну сторінку запит в *інпуті*, який ми робили зберігається (він зберігається в **sessionStorage**)
8. У користувача є можливість створення профілю, щоб перейти на сторінку можна натиснути кнопку *Profile*, яка знаходиться в *header*, кнопка переходить на сторінку **/create-profile**
Якщо профіль не створено користувач бачить форму з *інпутами* може створити профіль, на формі створена валідація
Коли профіль створено, то він показується на сторінкі **/create-profile**
Профіль зберігається в **localStorage**
9. Профіль можна видалити за допомогою кнопки *Delete Profile*, (вона знаходиться в профілі), тоді знову покажеться форма створення профілю
10. Коли профіль створений можна перейти за допомогою кнопки *Job suggestions* (вона знаходиться в профілі), на сторінку **/jobs**, де буде показано роботи згідно профіля користувача
11. Коли профіль створений на головній сторінці автоматично йде пошук робіт згідно назви роботи, яка вказана в профілі користувача