const student = "Акулов Платон Александрович";

document.getElementById("student").innerHTML = student;

function years(birthdate) 
    {
      now = new Date();
      thisyear = new Date(birthdate);
      thisyear.setFullYear(now.getFullYear());
      birthdate = new Date(birthdate);
      birthdate.setMonth(birthdate.getMonth()-1);
      agediff = new Date(now - birthdate);
      age = Math.abs(agediff.getFullYear() - 1970);
          if ((now - thisyear) < 0) {
          age = age - 1;
      } 
      return age
    } 
    
const guests =
    [
    {name: 'Пономарев Андрей Алексеевич', gender: 'Мужчина', birthday: '11.12.1980'},
    {name: 'Рыбакова Алина Семёновна', gender: 'Женщина', birthday: '16.04.1974'},
    {name: 'Молчанов Даниил Ильич', gender: 'Мужчина', birthday: '21.03.1984'},
    {name: 'Смирнова София Львовна', gender: 'Женщина', birthday: '02.01.1987'},
    {name: 'Владимиров Артём Григорьевич', gender: 'Мужчина', birthday: '07.12.1990'},
    {name: 'Маслова Елизавета Егоровна', gender: 'Женщина', birthday: '10.10.1997'},
    {name: 'Назарова Вера Романовна', gender: 'Женщина', birthday: '01.05.1983'},
    {name: 'Иванов Иван Фёдорович', gender: 'Мужчина', birthday: '05.05.1999'},
    {name: 'Дмитриев Алексей Григорьевич', gender: 'Мужчина', birthday: '12.11.1998'},
    {name: 'Овчинников Платон Александрович', gender: 'Мужчина', birthday: '26.05.1999'},
    {name: 'Мартынова Софья Тимуровна', gender: 'Женщина', birthday: '07.06.1995'},
    {name: 'Соколов Михаил Адамович', gender: 'Мужчина', birthday: '11.03.1979'}
    ]

const guest = guests.length;
const woman = guests.filter(guest => guest.gender == 'Женщина').length
const man = guests.filter(guest => guest.gender == 'Мужчина').length
   
console.log("Гости:")
for (let user_index in guests) {
    user = guests[user_index]
    name_short = user.name.split(' ')
    name_short = `${name_short[0]} ${name_short[1].substr(0,1)}. ${name_short[2].substr(0,1)}.`
    gender = (user.gender == 'man' && 'М') || 'Ж'
    birth = user.birthday.split('.')
    age = years(new Date(birth[2], birth[1], birth[0]))
    let visitor = (`${name_short}, ${gender}, Возраст: ${age}`);
console.log(visitor); 
} 
console.log("Всего гостей:" + guest)
console.log("Мужчин:" + man)
console.log("Женщин:" + woman) 

//Часть кода позаимствовал у одногрупников, из-за простоты и логичности. 
//Во всём разобрался, могу пояснить, что за что отвечает