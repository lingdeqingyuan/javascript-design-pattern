/**
 * 简单工厂模式
 */

// 构造器
function User (name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
}

const user = new User('lilei', 27, 'worker');

// 这种方式需要创建多个类
function User1 (name, age, career) {
  switch (career) {
    case 'product manager':
      return new ProductManager(name, age);
      break;
    case 'coder':
      return new Coder(name, age);
      break;
    default:
      break;
  }
}

// 简单工厂模式
function UserFactory (name, age, career) {
  let work;

  switch (career) {
    case 'coder':
      work = ['code', 'read', 'study'];
      break;
    case 'manager':
      work = ['sleep', 'eat', 'game'];
      break;
    default:
      break;
  }

  return new User(name, age, career, work);
}

/**
 * 总结：工厂模式-封装创建对象的过程
 */