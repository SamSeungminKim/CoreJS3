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

### ex6_02
```
[prototype과 __proto__]
- Array instance는 push, pop, forEach()와 같은 Array prototype의 method에 접근 가능하나 (__proto__를 통해 호출 가능)
- Array prototype 내부에 있지 않은 Array method (ex. isArray(), from 등 )는 접근 불가
```

### ex6_03
```
[constructor 프로퍼티]
- 인스턴스의 __proto__가 생성자 함수의 prototype 프로퍼티를 참조
- 인스턴스의 __proto__는 생략 가능하므로, 인스턴스에서 직접 constructor에 접근 가능
```

### ex6_04
```
[constructor 변경]
- constructor는 읽기전용 속성이 부여된 기본형 리터럴 변수(number, string, boolean)를 제외하고 변경 가능
- 다만, constructor를 변경하더라도 참조 대상이 변경될 뿐, 이미 만들어진 인스턴스의 원형이 바뀌거나 데이터 타입이 변경되는 것은 아님.
```

### ex6_05
```
[다양한 constructor 접근 방법]
- 다음은 동일한 대상을 가르킴
  [Constructor]
  [instance].__proto__.constructor
  [instance].constructor
  Object.getPrototypeof([instance]).constructor
  [Consturctor].prototype.constructor
```

### ex6_06
```
[메서드 오버라이드]
- 메서드를 찾는 방식은 가장 가까운 대상인 자신의 프로퍼티를 검색하고, 
  없으면 그 다음으로 가까운 대상인 __proto__를 검색하는 순서로 진행
- iu.getName() 실행시 Prototype getName() 내의 this는 iu를 가르키나
- iu.__proto__.getName() 실행시 Prototype getName() 내의 this는 Person.prototype 임.
```

### ex6_07
```
[배열에서 배열 메서드 및 객체 메서드 실행]
- push()는 Array.prototype의 메서드이며 (arr.__proto__.push())
- hasOwnProperty()는 Arrary.prototype의 상위 Object.prototype의 메서드 임. (arr.__proto__.__proto__.hasOwnProperty())
- Prototype Chain을 타고 올라간다. (프로토타입 체이닝)
```

### ex6_08
```
[메서드 오버라이드와 프로토타입 체이닝]
- arr 변수는 배열이므로 arr.__proto__는 Array.prototype을 참조
- Array.prototype은 객체이므로 Array.prototype.__proto__는 Object.prototype를 참조
```

### ex6_09
```
[Object.prototype에 추가한 메서드에의 접근]
- 모든 prototype은 Object의 instance이므로
- Protype Chain을 타고 끝까지 가면 오른쪽 맨 끝에 Object.prototype을 만남
```

### ex6_09A(추가 예제)
```
[Object.prototype에 접근 못하는 경우]
- Object.creat(null)을 이용하면 __proto__가 없는 객체를 생성할 수 있음.
- 따라서, 프로토타입 체인상 가장 마지막에 있는 Object.prototype에 접근 할 수 없도록 Protype Chain을 끊을 수 있음.
```

### ex6_10
```
[Grade 생성자 함수와 인스턴스]
- 생성자 Grade의 prototype 인 Grade.prototype은 Object의 instance 이므로 Grade의 instance인 g는 Array의 메서드를 사용할 수는 없다.
- 다만, Garde.prototype = []; 를 실행하여 Grade의 prototype을 Array instance를 만들어 준 후, Grade instance gg를 생성하면 gg는 Array의 메서드를 사용할 수 있음.
```


### ex7_01
```
[스태틱 메서드, 프로토타입 메서드]
- 인스턴스 rect1은 프로토타입 메서드에는 접근 가능하나, 
- 생성자 Rectangle의 메서드인 스태틱 메서드 isRectangle에는 직접 접근 할 수 없음.
- 다만, 스태닉 메서드를 사용하려면 Rectangle.isRectangle(rect1) 형태로 실행 가능함.
```

### ex7_02
```
[6-2-4절(ex6-10.js)의 Grade 생성자 함수 및 인스턴스]
- g는 Object Grade의 인스턴스이나, 
- Garde.prototype = []; 를 실행하여 Grade의 prototype을 Array instance를 만들어 준 후, 
- Grade instance g를 생성하면 g는 Array의 메서드를 사용할 수 있음.
```

### ex7_03
```
[length 프로퍼티를 삭제한 경우]
- g.push(70)을 실행했을 때 배열 마지막에 70을 놓기위해 length를 찾아보니
- g.length가 삭제된 관계로, g의 prototype (즉, g.__proto__)을 찾아가니
- length가 있고 값이 0인 관계로 g[0]에 70이 들어가는 원치 않는 결과 발생함.
- push 동작에 의해 g에는 lenght property가 다시 만들어지고 값은 1이 됨. 
```

### ex7_04
```
[요소가 있는 배열을 prototype에 매칭한 경우]
- ex7_03과 같이 g.push(70)을 실행했을 때 배열 마지막에 70을 놓기위해 length를 찾아보니
- g.length가 삭제된 관계로, g의 prototype (즉, g.__proto__)을 찾아가니
- length가 있는데 값이 4임. 
- ex7_03에서는 Prototype에 빈배열[]을 할당했으니 lenght가 0이 었으나,
- ex7_04에서는 Prototype에 길이 4의 배열을 할당한 관계로 lenght에 4가 들어가 있고
- g[4]에 70이 들어가는 원치 않는 결과 발생함.
- push 동작에 의해 g에는 lenght property가 다시 만들어지고 값은 5가 됨. 
- 배열 index 3은 없음. (쓰레기 값 출력?)
```

### ex7_05
```
[Rectangle, Square 클래스]
- 자바스크립트는 프로토타입 기반 언어라서 '상속'의 개념이 존재하지 않으나,
- ES6에서 클래스 문법이 추가되었고 프로토타입을 활용하여 클래스처럼 활용 가능
- 클래스 흉내 내기 연습
  : 본 예제에서는 Rectangle과 Square는 기능이 유사하나 서로 무관한 상태임.
```

### ex7_06
```
[Square 클래스 변형]
- 예제7-05에서는 Square가 width property만 존재했으나,
- 본 예제에서는 Rectangle과 유사하도록(Rectangle의 하위클래스가 될 수 있도록)
  Square에 width 및 height property를 모두 갖도록 함.
- 다만, 아직은 getArea method는 Square.prototype에 정의된 함수를 사용.
```

### ex7_07
```
[Rectangle을 상속하는 Square 클래스]
- 예제7-06에서는 getArea method를 Square.prototype에 정의했으나,
- 본 예제에서는 Square의 생성자에 Rectangle을 Call 하도록(상속하도록) 하였고,
- Square의 instance sq가 프로토타입 체이닝을 따라 Rectangle.prototype의 getArea()method를 사용할 수 있도록 Square.Prototype이 Rectangle instance를 가르키도록 함.
- 다만, sq의 생성자는 프로토타입 체이닝을 타고 Rectangle을 바라봄.
```

### ex7_08
```
[클래스 상속 및 추상화 방법(1) - 인스턴스 생성 후 프로퍼티 제거]
- extendClass1 함수를 만들어 SubClass.protype가 SuperClass를 상속받되,
- 기존 Property는 모두 제거, 필요한 Method는 추가 후 Freezing
```

### ex7_08A(추가예제) 
```
[Rectangle을 상속하는 Square 클래스 - 더글러스 크락포트의 Bridge 빈함수 ]
- 예제7_07에서 추가하여 클래스가 구체적인 데이터를 지니지 않게 
- Property를 지우고 Object를 Freeze 했던 방법과는 다르게
- Bridge 라는 빈함수를 만들어 구현
```

### ex7_09
```
[클래스 상속 및 추상화 방법(2) - 빈 함수를 활용]
- 즉시 실행함수 내부에서 Bridge를 선언하고 이를 클로저로 활용함여 메모리에 불필요한 함수 선언을 줄임
```

### ex7_10
```
[클래스 상속 및 추상화 방법(3) - Object.create 활용]
- Square.prototype의 __proto__가 Rectangle.prototype을 보게하고,
- Square.prototype에는 불필요한 인스턴스 프로퍼티가 없도록 
- Object.create(Rectangle.prototype) 활용
```

### ex7_11
```
[클래스 상속 및 추상화 방법- 완성본(1) - 인스턴스 생성 후 프로퍼티 제거]
- 예제7_08에서는 존재하지 않던 SubClass.prototype.constructor를 
  SubClass 즉 Square를 가르키도록 함.
```

### ex7_12
```
[클래스 상속 및 추상화 방법- 완성본(2) - 빈 함수를 활용]
- 예제7-09에서는 존재하지 않던 SubClass.prototype.constructor를 
  SubClass 즉 Square를 가르키도록 함.
```

### ex7_13
```
[클래스 상속 및 추상화 방법- 완성본(3) - Object.create 활용]
- Square의 consturctor를 지정하기 위해 
- 예제7-10에서는 필요하지 않았던 extendClass3 함수를 정의하고, 
- 그안에 Object.create() 활용하였으며,
- SubClass.prototype.constructor를 SubClass 즉 Square를 가르키도록 함.
```

### ex7_14
```
[상위 클래스 접근 수단인 super 메서드 추가]
- SuperClass의 생성자 함수에 접근하고자 할때는 this.super()
- SuperClass의 프로토타입 메서드에 접근하고자 할때는 this.super(propName) 사용
- sq.getArea()는 SubClass의 메서드 실행
- sq.super('getArea')()를 호출하면 SuperClass의 메서드 실행
```

### ex7_15
```
[ES5와 ES6의 클래스 문법 비교]
- ES6에서 클래스 문법 도입
- class {} 클래스 본문
- constuctor() {} 생성자 함수
- static method(){} 생성자 Class(함수) 자신만 호출할 수 있는 static 메서드
- method(){} Prototype 객체에 할당되어 instance가 (프로토타입 체이닝을 통해) 호출할수 있는 일반 메서드
```

### ex7_16
```
[ES6의 클래스 상속]
- 상속받기 : class extend 부모클래스{}
- consturctor 내부에서 부모 constructor 실행하기 : super() 
- 자신의 this로 부모클래스의 메서드를 사용 하기 : super.method()
```