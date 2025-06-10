### ex6_01
```
[Person.prototype]
- suzi.__proto__ 객체 내부에는 _name 프로퍼티 없으므로 undefined 출력.
- suzi 객체 내부에는 _name 프로퍼티 있음. but getName() 함수 없으나...
  __proto__ 생략된 것으로 보아 getName() Method 호출 가능.
- suzi.__proto__ 객체 내부에는 _name 프로퍼티 추가(SUZI__proto__) 후
  iu 라는 새로운 객체를 만들고 iu.__proto__.getName()을 호출하면
  SUZI__proto__를 반환하는데,
  이는 iu.__proto__ 객체는 suzi.__proto__와 동일 객체인 Person.protype을 같이 바라 보기 때문임.
```
