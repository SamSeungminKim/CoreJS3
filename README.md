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
